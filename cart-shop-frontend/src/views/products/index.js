import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import { Button } from 'reactstrap';
import { fetchProducts } from './actions';
import './style.scss';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <>
        <Header />
        <div className="product-list">
          {products.itens.map(product => (
            <article key={product.id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>
              <p>{product.availableSizes}</p>
              <p>{product.style}</p>
              <p>{product.price}</p>
              <p>{product.installments}</p>
              <p>{product.isFreeShipping && 'Frete grátis'}</p>
              <Button onClick={() => {}}>Colocar no carrinho </Button>
            </article>
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
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
