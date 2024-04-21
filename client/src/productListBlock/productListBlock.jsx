import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../productBlock/product";
const ProductListBlock = () => {
  const productObj = [
    {
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
    },
  ];

  const [Obj, setObject] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const GetAllData = () => {
      let responce = axios
        .get("http://localhost:5000/api/v1/product/all")
        .then((res) => {
          console.log("res Data:- ", res.data);
          setObject(res.data.data);
          console.log("Obj ", Obj);
          setRefresh(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    GetAllData();
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div style={{ border: "1px solid blue", height: "88vh" }}>
      THis COntains all List of Products
      <div>{refresh && <p>Refreshing...</p>}</div>
      {Obj.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Obj.map((e, index) => (
            <Product
              key={index}
              img={e.images}
              title={e.title}
              description={e.product_details}
              price={e.variant_price}
            />
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProductListBlock;
