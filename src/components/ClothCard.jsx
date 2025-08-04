import { useState } from "react";

const ClothCard = ({ mainImg, altImgs, title, subtitle, price, rating }) => {
  const [currentImg, setCurrentImg] = useState(mainImg);

  return (
    <div className="card my-3">
      <div className="product-img">
        <img src={currentImg} alt="product" className="img-fluid" />
      </div>

      <div className="card-text">
        <div className="card-imgs-container my-3">
          {altImgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onMouseEnter={() => setCurrentImg(img)}
            />
          ))}
        </div>

        <div className="card-text-hidden">
          <h2 className="fs-3 mt-3">{title}</h2>
          <p>{subtitle}</p>
          <h3 className="fs-5">{price}</h3>
        </div>

        <div className="product-stars">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i + 1 <= Math.floor(rating)) return <i key={i} className="fa-solid fa-star"></i>;
            if (i + 0.5 <= rating) return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
            return <i key={i} className="fa-regular fa-star"></i>;
          })}
        </div>

        <button className="main-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ClothCard;
