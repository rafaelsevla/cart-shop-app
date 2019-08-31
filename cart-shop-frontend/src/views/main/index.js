import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';

const Main = ({ answer }) => (
  <>
    <Header />
    <h1>{answer}</h1>
  </>
);

const mapStateToProps = state => ({
  answer: state.main.answer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
