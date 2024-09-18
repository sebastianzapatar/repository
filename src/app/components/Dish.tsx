'use client'
interface DishProps {
    id: string;
    name: string;
  }

  
  const Dish = ({ id, name }: DishProps) => {
    const deleteDish = async (id: string) => {
        console.log('Borrar plato con ID:', id);
        try {
          const res = await fetch(`http://localhost:3500/dishes/${id}`, {
            method: 'DELETE',
          });
          if (!res.ok) {
            throw new Error('Error al eliminar el plato');
          }
          return true; // Devuelve true si la eliminación fue exitosa
        } catch (error) {
          console.error('Error al eliminar el plato:', error);
          return false;
        }
      };
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Plato: {name}</h2>
        <p className="text-gray-600">ID: {id}</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={()=>deleteDish(id)}>
            Borrar
          </button>
        </div>
      </div>
    );
  };
  
  export default Dish;
  