import { useState } from "react";
import styles from "./carsItem.module.css";

export const CarsItem = ({
  car,
  onDragOverHandler,
  onDropHandler,
  onDragStartHandler,
  onDragLeaveHandler,
}) => {
  return (
    <li
      className={styles.card}
      draggable={true}
      onDragStart={(e) => onDragStartHandler(e, car)}
      onDragLeave={(e) => onDragLeaveHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDragEnd={(e) => onDragLeaveHandler(e)}
      onDrop={(e) => onDropHandler(e, car)}
    >
      <img className={styles.image} src={car.image} />
      <h1>{`Model: ${car.name}`}</h1>
      <h3>{`Cost: ${car.cost}$`}</h3>
    </li>
  );
};
