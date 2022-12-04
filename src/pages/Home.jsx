import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import pizzas from "../assets/pizzas.json";

const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Всі піци</h2>
        <div className="content__items">
          {pizzas.map((obj) => (
            <PizzaBlock {...obj} />
          ))}
        </div>

        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Нажаль, не вдалося отримати піци. Спробуйте пізніше.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
