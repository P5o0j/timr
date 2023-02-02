import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <img
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        //alt={title}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
