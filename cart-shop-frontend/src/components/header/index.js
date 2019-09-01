import React, { Component } from 'react';
import { Col, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { AntDesign } from 'react-web-vector-icons';
import { connect } from 'react-redux';

import './style.scss';

class Header extends Component {
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { products } = this.props;

    return (
      <div>
        <Navbar
          color="light"
          className="navbar-container pt-0 pb-0 justify-content-center"
          light
          expand="md"
        >
          <Col md={12} className="nav-items-container">
            <NavbarBrand>Netshoes</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={this.props.onClick}
                  className="cart-icon-container"
                >
                  <AntDesign name="shoppingcart" color="#ECF3FD" size={40} />
                  <span class="badge badge-pill badge-danger badge-custom">
                    {products.cartItens.length}
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Header);
