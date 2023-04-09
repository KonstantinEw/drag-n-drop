import { useState } from "react";
import styles from "./form.module.css";

export const Form = ({ setCars }) => {
  const [car, setCar] = useState({ name: "", cost: "", image: "" });

  const createCar = (event) => {
    event.preventDefault();
    if (car.name == "" || car.cost == "" || car.image == "") return;
    setCars((prev) => [...prev, { id: prev.length + 1, ...car }]);
    setCar({ name: "", cost: "", image: "" });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={(event) =>
          setCar((prev) => ({ ...prev, name: event.target.value }))
        }
        value={car.name}
        placeholder="Model"
      />
      <input
        className={styles.input}
        onChange={(event) =>
          setCar((prev) => ({ ...prev, cost: event.target.value }))
        }
        value={car.cost}
        placeholder="Cost"
      />
      <input
        className={styles.input}
        onChange={(event) =>
          setCar((prev) => ({ ...prev, image: event.target.value }))
        }
        value={car.image}
        placeholder="Image"
      />
      <button className={styles.button} onClick={(event) => createCar(event)}>
        Add Car
      </button>
    </form>
  );
};
