import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import Logg from './LogIn';

const App = () => (
  <>
    <Header />
    <div className="bg-gray-100 font-serif">
      <Switch>
        <Route path="/" exact>
          <BooksList />
          <BooksForm />
        </Route>
        <Route path="/login">
          <Logg />
        </Route>
      </Switch>
    </div>
  </>
);

export default connect(null, null)(App);
