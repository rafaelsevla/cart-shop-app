import React, { Component } from 'react';
import { Col, Row, Label } from 'reactstrap';
import { AntDesign } from 'react-web-vector-icons';
import Select from 'react-select';

import './style.scss';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Header extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
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
          <div>
            <AntDesign name="shoppingcart" color="#000" size={40} />
            <span class="badge badge-pill badge-danger badge-custom">10</span>
          </div>
        </Row>
      </Col>
    );
  }
}

export default Header;
