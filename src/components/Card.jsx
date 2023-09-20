import React from "react";
import "./card.css";

function Card() {
  return (
    <div>
      <h3 className="demand">We offer high demand services</h3>
      <div className="container">
        <div className="card">
          <span class="material-symbols-outlined icons blue">edit</span>
          <h4>UI/UX Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil
            quod sapiente labore beatae nostrum dolorem deserunt praesentium,
            eum eveniet explicabo asperiores molestiae consequatur.
          </p>

          <button className="card-button">Get started</button>
        </div>
        <div className="card">
          <span class="material-symbols-outlined icons green">code</span>
          <h4>Front end</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil
            quod sapiente labore beatae nostrum dolorem deserunt praesentium,
            eum eveniet explicabo asperiores molestiae consequatur.
          </p>

          <button className="card-button">Get started</button>
        </div>
        <div className="card">
          <span class="material-symbols-outlined icons orange">menu</span>
          <h4>Back end</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil
            quod sapiente labore beatae nostrum dolorem deserunt praesentium,
            eum eveniet explicabo asperiores molestiae consequatur.
          </p>

          <button className="card-button">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
