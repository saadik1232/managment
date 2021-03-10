import React, { useEffect , useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import responderser from './../actions/ResSer';
import  Typography  from '@material-ui/core/Typography';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [data2 , setdata] = useState([]);
  
  const getdate = (date) => {
    let  d = date.slice(0,10);
    return d;
  }
  
  useEffect(() => {  
  responderser.getPanics().then((response) =>{
  setdata(response.result.data)
  //console.log("the data",data2);
  // let dnt = data[0].createdAt;
  // let d = String(dnt)
  // d= d.slice(0,10)
  // console.log("only date",d);
  })
  }, [])

  return (
    <React.Fragment>
      <Title>Recent Comlaints</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell> <Typography variant="h5" color="Primary"> Date </Typography>  </TableCell>
            <TableCell> <Typography variant="h5" color="Primary"> Complain ID </Typography> </TableCell>
            <TableCell> <Typography variant="h5" color="Primary"> Complain Type</Typography> </TableCell>
            <TableCell> <Typography variant="h5" color="Primary"> Responder Involved</Typography> </TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data2.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{getdate(row.createdAt)}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.panicType}</TableCell>
              <TableCell>{row.responderInvolved}</TableCell>
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link> */}
      </div>
    </React.Fragment>
  );
}
