import React, { Component } from 'react'
import './App.css';
import SiteBar from './home/SiteBar'
import Auth from './auth/Auth'
import Main from './screens/Main'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App

