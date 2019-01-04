import React, { Component } from 'react';

import Button from '../../components/Button';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (event) => {
    window.alert('Olá!');
    console.log(event);
  };

  render() {
    return (
      <React.Fragment>
        <h1>HOME</h1>
        <Button primary onClick={this.handleOnClick}>
          TESTE!
        </Button>
      </React.Fragment>
    );
  }
}

export default HomePage;
