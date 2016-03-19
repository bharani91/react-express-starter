import React from 'react';

export default React.createClass({
  render () {
    return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }
});
