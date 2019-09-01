import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import CartModal from 'components/modal-cart';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Row
} from 'reactstrap';
import {
  addProductToCart,
  fetchProducts,
  removeProductToCart
} from './actions';
import './style.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

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
            isOpen={this.state.modal}
            toggle={this.toggle}
          />
          {products.itens.map(product => (
            <>
              <Card key={product.id} className="mb-5">
                <CardHeader>
                  <strong>{product.title}</strong>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    descricao {product.description}
                    &nbsp; &nbsp; tamanhos{' '}
                    {product.availableSizes.map(size => `${size} |`)}
                  </CardTitle>
                  <CardText>
                    estilo <p>{product.style}</p>
                    precos <p>{product.price}</p>
                    prestacoes <p>{product.installments}</p>
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
  fetchProducts,
  removeProductToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
