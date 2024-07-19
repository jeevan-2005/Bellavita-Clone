import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProductsData } from "../../Redux/actionTypes";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Spinner,
} from "@chakra-ui/react";
import Item from "../../Components/Item/Item";
import "./products.css";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const getPageFromSearchParam = (pageNumber) => {
    pageNumber = +pageNumber;
    if (Number.isNaN(pageNumber)) return 1;
    if (!pageNumber) return 1;
    if (pageNumber < 1) return 1;

    return pageNumber;
  };

  const dispatch = useDispatch();
  const state1 = useSelector((state) => state.product);
  const state2 = useSelector((state) => state.categoryType);
  const { loading, data, errorData } = state1;
  const { categoryTypes, errorType } = state2;
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    getPageFromSearchParam(searchParams.get("page"))
  );
  const [filter, setFilter] = useState("");

  console.log(categoryTypes[0]);


  useEffect(() => {
    let query = {};
    filter && (query.category = filter)
    !filter && page && (query.page = page);

    setSearchParams(query);

    let currentUrl = window.location.href;
    console.log(currentUrl);
    let searchQuery =
      currentUrl.indexOf("?") != -1
        ? currentUrl.slice(currentUrl.indexOf("?"))
        : "";

    if(filter) {
      dispatch(
        fetchProductsData(
          `https://dummyjson.com/products/category/${filter}`
        )
      );
    }    
    else{
      dispatch(
        fetchProductsData(
          `https://dummyjson.com/products${searchQuery}&limit=12&skip=${page * 10}`
        )
        
    );
  }
    dispatch(fetchCategories("https://dummyjson.com/products/categories"));
  }, [dispatch, page, filter]);

  const handleCategoryChange = (e) => {
    setFilter(e.target.value);
  };

  if (errorData) return <div>!! ERROR OCCURED !!</div>;

  return (
    <div className="mainProDiv">
      <h1>ALL PRODUCTS</h1>

      <Box
        display="flex"
        w="80%"
        m="auto"
        justifyContent="center"
        mt="20px"
        mb="20px"
        gap="60px"
      >
        <FormControl w="30%">
          <FormLabel textAlign="center">Select Category</FormLabel>
          <Select placeholder="select category" onChange={handleCategoryChange}>
            {categoryTypes.map((category, i) => (
              <option key={i} value={category.slug}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <div className="ProductSpinner">
          <Spinner size="xl" />
        </div>
      ) : (
        <>
          <div className="products">
            {data.map((item) => (
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
          {!filter && (
            <div className="pageBtns">
            <Button
              colorScheme="red"
              className="prev"
              onClick={() => setPage(page - 1)}
              isDisabled={page === 1}
            >
              prev
            </Button>
            <Button
              className="next"
              colorScheme="red"
              onClick={() => setPage(page + 1)}
              isDisabled={page === 9}
            >
              next
            </Button>
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
