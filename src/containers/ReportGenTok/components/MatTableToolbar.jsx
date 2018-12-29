import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from 'mdi-react/DeleteIcon';
import MatTableFilterButton from './MatTableFilterButton';
import { enToFa } from 'Root/mapper';

const MatTableToolbar = ({ numSelected, handleDeleteSelected, onRequestSort }) => (
  <div className="material-table__toolbar-wrap">
    <Toolbar className="material-table__toolbar">
      <div>
        {numSelected > 0 ? (
          <IconButton
            onClick={handleDeleteSelected}
            className="material-table__toolbar-button"
          >
            <DeleteIcon />
          </IconButton>
            ) : (
              <MatTableFilterButton onRequestSort={onRequestSort} />
            )}
      </div>
    </Toolbar>
  </div>
);

MatTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableToolbar;
