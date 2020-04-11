import React, { PureComponent } from 'react';
import { isEmpty } from 'lodash';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      '&': {
        backgroundColor: "purple",
      },
    },
  }),
)(TableRow);

export default class CatsList extends PureComponent {
  state = {
    isLoading: false,
    list: {}
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`http://${window.location.host}/api/cats/groups`, { mode: 'cors' })
      .then(response => response.status === 200 ? response.json() : {})
      .then(list => this.setState({
        isLoading: false,
        list
      }))
  }

  renderRows(key) {
    return this.state.list[key].map(value => <TableRow><TableCell>{value.id}</TableCell></TableRow>)
  }

  renderTable(key) {
    return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
              <TableCell>{`Vote value ${key}`}</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {this.renderRows(key)}
            </TableBody>
          </Table>
        </TableContainer>
    )
  }

  renderTables = keys => keys.map(key => this.renderTable(key));

  render() {
    const keys = Object.keys(this.state.list);
    if (isEmpty(keys)) return <CircularProgress />;
    return this.renderTables(keys)
  }

}
