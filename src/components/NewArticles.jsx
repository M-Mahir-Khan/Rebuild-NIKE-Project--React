import { useState } from "react";
import shoe1 from "/Images/img-view-shoes/shoe1.png"
import shoe2 from "/Images/img-view-shoes/shoe2.png";
import shoe3 from "/Images/img-view-shoes/shoe3.png";
import shoe4 from "/Images/img-view-shoes/shoe4.png";
import shoe5 from "/Images/img-view-shoes/shoe5.png";

const imageSources = [shoe1, shoe2, shoe3, shoe4, shoe5];

const NewArticle = () => {
  const [mainImage, setMainImage] = useState(imageSources[0]);

  return (
    <section id="shoes-view">
      <div className="container mt-5">
        <h1 className="hero-heading text-center sm-mt-5">NEW ARTICLE</h1>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-md-12 col-sm-12 d-flex flex-column flex-lg-row">
            <div className="side-img-container">
              {imageSources.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`shoe${index + 1}`}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
            <div className="img-view-container p-4">
              <img src={mainImage} alt="main-shoe" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 my-5">
            <div className="side-content">
              <h2>
                We pride ourselves on making real shoes from the best fabrics
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                minus nemo voluptatum ad, a ab qui sapiente nam maxime debitis
                tenetur quod voluptas.
              </p>
              <button className="main-btn mt-4">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArticle;
