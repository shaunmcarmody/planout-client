import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTestVariant } from './store/actions/defaultActions';

class App extends Component {
  componentDidMount() {
    this.props.getTestVariant()
  }

  render() {
    return (
      <div>Hello world</div>
    )
  }

}

export default connect(null, { getTestVariant })(App);
