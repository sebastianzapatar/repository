import Dish from "@/app/components/Dish";

const getDishes = async () => {
  const res = await fetch('http://localhost:3500/dishes');
  if (!res.ok) {
    throw new Error('Error al obtener los platos');
  }
  return res.json();
};

const DishesPage = async () => {
  const dishes = await getDishes(); // Llamada al servidor en el servidor

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Platos</h1>
      <ul>
        {dishes.map((dish: { id: string; name: string }) => (
          <Dish key={dish.id} id={dish.id} name={dish.name} />
        ))}
      </ul>
    </div>
  );
};

export default DishesPage;
