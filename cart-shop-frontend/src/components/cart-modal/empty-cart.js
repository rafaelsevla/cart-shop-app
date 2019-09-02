import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { AntDesign } from 'react-web-vector-icons';

const EmptyCart = () => (
  <Card className="text-center border-0 cart-empty">
    <CardText>
      <AntDesign name="shoppingcart" color="#004756" size={100} />
      <CardTitle className="font-weight-bold">
        Seu carrinho está vazio :(
      </CardTitle>
    </CardText>
  </Card>
);

export default EmptyCart;
