import React from 'react';

import ProductItem from '../components/ProductItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <ul>
      {products
        ? products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        : null}
    </ul>
  );
};

export default ProductList;
