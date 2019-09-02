import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row
} from 'reactstrap';
import {
  AntDesign,
  EvilIcons,
  MaterialCommunityIcons
} from 'react-web-vector-icons';
import shirt from 'assets/img/palmeiras.jpg';
import './style.scss';

const CartModal = ({
  addProductToCart,
  decreaseProductFromCart,
  isOpen,
  products,
  removeProductToCart,
  toggle,
  totalValue
}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Carrinho</ModalHeader>
    <ModalBody>
      {products.cartItens.length ? (
        products.cartItens.map(product => (
          <>
            <Card key={product.id} className="mb-5">
              <CardHeader>
                <Row>
                  <Col md={10}>
                    <strong>
                      {product.title}
                      <br />
                      {product.description && `(${product.description})`}
                    </strong>
                  </Col>

                  <Col
                    md={2}
                    className="cursor-pointer"
                    onClick={() => removeProductToCart(product.id)}
                  >
                    <EvilIcons name="trash" size={30} color="#000" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <CardText>
                  <Row>
                    <Col md={6} className="justify-content-center-sm">
                      <img src={shirt} width="180px" />
                    </Col>
                    <Col md={6}>
                      {product.style && (
                        <>
                          <h4 className="mt-sm-5"> Cor</h4>

                          <p className="">{product.style}</p>
                          <hr />
                        </>
                      )}

                      {product.isFreeShipping && (
                        <div className="d-flex align-items-center free-shipping">
                          <MaterialCommunityIcons
                            name="truck-fast"
                            color="green"
                            size={40}
                          />
                          &nbsp; Entrega grátis
                        </div>
                      )}
                    </Col>
                  </Row>
                </CardText>
              </CardBody>
              <CardFooter className="pb-1">
                <Row>
                  <Col>
                    <Row className="align-items-center">
                      <h5 className="mr-2 ml-2 amount-info-text">
                        Quantidade:
                      </h5>
                      <Button
                        color="light"
                        className="mr-1 decision-amount-items"
                        disabled={product.amount === 1}
                        onClick={() => decreaseProductFromCart(product.id)}
                      >
                        <AntDesign
                          name="minuscircleo"
                          color="black"
                          size={20}
                        />
                      </Button>
                      <h5>
                        <span class="amount-container">{product.amount}</span>
                      </h5>
                      <Button
                        color="light"
                        className="ml-2 decision-amount-items"
                        onClick={() => addProductToCart(product.id)}
                      >
                        <AntDesign name="pluscircleo" color="black" size={20} />
                      </Button>
                      <Col className="d-flex">
                        <p className="ml-auto font-weight-bold text-success border-bottom">
                          {product.currencyFormat}&nbsp;
                          {(product.price * product.amount).toLocaleString(
                            'pt-BR'
                          )}
                          0
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </>
        ))
      ) : (
        <Card className="text-center border-0 cart-empty">
          <CardText>
            <AntDesign name="shoppingcart" color="#004756" size={100} />
            <CardTitle className="font-weight-bold">
              Seu carrinho está vazio :(
            </CardTitle>
          </CardText>
        </Card>
      )}
      <Row className="ml-0 mr-0">
        <p className="mr-auto ml-2 font-weight-bold text-success border-bottom">
          {totalValue !== 0 &&
            `R$ 
            ${totalValue.toLocaleString('pt-BR')}0`}
        </p>
        <Button
          className="action-button float-right"
          onClick={() => (window.location = 'https://netshoes.com.br')}
        >
          Concluir compra
        </Button>
      </Row>
    </ModalBody>
    <ModalFooter>
      <Button className="action-button" onClick={toggle}>
        Voltar para lista de produtos
      </Button>
    </ModalFooter>
  </Modal>
);

export default CartModal;
