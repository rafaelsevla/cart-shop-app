import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import CartModal from 'components/modal-cart';
import CardProduct from 'components/card-product';

import {
  addProductToCart,
  fetchProducts,
  removeProductToCart
} from './actions';
import './style.scss';

class Products extends Component {
  state = {
    modalOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  componentDidMount() {
    !localStorage.getItem('fetchProducts') && this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <>
        <Header onClick={this.toggle} />
        <div className="product-list">
          <CartModal
            products={products}
            isOpen={this.state.modalOpen}
            toggle={this.toggle}
            addProductToCart={this.props.addProductToCart}
            removeProductToCart={this.props.removeProductToCart}
          />
          {products.itens.map(product => (
            <>
              <CardProduct
                product={product}
                addProductToCart={this.props.addProductToCart}
              />
            </>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  addProductToCart,
  fetchProducts,
  removeProductToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
