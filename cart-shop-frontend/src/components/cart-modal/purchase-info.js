import React from 'react';
import { Button, CardFooter, Col, Row } from 'reactstrap';
import { AntDesign } from 'react-web-vector-icons';

const PurcharseInfo = ({
  product,
  addProductToCart,
  decreaseProductFromCart
}) => (
  <CardFooter className="pb-1">
    <Row>
      <Col>
        <Row className="align-items-center">
          <h5 className="mr-2 ml-2 amount-info-text">Quantidade:</h5>
          <Button
            color="light"
            className="mr-1 decision-amount-items"
            disabled={product.amount === 1}
            onClick={() => decreaseProductFromCart(product.id)}
          >
            <AntDesign name="minuscircleo" color="black" size={20} />
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
              {(product.price * product.amount)
                .toFixed(2)
                .toLocaleString('pt-BR')}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </CardFooter>
);

export default PurcharseInfo;
