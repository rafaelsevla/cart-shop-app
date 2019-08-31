import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';

const Products = ({ answer }) => (
  <>
    <Header />
    <h1>{answer}</h1>
  </>
);

const mapStateToProps = state => ({
  answer: state.products.answer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
