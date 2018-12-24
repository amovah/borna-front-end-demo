import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import MatTableHead from './MatTableHead';
import MatTableToolbar from './MatTableToolbar';
import { connect } from 'react-redux';
import moment from 'Root/moment';
import { enToFa } from 'Root/mapper';

function getSorting(order, orderBy) {
  return (a, b) => {
    let first = a;
    let last = b;
    if (order === 'desc') {
      [last, first] = [first, last];
    }

    switch (orderBy) {
      case 'name': {
        return (first.firstname + first.lastname).localeCompare(last.firstname + last.lastname);
      }

      case 'text': {
        return (first.suggestion.text).localeCompare(last.suggestion.text);
      }

      case 'status': {
        return (first.suggestion.status).localeCompare(last.suggestion.status);
      }

      case 'date': {
        return first.suggestion.date - last.suggestion.date;
      }

      case 'likes': {
        return first.suggestion.likes - last.suggestion.likes;
      }

      default: {
        return 0;
      }
    }
  };
}

const labelOfFuck = ({ from, to, count }) => {
  const fromA = from.toLocaleString('fa');
  const toA = to.toLocaleString('fa');
  const countA = count.toLocaleString('fa');

  return `${fromA}-${toA} از ${countA}`;
};

class MatTable extends PureComponent {
  state = {
    order: 'asc',
    orderBy: 'radif',
    selected: [],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') { order = 'asc'; }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    const { suggestions } = this.props;
    if (checked) {
      this.setState(() => ({ selected: suggestions.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
  };

  handleDeleteSelected = () => {
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {
      order, orderBy, selected, rowsPerPage, page,
    } = this.state;
    const data = this.props.suggestions;
    let counter = page * rowsPerPage;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h3 className="bold-text textright">بخش نظارت</h3>
            </div>
            <MatTableToolbar
              numSelected={selected.length}
              handleDeleteSelected={this.handleDeleteSelected}
              onRequestSort={this.handleRequestSort}
            />
            <div className="material-table__wrap">
              <Table className="material-table">
                <MatTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={this.handleSelectAllClick}
                  onRequestSort={this.handleRequestSort}
                  rowCount={data.length}
                />
                <TableBody>
                  {data
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                    .map((d) => {
                      const isSelected = this.isSelected(d.id);
                      counter += 1;
                      return (
                        <TableRow
                          className="material-table__row"
                          role="checkbox"
                          onClick={event => this.handleClick(event, d.id)}
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={d.id}
                          selected={isSelected}
                        >
                          <TableCell className="material-table__cell" padding="checkbox">
                            <Checkbox checked={isSelected} className="material-table__checkbox" />
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {counter.toLocaleString('fa')}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {`${d.firstname} ${d.lastname}`}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {d.suggestion.text}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {
                              d.suggestion.status === 'در حال نمایش' ?
                                <span className="mattabbadge-green">
                                  {d.suggestion.status}
                                </span> :
                                <span className="mattabbadge-red">
                                  {d.suggestion.status}
                                </span>
                            }
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi mattabltr"
                          >
                            {enToFa(moment(d.suggestion.date).format('jYYYY/jM/D HH:mm'))}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi mattabcenter"
                          >
                            {enToFa(d.suggestion.likes.toString())}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {
                              d.suggestion.status === 'در حال نمایش' ?
                                <Button color="danger" className="mattabbtn">
                                  گزارش
                                </Button> :
                                <Button color="success" className="mattabbtn">
                                  نمایش
                                </Button>
                            }
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              labelRowsPerPage="ردیف بر صفحه"
              component="div"
              className="material-table__pagination mattabfarsi mattabpage"
              labelDisplayedRows={labelOfFuck}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
            />
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default connect(state => ({
  suggestions: state.suggestionOrgA,
}))(MatTable);
