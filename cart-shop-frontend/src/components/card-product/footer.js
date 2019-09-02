import React from 'react';
import { Button, CardFooter, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { MaterialCommunityIcons } from 'react-web-vector-icons';

const Footer = ({ product, addProductToCart }) => (
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
        onClick={() => [
          addProductToCart(product.id),
          toast.success('O produto foi adicionado ao carrinho!')
        ]}
      >
        Colocar no carrinho
      </Button>
    </Row>
  </CardFooter>
);

export default Footer;
