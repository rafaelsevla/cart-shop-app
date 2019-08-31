import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import {
  Badge,
  Button,
  Row,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { addProductToCart, fetchProducts } from './actions';
import './style.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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

  modal = () => {
    const { products } = this.props;

    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>Carrinho</ModalHeader>
        <ModalBody>
          {products.cartItens.length
            ? products.cartItens.map(product => (
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
                        tamanho<p>{product.style}</p>
                        preco <p>{product.price}</p>
                        parcelas <p>{product.installments}</p>
                        total <p>{product.amount}</p>
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
                          onClick={() =>
                            this.props.addProductToCart(product.id)
                          }
                        >
                          Colocar no carrinho
                        </Button>
                      </Row>
                    </CardFooter>
                  </Card>
                </>
              ))
            : 'Seu carrinho está vazio'}
        </ModalBody>
        <ModalFooter>
          <Button className="button-put-cart" onClick={this.toggle}>
            Voltar para lista de produtos
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  render() {
    const { products } = this.props;

    return (
      <>
        <Header onClick={this.toggle} />
        <div className="product-list">
          {this.modal()}
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
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
