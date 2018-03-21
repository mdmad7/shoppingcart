import React from 'react';

const Cart = ({ total_cost, inCart, increase_quantity, decrease_quantity }) => {
  return (
    <div>
      <ul>
        {inCart
          ? inCart.map(product => {
              if (product.quantity !== 0) {
                return (
                  <li key={product.id}>
                    <button
                      disabled={product.quantity <= 0 ? true : false}
                      type="submit"
                      onClick={() => decrease_quantity(product)}>
                      {' '}
                      -{' '}
                    </button>
                    {product.name} x {product.quantity} = {product.product_cost}
                    <button
                      type="submit"
                      onClick={() => increase_quantity(product)}>
                      {' '}
                      +{' '}
                    </button>
                  </li>
                );
              } else {
                return null;
              }
            })
          : null}
      </ul>
      <div>
        {inCart.length !== 0 ? (
          <h4>Total Cost: $ {total_cost}</h4>
        ) : (
          <h4>Total Cost: $ 0.00</h4>
        )}
      </div>
    </div>
  );
};

export default Cart;
