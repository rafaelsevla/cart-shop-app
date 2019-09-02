import React from 'react';
import { CardHeader, Col, Row } from 'reactstrap';

const Header = ({ product }) => (
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
);

export default Header;
