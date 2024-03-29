import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const rows = [
  {
    id: 'radif', disablePadding: true, label: 'ردیف',
  },
  {
    id: 'name', disablePadding: false, label: 'اسم و فامیل کاربر',
  },
  {
    id: 'createDate', disablePadding: false, label: 'تاریخ افتتاح حساب',
  },
  {
    id: 'profitDate', disablePadding: false, label: 'تاریخ آخرین سود',
  },
  {
    id: 'deposit', disablePadding: false, label: 'موجودی',
  },
  {
    id: 'profit', disablePadding: false, label: 'سود',
  },
  {
    id: 'depositType', disablePadding: false, label: 'نوع سپرده',
  },
  {
    id: 'profitPercent', disablePadding: false, label: 'درصد سود',
  },
];

export default class MatTableHead extends PureComponent {
  static propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  createSortHandler = property => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick, order, orderBy, numSelected, rowCount,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              className="material-table__cell material-table__cell--sort mattabfarsi"
              key={row.id}
              numeric={row.numeric}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={this.createSortHandler(row.id)}
                className="material-table__sort-label"
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
          ), this)}
        </TableRow>
      </TableHead>
    );
  }
}
