import React  from 'react';

import Show from "./Show";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// const divStyle = {
//   marginBottom: '75px',
// }

const tableColor= {
  backgroundColor:'#e3fdfd'
}

const tableCol = { 
  backgroundColor:'#00adb5'
}

const imagFix =  {
  margin:'35px',
  display:'absolute'
}



  const Table1 =({list, onDismiss})=>
  <Table style={tableCol}  className='table'>
    <TableHead>
      <TableRow >
        <TableCell>Direct Link</TableCell>
        <TableCell >Image</TableCell>
        <TableCell >User</TableCell>
        <TableCell>Score</TableCell>
        <TableCell>Links</TableCell>
      </TableRow>
    </TableHead>
    <TableBody >
      {list.map(item =>
        <TableRow style={tableColor} key={item.id} className='table-row'>
          <TableCell style={largeColumn}>
            <a href={item.permalink}>{item.title}</a>
          </TableCell>
          <span style={largeColumn}>
            <img style={imagFix} src={item.url} height="242" width="242"></img>
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
          <TableCell style={smallColumn}>
          <Show  url={item.url} title={item.id} score={item.score}  className='button-inline' ></Show>
          </TableCell>
        </TableRow>

      )}
    </TableBody>
  </Table>




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