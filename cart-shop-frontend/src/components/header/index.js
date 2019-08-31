import React, { Component } from 'react';
import { Col, Row, Label } from 'reactstrap';
import { AntDesign } from 'react-web-vector-icons';
import { connect } from 'react-redux';
import Select from 'react-select';

import './style.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Header extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { products } = this.props;

    return (
      <Col md={12} className="header-container">
        <Row className="header-itens">
          <Label>Netshoes</Label>

          <Select
            className="select ml-5 mr-5"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder="Search"
          />
          <div onClick={this.props.onClick}>
            <AntDesign name="shoppingcart" color="#ECF3FD" size={40} />
            <span class="badge badge-pill badge-danger badge-custom">
              {products.cartItens.length}
            </span>
          </div>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Header);
