import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesData } from "../../Redux/actionTypes";
import { Button, Spinner } from "@chakra-ui/react";
import Item from "../Item/Item";
import "./categories.css";
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.category);
  const { loading, categories, error } = state;
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategoriesData());
  }, [dispatch]);

  if (error) return <div>!! ERROR OCCURED !!</div>;

  return (
    <div className="SellersBest">
      <h1>
        BESTSELLERS <span>| NEW ARRIVALS</span>
      </h1>
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="categories">
            {categories.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.thumbnail}
                title={item.title}
                description={item.description}
                discountPrice={item.discountPercentage}
                price={item.price}
                rating={item.rating}
                tag="BESTSELLERS"
              />
            ))}
          </div>
          <div className="btn">
            <Button
              className="viewAll"
              colorScheme="white"
              variant="outline"
              borderRadius="none"
              onClick={()=> navigate('/products')}
            >
              VIEW ALL
            </Button>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Categories;
