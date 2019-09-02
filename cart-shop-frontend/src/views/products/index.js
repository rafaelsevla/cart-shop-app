import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardProduct, CartModal, Header } from 'components';
import { Col, Row } from 'reactstrap';
import {
  addProductToCart,
  decreaseProductFromCart,
  fetchProducts,
  removeProductToCart
} from './actions';
import './style.scss';

class Products extends Component {
  state = {
    modalOpen: false
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  componentDidMount() {
    !localStorage.getItem('fetchProducts') && this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    let totalValue = 0;

    products.cartItens.length &&
      products.cartItens.map(
        item => (totalValue = totalValue + item.price * item.amount)
      );

    return (
      <>
        <Header onClick={this.toggleModal} products={products} />
        <div className="product-list">
          <CartModal
            products={products}
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
            addProductToCart={this.props.addProductToCart}
            decreaseProductFromCart={this.props.decreaseProductFromCart}
            removeProductToCart={this.props.removeProductToCart}
            totalValue={totalValue}
          />
          <Row>
            {products.itens.map(product => (
              <Col md={6}>
                <CardProduct
                  product={product}
                  addProductToCart={this.props.addProductToCart}
                />
              </Col>
            ))}
          </Row>
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
  decreaseProductFromCart,
  fetchProducts,
  removeProductToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
