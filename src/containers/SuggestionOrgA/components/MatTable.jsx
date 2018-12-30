import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Button, Row } from 'reactstrap';
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
    let first = b;
    let last = a;
    if (order === 'desc') {
      [last, first] = [first, last];
    }

    switch (orderBy) {
      case 'name': {
        const fName = first.creator.firstname + first.creator.lastname;
        const lName = last.creator.firstname + last.creator.lastname;
        return fName.localeCompare(lName);
      }

      case 'text': {
        return first.text.localeCompare(last.text);
      }

      case 'status': {
        return first.status.localeCompare(last.status);
      }

      case 'date': {
        return first.date - last.date;
      }

      case 'likes': {
        return first.likes - last.likes;
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
              <Row>
                <Col xs="2">
                  <MatTableToolbar
                    numSelected={selected.length}
                    handleDeleteSelected={this.handleDeleteSelected}
                    onRequestSort={this.handleRequestSort}
                  />
                </Col>
                <Col xs="10">
                  <h3 className="bold-text textright">
                    لیست نظرات کابران
                  </h3>
                </Col>
              </Row>
            </div>
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
                          tabIndex={-1}
                          key={d.id}
                        >
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
                            {`${d.creator.firstname} ${d.creator.lastname}`}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {d.text}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {
                              d.status === 'در حال نمایش' ?
                                <span className="mattabbadge-green">
                                  {d.status}
                                </span> :
                                <span className="mattabbadge-red">
                                  {d.status}
                                </span>
                            }
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi mattabltr"
                          >
                            {enToFa(moment(d.date).format('jYYYY/jM/D HH:mm'))}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi mattabcenter"
                          >
                            {d.likes.toLocaleString('fa')}
                          </TableCell>
                          <TableCell
                            className="material-table__cell material-table__cell mattabfarsi"
                          >
                            {
                              d.status === 'در حال نمایش' ?
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
