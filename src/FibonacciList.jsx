import React, { Component } from 'react'

export default class FibonacciList extends Component {
  render() {
    const values = this.props.sequences.map((number, index) =>
        <div key={index + '_' + number}>{number}</div>
    );
    return (
        <div>
            { values }
        </div>
    );
  }
}
