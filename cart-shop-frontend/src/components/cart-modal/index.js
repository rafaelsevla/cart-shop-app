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
                      className="remove-item-container"
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
                            <h3>Cor</h3>
                            <p>{product.style}</p>
                          </>
                        )}
                        preco <p>{product.price}</p>
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
                        <img
                          src="https://www.verdebrancomania.com.br/imagens/produtos/08601878/Detalhes/camisa-i-palmeiras-2019-patrociniospatchbr.jpg"
                          width="180px"
                        />
                      </Col>
                    </Row>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col onClick={() => addProductToCart(product.id)}>
                      <h3>
                        Quantidade: {product.amount}
                        <AntDesign name="pluscircleo" color="black" size={40} />
                      </h3>
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
