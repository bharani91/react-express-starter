import React from "react";
import styles from "./style.css";
import { Link } from "react-router";
import { ButtonToolbar, Button } from 'react-bootstrap';


export default React.createClass({
  render() {
    return (
      <div className={styles.content}>
        <h1 className="page-title">About Page</h1>
        <Link to="/" className="btn">Home Page &rarr;</Link>
      </div>
    );
  }
})
