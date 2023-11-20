import React from "react";
import Header from "../../../components/Header/Header";
import Layout from "../../../components/Header/Header";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";
import { getProduct } from "../../../utils/shopify";


export default async function Product({ params }) {
    const product = await getProduct(decodeURIComponent(params.id));
  return (
    <>
      <Header />
      <ProductDetails product={product} />;
    </>
  );
}
