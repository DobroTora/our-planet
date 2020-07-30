import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import  ApolloClient  from 'apollo-client';
import WildlifeList from './components/WildlifeList';
import App from './components/App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import WildlifeCreate from './components/WildlifeCreate';
import './style/style.css';
import WildlifeDetail from './components/WildlifeDetail';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={WildlifeList}/>
              <Route path="Wildlife/new" component={WildlifeCreate}/>
              <Route path="Wildlife/:id" component={WildlifeDetail}/>
          </Route>
        </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
