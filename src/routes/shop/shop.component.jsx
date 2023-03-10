// import { Fragment, useContext } from "react";
import "./shop.styles.scss";

// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
// import ProductCard from "../../components/product-card/product-card.component";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-previews.component";
import Category from "../category/category.component";

const Shop = () => {
  /*******one of the ways of creating category preview
    /*
    {
      const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );



        /****** below is the code used if there is no category preview 
         <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment> 
        }
      })}
    </div>
  );}
  */ return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
