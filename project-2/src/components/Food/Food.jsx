import "./Food.css";
import { food } from "../../data/data";

const Food = () => {
  return (
    <>
      <h1>{food.title}</h1>
      <p>{food.subtitle}</p>
      <ul>
        {food.foods.map((item) => {
          return <li key={item}> - {item}</li>;
        })}
      </ul>
    </>
  );
};

export default Food;
