'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
interface FormData {
  name: string;
}

export default function FormInsert() {
  const [formData, setFormData] = useState<FormData>({
    name: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Nuevo estado para manejar la deshabilitación
  const router = useRouter(); // Usar el hook useRouter para la navegación
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Deshabilitar el botón al enviar

    try {
      const response = await fetch('http://localhost:3500/dishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const result = await response.json();
      console.log('Formulario enviado con éxito:', result);
      router.push('/dashboard/dishes'); // Redirigir a la página de inicio después de enviar
      Swal.fire('¡Plato agregado!', 'El plato se ha agregado correctamente', 'success');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      setIsSubmitting(false); // Rehabilitar el botón después de enviar
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting || !formData.name.trim()} // Deshabilitar si está enviando o si el campo está vacío
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  );
}
