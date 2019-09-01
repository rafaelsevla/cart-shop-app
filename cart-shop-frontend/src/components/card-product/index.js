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
  Row
} from 'reactstrap';

const CardProduct = ({ product, addProductToCart }) => (
  <Card key={product.id} className="mb-5">
    <CardHeader>
      <strong>{product.title}</strong>
    </CardHeader>
    <CardBody>
      <CardTitle>
        descricao {product.description}
        &nbsp; &nbsp; tamanhos {product.availableSizes.map(size => `${size} |`)}
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
          onClick={() => addProductToCart(product.id)}
        >
          Colocar no carrinho
        </Button>
      </Row>
    </CardFooter>
  </Card>
);

export default CardProduct;
