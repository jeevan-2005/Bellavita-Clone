import { Link } from "react-router-dom";
import AddToCartBtn from "../addToCartButton/AddToCartBtn";
import "./item.css";
import { Tag, TagLabel } from "@chakra-ui/react";

const Item = (props) => {
  let { id, image, title, description, discountPrice, price, rating, tag } =
    props;

  discountPrice = Math.floor(price - (price * discountPrice) / 100);

  return (
    <div className="item">
      <Link to={`/products/${id}`} >
        <div className="imageTag">
          {tag ? (
            <Tag
              size="md"
              fontSize="11px"
              p="0 15px"
              variant="solid"
              colorScheme="yellow"
              fontWeight="400"
              borderRadius="sm"
              position="relative"
              top="35px"
              left="10px"
            >
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ) : null}
          <div className="imageProduct">
            <img src={image} alt={title} />
          </div>
        </div>
        <h3>
          <b>{title}</b>
        </h3>
        <p style={{ fontSize: "13px" }}>{description}</p>
        <p className="rating">⭐ {rating} | (253 Reviews)</p>
        <div className="prices">
          <div className="newPrice">₹{discountPrice}</div>
          <div className="oldPrice">₹{price}</div>
        </div>
      </Link>
      <AddToCartBtn text={"ADD TO CART"} id={id} />
    </div>
  );
};

export default Item;
