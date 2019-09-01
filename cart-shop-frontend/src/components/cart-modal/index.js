import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row
} from 'reactstrap';

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
                  <strong>
                    {product.title} ({product.description})
                  </strong>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    {product.availableSizes.map(size => `${size} |`)}
                  </CardTitle>
                  <CardText>
                    tamanho<p>{product.style}</p>
                    preco <p>{product.price}</p>
                    parcelas <p>{product.installments}</p>
                    total <p>{product.amount}</p>
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
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Button
                      className="button-put-cart mr-5"
                      onClick={() => removeProductToCart(product.id)}
                    >
                      remover do carrinho
                    </Button>
                    <Button
                      className="button-put-cart"
                      onClick={() => addProductToCart(product.id)}
                    >
                      adicionar mais 1
                    </Button>
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
