import { Link } from "react-router-dom";
import "./home.css";
import InfiniteSlider from "../../elements/InfiniteSlider/InfiniteSlider";
import CrazyDeals from "../../Components/creazyDeals/CrazyDeals";
import WhyBellavita from "../../Components/whyBellavita/WhyBellavita";
import OffersAndImages from "../../Components/offersImages/OffersAndImages";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
  const items = [
    {
      id: 1,
      item: (
        <div className="img1">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/Elle_480x_db18e8ef-2f25-4299-9c39-73af4c300969.jpg?height=80&v=1668756887"
            alt="1"
          />
        </div>
      ),
    },
    {
      id: 2,
      item: (
        <div className="img2">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/HT_4a741228-3740-4f84-97bc-3c093ceec75a.jpg?height=80&v=1694413890"
            alt="2"
          />
        </div>
      ),
    },
    {
      id: 3,
      item: (
        <div className="img3">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/BW_460x460_dcd6c999-6863-4ea2-ae4a-5621f5a51507.png?height=80&v=1650368309"
            alt="3"
          />
        </div>
      ),
    },
    {
      id: 4,
      item: (
        <div className="img4">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/Pinkvilla_480x_a664ac7e-bd4f-45ae-b43a-b5ce25e0b530.jpg?height=80&v=1668756957"
            alt="4"
          />
        </div>
      ),
    },
    {
      id: 5,
      item: (
        <div className="img5">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/IDiva_480x_1617c636-c0ed-4ed2-bb06-36e1906728ff.jpg?height=80&v=1668756968"
            alt="5"
          />
        </div>
      ),
    },
    {
      id: 6,
      item: (
        <div className="img6">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/Ani_480x_14446b4e-c91a-46df-a133-a95092fe484e.jpg?height=80&v=1668756922"
            alt="6"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div>
        <div className="imageContainer">
          <img
            src="https://bellavitaorganic.com/cdn/shop/files/1920-720_1_abfe6545-cca3-42bc-8892-5fe424d5e1c0.webp?v=1713251546&width=1920"
            alt="image1"
          />
        </div>

        <Categories />

        <div className="buyAny3" style={{ margin: "50px 0px ", width: "100%" }}>
          <Link to="">
            <img
              src="https://bellavitaorganic.com/cdn/shop/files/Offer-Banner-2.jpg?v=1695733175&width=1920"
              alt="buyAny3"
            />
          </Link>
        </div>

        <CrazyDeals />

        <WhyBellavita />

        <OffersAndImages />

        <InfiniteSlider items={items} name="logoSlider" />
      </div>
    </>
  );
};

export default Home;
