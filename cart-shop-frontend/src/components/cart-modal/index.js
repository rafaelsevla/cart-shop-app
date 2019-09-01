import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
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
  products,
  isOpen,
  toggle,
  addProductToCart,
  removeProductToCart
}) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Carrinho</ModalHeader>
    <ModalBody>
      {products.cartItens.length
        ? products.cartItens.map(product => (
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
                  <CardTitle></CardTitle>
                  <CardText>
                    <Row>
                      <Col md={6}>
                        {product.style && (
                          <>
                            <h4>Cor</h4>
                            <p>{product.style}</p>
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
                      <Col md={6}>
                        <img src={shirt} width="180px" />
                      </Col>
                    </Row>
                  </CardText>
                </CardBody>
                <CardFooter className="pb-1">
                  <Row>
                    <Col>
                      <Row>
                        <h5 className="mr-1 amount-info-text">Quantidade:</h5>
                        <Badge color="light" className="cursor-pointer mr-1">
                          <AntDesign
                            name="minuscircleo"
                            color="black"
                            size={20}
                          />
                        </Badge>
                        <h5>
                          <span class="amount-container">{product.amount}</span>
                        </h5>
                        <Badge
                          color="light"
                          className="cursor-pointer ml-1"
                          onClick={() => addProductToCart(product.id)}
                        >
                          <AntDesign
                            name="pluscircleo"
                            color="black"
                            size={20}
                          />
                        </Badge>
                        <p className="ml-auto mr-5 font-weight-bold text-success border-bottom">
                          {product.currencyFormat}&nbsp;
                          {product.price.toLocaleString('pt-BR')}0
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </>
          ))
        : 'Seu carrinho está vazio'}
    </ModalBody>
    <ModalFooter>
      <Button className="button-put-cart" onClick={toggle}>
        Voltar para lista de produtos
      </Button>
    </ModalFooter>
  </Modal>
);

export default CartModal;
