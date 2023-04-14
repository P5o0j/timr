// import { Fragment, useContext } from "react";
// import ProductCard from "../../components/product-card/product-card.component";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-previews.component";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";

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
  */

  const dispatch = useDispatch();

  // retrieve products from Firestorm db
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
