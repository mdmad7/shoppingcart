import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import api from '../api';

// import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import {
  addToCart,
  increase_quantity,
  decrease_quantity,
} from '../actions/shopcart';

const LoadableList = Loadable({
  loader: () => import('../components/ProductList'),
  loading: () => <h2>Loading...</h2>,
  delay: 300,
});

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: api,
    });
  }

  render() {
    const { products } = this.state;
    const {
      addToCart,
      inCart,
      total_cost,
      increase_quantity,
      decrease_quantity,
    } = this.props;
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr />
        <h3>Products</h3>
        <LoadableList products={products} addToCart={addToCart} />
        <hr />
        <h3>Your cart</h3>
        <Cart
          inCart={inCart}
          total_cost={total_cost}
          increase_quantity={increase_quantity}
          decrease_quantity={decrease_quantity}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inCart: state.shopcart.products,
    total_cost: state.shopcart.total_cost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    },
    increase_quantity: product => {
      dispatch(increase_quantity(product));
    },
    decrease_quantity: product => {
      dispatch(decrease_quantity(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
