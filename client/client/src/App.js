import React from 'react';
import AnimalList from './components/AnimalList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri:'http://localhost:3000/graphql'
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <h2>animal kingdom</h2>
          <AnimalList/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
