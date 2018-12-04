import React from 'react';
import Button from "./Button";

const Table = ({ list, onDismiss }) =>
  <div className='table'>
    { list.map(item =>
      <div key={item.id} className='table-row'>
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        {/* <span style={largeColumn}>
          <img src={item.url}  height="142" width="142"></img>
        </span> */}
        <span style={mediumColumn}>
          {item.author}
        </span>
        <span style={smallColumn}>
          {item.score}
        </span>
        <span style={smallColumn}>
          {item.url}
        </span>
        <span style={smallColumn}>
        <Button
          onClick={() => onDismiss(item.id)}
          className='button-inline'
        >
          Dismiss
        </Button>
        </span>
      </div>
    )}
  </div>

const largeColumn = {
  width: '40%'
}
const mediumColumn = {
  width: '30%'
}
const smallColumn = {
  width: '10%'
}
export default Table;