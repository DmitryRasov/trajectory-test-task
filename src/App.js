import React, { useState, useMemo } from "react";

function App() {
  const [cars, setCars] = useState([
    {
      "id": 1, "name": "Toyota", "model": "Camry", "year": 2021, "color": "red", "price": 21000, "latitude": 55.753215, "longitude": 37.620393
    },
    { id: 2, name: "Honda", model: "Civic", year: 2022 },
    { id: 3, name: "BMW", model: "X5", year: 2020 },
  ]);

  const [sortField, setSortField] = useState("name");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editModel, setEditModel] = useState("");
  const [editYear, setEditYear] = useState("");

  const sortedCars = useMemo(() => {
    if (sortField === 'name') {
      return [...cars].sort((a, b) => a.name.localeCompare(b.name));
    }
    return [...cars].sort((a, b) => a[sortField] > b[sortField] ? 1 : -1);
  }, [cars, sortField]);

  const handleEdit = (id) => {
    const car = cars.find(c => c.id === id);
    setEditName(car.name);
    setEditModel(car.model);
    setEditYear(car.year);
    setEditingId(id);
  };

  const handleSave = (id) => {
    const updatedCars = cars.map(car => {
      if (car.id === id) {
        return { ...car, name: editName, model: editModel, year: editYear };
      } else {
        return car;
      }
    });
    setCars(updatedCars);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
      <div>
        <div>
          Sort by:
          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="name">Name</option>
            <option value="model">Model</option>
            <option value="year">Year</option>
          </select>
        </div>
        {sortedCars.map((car) => (
            <div key={car.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
              {editingId === car.id ? (
                  <div>
                    <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    <input type="text" value={editModel} onChange={(e) => setEditModel(e.target.value)} />
                    <input type="number" value={editYear} onChange={(e) => setEditYear(parseInt(e.target.value))} />
                    <button onClick={() => handleSave(car.id)}>Save</button>
                    <button onClick={() => handleCancel()}>Cancel</button>
                  </div>
              ) : (
                  <div>
                    <div><b>Name:</b> {car.name}</div>
                    <div><b>Model:</b> {car.model}</div>
                    <div><b>Year:</b> {car.year}</div>
                    <button onClick={() => handleEdit(car.id)}>Edit</button>
                  </div>
              )}
            </div>
        ))}
      </div>
  );
}

export default App;