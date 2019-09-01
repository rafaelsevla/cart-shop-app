import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardProduct, CartModal, Header } from 'components';
import { Col, Row } from 'reactstrap';
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
    this.setState({
      modalOpen: !this.state.modalOpen
    });
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
  fetchProducts,
  removeProductToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
