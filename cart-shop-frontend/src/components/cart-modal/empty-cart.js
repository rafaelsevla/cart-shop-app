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
