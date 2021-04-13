import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import LogIn from './LogIn';

const App = () => (
  <main className="h-screen">
    <Header />
    <Switch>
      <Route path="/" exact>
        <BooksList />
        <BooksForm />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
    </Switch>
  </main>
);

export default connect(null, null)(App);
