import React from "react";
import "../styles/LoadingState.scss";

const LoadingState = () => {
  const lazyItems = Array(10).fill(
    <div className="LoadingState__item">
      <div className="LoadingState__img"></div>
      <div className="LoadingState__text__container">
        <div>
          <div></div>
          <div></div>
        </div>
        <figure></figure>
      </div>
    </div>
  );

  return (
    <section className="LoadingState">
      <div className="LoadingState__container">
        {lazyItems.map((item) => item)}
      </div>
    </section>
  );
};

export default LoadingState;
