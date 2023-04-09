import { useState } from "react";
import { CarsItem } from "../CarsItem/CarsItem";
import styles from "./carsList.module.css";

export const CarsList = ({
  cars,
  onDropHandler,
  onDragStartHandler,
  onDragLeaveHandler,
  onDragOverHandler,
  sortCars,
}) => {
  return (
    <ul className={styles.list}>
      {cars.length > 0 ? (
        cars
          .sort(sortCars)
          .map((car) => (
            <CarsItem
              key={car.id}
              car={car}
              onDropHandler={onDropHandler}
              onDragStartHandler={onDragStartHandler}
              onDragLeaveHandler={onDragLeaveHandler}
              onDragOverHandler={onDragOverHandler}
            />
          ))
      ) : (
        <h1>Cars is not defined</h1>
      )}
    </ul>
  );
};
