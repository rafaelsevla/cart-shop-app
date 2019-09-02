import React from 'react';
import { CardBody, CardText, Col, Row } from 'reactstrap';
import { MaterialCommunityIcons } from 'react-web-vector-icons';
import shirt from 'assets/img/palmeiras.jpg';

const ProductInfo = ({ product }) => (
  <CardBody>
    <CardText>
      <Row>
        <Col md={6} className="justify-content-center-sm">
          <img src={shirt} width="180px" />
        </Col>
        <Col md={6}>
          {product.style && (
            <>
              <h4 className="mt-sm-5"> Cor</h4>

              <p className="">{product.style}</p>
              <hr />
            </>
          )}

          {product.isFreeShipping && (
            <div className="d-flex align-items-center free-shipping">
              <MaterialCommunityIcons
                name="truck-fast"
                color="green"
                size={40}
              />
              &nbsp; Entrega grátis
            </div>
          )}
        </Col>
      </Row>
    </CardText>
  </CardBody>
);

export default ProductInfo;
