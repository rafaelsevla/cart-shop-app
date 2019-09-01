import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Row
} from 'reactstrap';
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons
} from 'react-web-vector-icons';
import './style.scss';

const CardProduct = ({ product, addProductToCart }) => (
  <Card key={product.id} className="mb-4" style={{ minHeight: 295 }}>
    <CardHeader>
      <Row>
        <Col md={12}>
          <strong>
            {product.title}&nbsp;
            {product.description && `(${product.description})`}
          </strong>
          <br />
          <strong>{product.style && `(${product.style})`}</strong>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <CardText className="mt-0">
        <Row className="">
          <Col md={6}>
            <p className="font-weight-bold">
              {product.currencyFormat}&nbsp;
              {product.price}&nbsp;
              {product.installments > 0 && `em até ${product.installments}x`}
            </p>
            <div className="payment-type">
              <AntDesign name="creditcard" color="black" size={30} />
              <FontAwesome name="money" color="green" size={30} />
              <Entypo name="paypal" color="#242748" size={30} />
            </div>
          </Col>
          <Col md={6}>
            <Row className="ml-0 ">
              <p className="font-weight-bold size-item">Tamanho:</p>
            </Row>
            {product.availableSizes.map(size => (
              <Badge className="mr-1 badge-size" color="light">
                {size}
              </Badge>
            ))}
          </Col>
        </Row>
      </CardText>
    </CardBody>
    <CardFooter>
      <Row className="justify-content-around align-items-center">
        {product.isFreeShipping && (
          <div className="d-flex align-items-center">
            <MaterialCommunityIcons name="truck-fast" color="green" size={40} />
            &nbsp; Entrega grátis
          </div>
        )}
        <Button
          className="button-put-cart"
          onClick={() => addProductToCart(product.id)}
        >
          Colocar no carrinho
        </Button>
      </Row>
    </CardFooter>
  </Card>
);

export default CardProduct;
