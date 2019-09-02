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
import shirt from 'assets/img/palmeiras.jpg';
import './style.scss';

const CardProduct = ({ product, addProductToCart }) => (
  <Card key={product.id} className="mb-4" style={{ minHeight: 400 }}>
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
        <Row>
          <Col md={6} className="justify-content-center-sm">
            <img src={shirt} width="140px" />
          </Col>
          <Col md={6}>
            <Row className="ml-0 justify-content-center-sm">
              <p className="font-weight-bold justify-content-center-sm">
                Tamanho:
              </p>
            </Row>
            <div className="justify-content-center-sm">
              {product.availableSizes.map(size => (
                <Badge className="mr-1 badge-size" color="light">
                  {size}
                </Badge>
              ))}
            </div>
            <p className="font-weight-bold mt-3 justify-content-center-sm">
              {product.currencyFormat}&nbsp;
              {product.price.toLocaleString('pt-BR')}0&nbsp;
              {product.installments > 0 && `em até ${product.installments}x`}
            </p>
            <div>
              <div className="payment-type">
                <AntDesign name="creditcard" color="black" size={30} />
                <FontAwesome name="money" color="green" size={30} />
                <Entypo name="paypal" color="#242748" size={30} />
              </div>
            </div>
          </Col>
        </Row>
      </CardText>
    </CardBody>
    <CardFooter>
      <Row className="justify-content-around align-items-center free-shipping">
        {product.isFreeShipping && (
          <div className="d-flex align-items-center">
            <MaterialCommunityIcons name="truck-fast" color="green" size={40} />
            &nbsp; Entrega grátis
          </div>
        )}
        <Button
          className="button-put-cart"
          color="#8936bc"
          onClick={() => addProductToCart(product.id)}
        >
          Colocar no carrinho
        </Button>
      </Row>
    </CardFooter>
  </Card>
);

export default CardProduct;
