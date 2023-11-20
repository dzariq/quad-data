"use client"

import Image from "next/image";
import Link from "next/link";
import { addToCart, retrieveCart } from "../../utils/shopify";
import { Payment } from "../../utils/senangpay";
import Header from "../Header/Header";
import styles from "./ProductDetails.module.css";
import { useEffect, useState } from 'react';

export default function ProductDetails({ product }) {

  console.log(product)
  console.log('general product details')
  console.log(product)
  console.log('variants')
  console.log(product.variants.edges[0].node.selectedOptions)
  console.log('images')
  console.log(product.images)

  const [selectedOptions, setSelectedOptions] = useState({});
  const [payment, setPayment] = useState(null);

  const handleOptionChange = (optionName, optionValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: optionValue,
    }));
  };

  const findVariantByOptions = () => {
    return product.variants.edges.find((variant) => {
      return variant.node.selectedOptions.every(
        (option) => selectedOptions[option.name] === option.value
      );
    });
  };

  const handleAddToCart = async () => {
    const selectedVariant = findVariantByOptions();
    if (selectedVariant) {
      // Use the selected variant to perform actions, e.g., add the product to the cart.
      console.log('Selected Variant:', selectedVariant);
      let data = await Payment(selectedVariant);

      setPayment(data);

    }
  };

  useEffect(() => {
    const form = document.getElementById('order');
    if (payment) {
      if (payment.actionUrl != '')
        form.submit();
    }
  }, [payment]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            fill={true}
          />
        </div>


        <div>
          {product && (
            <>
              <h1>{product.title}</h1>
              <p>Price: {product.variants.edges[0].node.priceV2.amount} {product.variants.edges[0].node.priceV2.currencyCode}</p>
              {product.options.map((option) => (
                <div key={option.id}>
                  <p>{option.name}</p>
                  <select
                    value={selectedOptions[option.name] || ''}
                    onChange={(e) => handleOptionChange(option.name, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {option.values.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <button onClick={handleAddToCart}>Add to Cart</button>
            </>
          )}

          {payment &&
            <form id="order" method="post" action={payment.actionUrl}>
              <input type="hidden" name="detail" value={payment.detail} />
              <input type="hidden" name="amount" value={payment.amount} />
              <input type="hidden" name="order_id" value={payment.order_id} />
              <input type="hidden" name="name" value={payment.name} />
              <input type="hidden" name="email" value={payment.email} />
              <input type="hidden" name="phone" value={payment.phone} />
              <input type="hidden" name="hash" value={payment.hash} />
            </form>
          }
        </div>
      </div>
    </>
  );
}
