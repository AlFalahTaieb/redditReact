import React  from 'react';

// import Show from "./Show";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { object } from 'prop-types';

const divStyle = {
  marginBottom: '75px'
}

  const Table1 =({list, onDismiss})=>
  <Table className='table'>
    <TableHead>
      <TableRow>
        <TableCell>Direct Link</TableCell>
        <TableCell >Image</TableCell>
        <TableCell >User</TableCell>
        <TableCell>Score</TableCell>
        <TableCell>Links</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {list.map(item =>
        <TableRow key={item.id} className='table-row'>
          <TableCell style={largeColumn}>
            <a href={item.permalink}>{item.title}</a>
          </TableCell>
          <span style={largeColumn}>
            <img src={item.url} height="142" width="142"></img>
          </span>
          <TableCell style={mediumColumn}>
            {item.author}
          </TableCell>
          <TableCell style={smallColumn}>
            {item.score}
          </TableCell>
          <TableCell style={smallColumn}>
            <a href={item.url}>Link To The source</a>
          </TableCell>
          <span style={smallColumn}>
           <TableCell
           style={divStyle}
           > 
           <Button
           style={divStyle}
              variant="contained"
              color="secondary"
              onClick={() => onDismiss(item.id, item.url, item.title)}
              className='button-inline'
            >
              Show
        </Button>
        <Show></Show>
        </TableCell>
      
          </span>
        </TableRow>

      )}
    </TableBody>
  </Table>

const Show = ({url}) =>
  <h1>
    {url="pst"}
 3asba
  </h1>




const largeColumn = {
  width: '40%'
}
const mediumColumn = {
  width: '30%'
}
const smallColumn = {
  width: '10%'
}
export default Table1