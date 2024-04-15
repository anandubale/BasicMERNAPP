import axios from "axios";
import { useEffect, useState } from "react";
const ProductListBlock = () => {
  const productObj = {
    _id: "",
    uniq_id: "",
    crawl_timestamp: "",
    product_id: "",
    size: "",
    variant_sku: "",
    brand: "",
    care_instructions: "",
    dominant_material: "",
    title: "",
    actual_color: "",
    dominant_color: "",
    product_type: "",
    images: " ",
    body: "",
    product_details: "",
    size_fit: "",
    complete_the_look: "",
    type: "",
    variant_price: 0,
    variant_compare_at_price: 0,
    ideal_for: "",
    is_in_stock: "",
    inventory: 0,
    specifications: "",
  };

  const [Obj, setObject] = useState([{}]);

  const GetAllData = () => {
    let responce = axios
      .get("http://localhost:5000/api/v1/product/all")
      .then((res) => {
        console.log("res Data:- ", res.data);
        setObject(...res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAllData();
  }, [1]);

  return (
    <div style={{ border: "1px solid blue", height: "88vh" }}>
      THis COntains all List of Products
      <div>{Obj.map((e) => console.log(e))}</div>
    </div>
  );
};

export default ProductListBlock;
