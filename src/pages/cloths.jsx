import ClothCard from "../components/ClothCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const productData = [
  {
    mainImg: "/Images/Cloths/cloths1.png",
    altImgs: [
      "/Images/Cloths/cloths1.png",
      "/Images/Cloths/cloths2.png",
      "/Images/Cloths/cloths3.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 4.5,
  },
  {
    mainImg: "/Images/Cloths/cloths4.png",
    altImgs: [
      "/Images/Cloths/cloths4.png",
      "/Images/Cloths/cloths5.png",
      "/Images/Cloths/cloths6.png",
      "/Images/Cloths/cloths7.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 4,
  },
  {
    mainImg: "/Images/Cloths/cloths8.png",
    altImgs: [
      "/Images/Cloths/cloths8.png",
      "/Images/Cloths/cloths9.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 3.5,
  },
  {
    mainImg: "/Images/Cloths/cloths11.png",
    altImgs: [
      "/Images/Cloths/cloths11.png",
      "/Images/Cloths/cloths10.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 4.5,
  },
  {
    mainImg: "/Images/Cloths/cloths12.png",
    altImgs: [
      "/Images/Cloths/cloths12.png",
      "/Images/Cloths/cloths13.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 3.5,
  },
  {
    mainImg: "/Images/Cloths/cloths14.png",
    altImgs: [
      "/Images/Cloths/cloths14.png",
      "/Images/Cloths/cloths15.png",
      "/Images/Cloths/cloths16.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 3,
  },
  {
    mainImg: "/Images/Cloths/cloths17.png",
    altImgs: [
      "/Images/Cloths/cloths17.png",
      "/Images/Cloths/cloths18.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 4,
  },
  {
    mainImg: "/Images/Cloths/cloths19.png",
    altImgs: [
      "/Images/Cloths/cloths19.png",
      "/Images/Cloths/cloths20.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 4.5,
  },
  {
    mainImg: "/Images/Cloths/cloths21.png",
    altImgs: [
      "/Images/Cloths/cloths21.png",
      "/Images/Cloths/cloths22.png",
    ],
    title: "NIKE",
    subtitle: "Men's T-Shirt",
    price: "$100.50",
    rating: 5,
  },
];


const Cloths = () => {
  return (
    <>
    <Navbar/>
    <section id="cloths" className="container-fluid mt-1">
      <h1 className="hero-heading text-center sm-mt-5 ">CLOTHS</h1>
      <div className="row justify-content-center m-0 mt-lg-3">
        {productData.map((item, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          >
            <ClothCard {...item} />
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Cloths;
