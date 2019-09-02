import React from 'react';
import { Card } from 'reactstrap';
import Header from './header';
import Body from './body';
import Footer from './footer';
import './style.scss';

const CardProduct = ({ product, ...props }) => (
  <Card key={product.id} className="mb-4 card-container">
    <Header product={product} />
    <Body product={product} />
    <Footer product={product} {...props} />
  </Card>
);

export default CardProduct;
