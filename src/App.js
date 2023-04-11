import React, {useState, useMemo, useEffect} from "react";
import CarCard from "./components/CarCard";
import CarEdit from "./components/CarEdit";
import CarSelectOptions from "./components/CarSelectOptions";
import Map from "./components/Map";
import {getCarsService} from "./components/services/getCarsService";
import styles from './components/styles/App.module.css'

function App() {
  // if api doesn't work use this:
  // const [cars, setCars] = useState([
  //   // {
  //   //   "id": 1, "name": "Toyota", "model": "Camry", "year": 2021, "color": "red", "price": 15000, "latitude": 95.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 2, "name": "Honda", "model": "Civic", "year": 2022, "color": "red", "price": 34000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 3, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 4, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 5, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 6, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 7, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 8, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 9, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 10, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 11, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  //   // {
  //   //   "id": 12, "name": "BMW", "model": "X5", "year": 2020, "color": "red", "price": 41000, "latitude": 55.753215, "longitude": 37.620393
  //   // },
  // ]);
  const [cars, setCars] = useState([])
  useEffect(() => {
      const getCars = async () => setCars(await getCarsService())

    getCars()
  }, [])

  const [sortField, setSortField] = useState("name");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editModel, setEditModel] = useState("");
  const [editPrice, setEditPrice] = useState("");

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
    setEditPrice(car.price);
    setEditingId(id);
  };
  const handleDelete = (car) => {
    setCars(cars.filter(c => c.id !== car.id))
  }
  const handleSave = (id) => {
    const updatedCars = cars.map(car => {
      if (car.id === id) {
        return { ...car, name: editName, model: editModel, price: editPrice };
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
        <CarSelectOptions val={sortField} handleChange={(e) => setSortField(e.target.value)}/>

        {sortedCars.map((car) => (
            <div key={car.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
              { editingId === car.id
                  ? <CarEdit
                      save={handleSave}
                      cancel={handleCancel}
                      name={editName}
                      model={editModel}
                      price={editPrice}
                      id={car.id}
                      handleName={(e) => setEditName(e.target.value)}
                      handleModel={(e) => setEditModel(e.target.value)}
                      handlePrice={(e) => setEditPrice(e.target.value)}
                  />
                  : <div className={styles.wrapper}>
                    <CarCard
                        car={car}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                    <Map lat={car.latitude} long={car.longitude}/>
                  </div>
              }
            </div>
        ))}
      </div>
  );
}

export default App;