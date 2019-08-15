import React, { Component } from 'react';

import CvItem from './components/CvItem';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvItems: data.cvItems
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="navbar-fixed">
            <nav className="nav-wraper indigo">
              <div className="container">
                <a href="#" className="brand-logo"><strong>Fullstack Team</strong></a>
                <a href="#" className="sidenav-trigger" data-target="mobile-menu">
                  <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="#hung-hoang">Hung Hoang</a></li>
                  <li><a href="#hop-chu">Hop Chu</a></li>
                  <li><a href="#duong-pham">Duong Pham</a></li>
                  <li><a href="#trong-nguyen">Trong Nguyen</a></li>
                  <li><a href="#minh-duong">Minh Duong</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li><a href="#hung-hoang" className="sidenav-close">Hung Hoang</a></li>
            <li><a href="#hop-chu" className="sidenav-close">Hop Chu</a></li>
            <li><a href="#duong-pham" className="sidenav-close">Duong Pham</a></li>
            <li><a href="#trong-nguyen" className="sidenav-close">Trong Nguyen</a></li>
            <li><a href="#minh-duong" className="sidenav-close">Minh Duong</a></li>
          </ul>
        </header>

        <CvItem cvItems={this.state.cvItems} />
        
      </div>
    );
  }
}

export default App;
