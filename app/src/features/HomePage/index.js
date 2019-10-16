import React from 'react';
import './HomePage.scss';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="homePage">
        <div className="pageOptions">
          <a href="/order">Order Form</a>
          <a href="/cart">Cart</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
