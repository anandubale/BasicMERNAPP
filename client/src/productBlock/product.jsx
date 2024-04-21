const Product = (props) => {
  const { img, title, description, price } = props;

  return (
    <div
      style={{
        border: "1px solid red",
        maxWidth: "fit-Content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <img src={img} alt={title} style={{ width: "210px", height: "228px" }} />
      <div style={{ width: "190px", height: "80px", fontSize: "10px" }}>
        <p>{title}</p>
        <p>{description.slice(0, 20)}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;
