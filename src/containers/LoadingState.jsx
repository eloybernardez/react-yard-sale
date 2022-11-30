import React from "react";
import "../styles/LoadingState.scss";

const LoadingState = () => {
  const lazyItems = Array(10).fill(
    <>
      <div className="LoadingState__img"></div>
      <div className="LoadingState__text__container">
        <div>
          <div></div>
          <div></div>
        </div>
        <figure></figure>
      </div>
    </>
  );

  return (
    <section className="LoadingState">
      <div className="LoadingState__container">
        {lazyItems.map((item, index) => (
          <div className="LoadingState__item" key={`lazy-item-${index}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingState;
