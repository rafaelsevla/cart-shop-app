import React from 'react';
import { Badge, CardBody, CardText, Col, Row } from 'reactstrap';
import { AntDesign, Entypo, FontAwesome } from 'react-web-vector-icons';
import shirt from 'assets/img/palmeiras.jpg';

const Body = ({ product }) => (
  <CardBody>
    <CardText className="mt-0">
      <Row>
        <Col md={6} className="justify-content-center-sm">
          <img src={shirt} width="140px" alt="shop product" />
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
);

export default Body;
