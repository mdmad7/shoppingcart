import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <li>
      {product.name} - {product.price}
      <button type="submit" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </li>
  );
};

export default ProductItem;
