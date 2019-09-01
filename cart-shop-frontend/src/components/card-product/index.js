import React, { Component } from 'react';
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
  Row
} from 'reactstrap';
import { MaterialCommunityIcons } from 'react-web-vector-icons';

const CardProduct = ({ product, addProductToCart }) => (
  <Card key={product.id} className="mb-5">
    <CardHeader>
      <Row>
        <Col md={9}>
          <strong>
            {product.title}&nbsp;
            {product.description && `(${product.description})`}
          </strong>
          <br />
          <strong>{product.style && `(${product.style})`}</strong>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-center align-items-center"
        >
          {product.availableSizes.map(size => (
            <Badge className="mr-1" color="info" pill>
              {size}
            </Badge>
          ))}
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      <CardText>
        {product.isFreeShipping && (
          <>
            <MaterialCommunityIcons name="truck-fast" color="green" size={40} />
            &nbsp; Entrega grátis
          </>
        )}

        <p>
          {product.currencyFormat}&nbsp;
          {product.price}{' '}
          {product.installments > 0 && `em até ${product.installments}x`}
        </p>
      </CardText>
    </CardBody>
    <CardFooter>
      <Row>
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
