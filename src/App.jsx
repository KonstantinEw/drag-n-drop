import { useState } from "react";
import { CarsList } from "./components/CarsList/CarsList";
import { Form } from "./components/Form/Form";

export const App = () => {
  const carsData = [
    {
      id: 1,
      name: "BMW 3",
      cost: "20000",
      image:
        "https://avatars.mds.yandex.net/get-verba/1540742/2a00000180d7fa047e2e09e71e665301c310/cattouchret",
      order: 1,
    },
    {
      id: 2,
      name: "Lancer",
      cost: "10000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDGK1Gb2bOKqG2eOwDqWScTEEYMhSZsF0GXdT-v3o&s",
      order: 2,
    },
    {
      id: 3,
      name: "Mini cooper",
      cost: "20000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLk9qhlJN4W3AByj4p4T8Y5QB8HvinU5qs1-GgKzk3g&s",
      order: 3,
    },
  ];

  const [cars, setCars] = useState(carsData);
  const [currentCar, setCurrentCard] = useState(null);

  const onDragStartHandler = (e, car) => {
    console.log("drag", car);
    setCurrentCard(car);
  };

  const onDragLeaveHandler = (e) => {
    e.target.style.background = "black";
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "red";
  };

  const onDropHandler = (e, car) => {
    e.preventDefault();
    setCars(
      cars.map((c) => {
        if (c.id == car.id) {
          return { ...c, order: currentCar.order };
        }
        if (c.id == currentCar.id) {
          return { ...c, order: car.order };
        }
        return c;
      })
    );
    e.target.style.background = "black";
    console.log("car", car.id);
    console.log("drop", currentCar.id);
  };

  const sortCars = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div>
      <Form setCars={setCars} />
      <CarsList
        sortCars={sortCars}
        cars={cars}
        setCars={setCars}
        onDropHandler={onDropHandler}
        onDragStartHandler={onDragStartHandler}
        onDragLeaveHandler={onDragLeaveHandler}
        onDragOverHandler={onDragOverHandler}
      />
    </div>
  );
};
