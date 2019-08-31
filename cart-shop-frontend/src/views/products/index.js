import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import {
  Badge,
  Button,
  Row,
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import { addProductToCart, fetchProducts } from './actions';
import './style.scss';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    console.log(this.props);
    return (
      <>
        <Header />
        <div className="product-list">
          {products.itens.map(product => (
            <>
              <Card key={product.id} className="mb-5">
                <CardHeader>
                  <strong>{product.title}</strong>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    {product.description}
                    &nbsp; &nbsp;
                    {product.availableSizes.map(size => `${size} |`)}
                  </CardTitle>
                  <CardText>
                    <p>{product.style}</p>
                    <p>{product.price}</p>
                    <p>{product.installments}</p>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Row>
                    {product.isFreeShipping && (
                      <Badge
                        style={{
                          alignItems: 'center',
                          display: 'flex',
                          height: 30
                        }}
                        color="success"
                        pill
                      >
                        Frete grátis
                      </Badge>
                    )}

                    <Button
                      className="button-put-cart"
                      onClick={() => this.props.addProductToCart(product.id)}
                    >
                      Colocar no carrinho
                    </Button>
                  </Row>
                </CardFooter>
              </Card>
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
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
