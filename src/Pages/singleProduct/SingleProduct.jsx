import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProductData } from "../../Redux/actionTypes";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AddToCartBtn from "../../Components/addToCartButton/AddToCartBtn";
import "./singleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, singleData, errorSingleData } = useSelector(
    (state) => state.singleProduct
  );
  let {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = singleData;

  const newPrice = Math.floor(price - (price * discountPercentage) / 100);

  useEffect(() => {
    dispatch(fetchSingleProductData(`https://dummyjson.com/products/${id}`));
  }, [dispatch]);

  if (errorSingleData) return <div>error occurred</div>;

  return (
    <>
      {loading ? (
        <div className="ProductSpinner">
          <Spinner size="xl" />
        </div>
      ) : singleData != {} ? (
        <>
          <Box className="productSingleData">
            <Box className="Images">
              <Image className="mainImage" src={thumbnail} mb="30px" />
              <Stack direction="row" justify="space-between">
                {images.map((src, i) => (
                  <Image h="100px" w="100px" src={src} key={i} />
                ))}
              </Stack>
            </Box>
            <Box className="aboutProducts">
              <Text fontSize="29px" fontWeight="600">
                {title}
              </Text>
              <Text fontSize="13px" mb="10px">
                {description}
              </Text>
              <Text m="20px 0" fontWeight="500">
                ⭐ {rating} | (253 Reviews)
              </Text>
              <Box>
                <Stack direction="row" align="baseline" spacing="10px">
                  <Text color="red" fontSize="17px" fontWeight="600">
                    -{discountPercentage}%
                  </Text>
                  <Text fontSize="21px" fontWeight="600">
                    ₹{newPrice}
                  </Text>
                </Stack>
                <Text fontSize="12px" letterSpacing="2px">
                  M.R.P:{" "}
                  <span style={{ textDecoration: "line-through" }}>
                    ₹{price}
                  </span>
                </Text>
                <Text m="0 0 20px 0" fontSize="12px">
                  Inclusive of all taxes
                </Text>
              </Box>
              <AddToCartBtn text={"ADD TO CART"} id={id} />
              <Box className="specifics">
                <Box>
                  <Image src="https://bellavitaorganic.com/cdn/shop/files/Long_Lasting_1_70a277fc-8142-4cfb-b036-fc4084c6cee5.svg?crop=center&height=40&v=1694673851&width=40" />
                  <Text>LONG LASTING</Text>
                </Box>
                <Box>
                  <Image src="https://bellavitaorganic.com/cdn/shop/files/ifra_1.svg?crop=center&height=40&v=1694674058&width=40" />
                  <Text>IFRA - CERTIFIED</Text>
                </Box>
                <Box>
                  <Image src="https://bellavitaorganic.com/cdn/shop/files/Imported_Oils_1.svg?crop=center&height=40&v=1694674059&width=40" />
                  <Text>IMPORTED OILS</Text>
                </Box>
                <Box>
                  <Image src="https://bellavitaorganic.com/cdn/shop/files/made_in_india.svg?crop=center&height=40&v=1694092823&width=40" />
                  <Text>MAKE IN INDIA</Text>
                </Box>
              </Box>
              <Text fontSize="13px" mt="20px">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolorum quaerat culpa nulla nisi molestiae adipisci dignissimos,
                sint iste neque earum odit, quis deleniti repellendus. Voluptate
                ab recusandae consequuntur maxime. Earum, consectetur delectus!
                Alias architecto perspiciatis sapiente dignissimos officia nam.
              </Text>
            </Box>
          </Box>
          <Box w="70%" margin="auto" mb='50px'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "black",
                      color: "white",
                      transition: "bg 0.3s ease",
                    }}
                  >
                    <Box as="span" flex="1" textAlign="left" height='30px' display='flex' alignItems='center' fontWeight='500' letterSpacing='1px'  >
                      KEY BENIFITS
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <ul className="pannel">
                    <li>Long-lasting perfume</li>
                    <li>
                      Made with imported oils from France, Spain, and Italy
                    </li>
                    <li>IFRA-certified non-irritant formula</li>
                    <li>For All</li>
                    <li>
                      {" "}
                      Perfect to wear during the day and special occasions
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                    <Box as="span" flex="1" textAlign="left"  height='30px' display='flex' alignItems='center' fontWeight='500' letterSpacing='1px'  >
                      HOW TO USE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel fontSize='14px' pl='60px'>
                  Spray the perfumes on your pulse points (sides of the neck and
                  both wrists) for all-day freshness.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                    <Box as="span" flex="1" textAlign="left" height='30px' display='flex' alignItems='center' fontWeight='500' letterSpacing='1px' >
                      IS THIS YOUR FIRST BELLAVITA PURCHASE?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <ul className="pannel">
                    <li>
                      We’ve all had the experience of seeing ads that promise
                      the world, bought it, and realised it wasn’t quite as
                      advertised. That's no good. We at BELLAVITA take a
                      different approach before launching any perfume:{" "}
                    </li>
                    <li>
                      <b>In-Depth Consumer Research:</b> Each of our perfumes is
                      backed by hundreds of days of comprehensive consumer
                      research, tailoring scents to meet the genuine needs and
                      preferences of the Indian consumer while keeping in mind
                      the Indian climate.
                    </li>
                    <li>
                      <b>Superior Ingredients:</b> We source our premium
                      ingredients from France, Spain, and Italy, known
                      world-over for their quality and uniqueness in fragrance.
                    </li>
                    <li>
                      <b>Proven Longevity:</b> Our perfumes are designed to
                      last, offering 8 to 10 hours of enduring scent, ensuring
                      you stay fresh throughout the day.
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "black", color: "white" }}>
                    <Box as="span" flex="1" textAlign="left" height='30px' display='flex' alignItems='center' fontWeight='500' letterSpacing='1px' >
                      LEGAL INFORMATION
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <ul className="pannel">
                    <li> MRP ₹1,099.00 inclusive of all taxes </li>
                    <li>
                      <b>Marketed By: </b>Bella Vita Organic 417, First Floor,
                      Udyog Vihar Phase 3, Sector 20, Gurugram, 122008 Haryana,
                      India
                    </li>
                    <li>
                      <b>Marketed By:</b> Bella Vita Organic 417, First Floor,
                      Udyog Vihar Phase 3, Sector 20, Gurugram, 122008 Haryana,
                      India
                    </li>
                    <li>
                      <b>Country of Origin: India</b>
                    </li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default SingleProduct;
