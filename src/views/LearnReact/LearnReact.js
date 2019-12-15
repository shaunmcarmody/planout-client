import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLink } from '../../store/actions/defaultActions';
import logo from '../../assets/logo.svg';
import './LearnReact.css';

class LearnReact extends Component {
  componentDidMount() {
    this.props.getLink()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.link}
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  link: state.defaultReducer.link
})

export default connect(mapStateToProps, { getLink })(LearnReact);