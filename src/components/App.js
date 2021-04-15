import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => (
  <main className="h-screen">
    <Header />
    <Switch>
      <Route path="/books">
        <BooksList />
        <BooksForm />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </main>
);

export default connect(null, null)(App);
