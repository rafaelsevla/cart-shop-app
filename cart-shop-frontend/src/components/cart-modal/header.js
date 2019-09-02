import React from 'react';
import { CardHeader, Col, Row } from 'reactstrap';
import { EvilIcons } from 'react-web-vector-icons';

const Header = ({ product, removeProductToCart }) => (
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
        className="cursor-pointer"
        onClick={() => removeProductToCart(product.id)}
      >
        <EvilIcons name="trash" size={30} color="#000" />
      </Col>
    </Row>
  </CardHeader>
);
export default Header;
