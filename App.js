import React, {Component} from 'react';
import MyShopping from './src/my-shopping';
import { Provider } from 'react-redux';
import store from './store';

type Props={};
class App extends Component<Props> {
  render() {
    return (
      <Provider store= { store }>
        <MyShopping />
      </Provider>
    );
  }
}

export default App;
