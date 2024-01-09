import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import NextLink from 'next/link';

export const DepartmentsTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Detail
                </TableCell>
                <TableCell>
                  Department
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((department,index) => {
                const isSelected = selected.includes(department.id);
                return (
                  <TableRow
                    key={department+index}
                  >
                    <TableCell>
                      <a href={'PM2-Frontend---employee/department-detail/LBM9Uk3wVjKC5xCGiMoY'}>
                        Detail
                      </a>
                    </TableCell>
                    <TableCell>
                      {department.department}
                    </TableCell>
                    <TableCell>
                      {department.description}
                    </TableCell>
                    <TableCell>
                      {department.address.country},{department.address.city}, {department.address.street}
                    </TableCell>
                    <TableCell>
                      {department.phone}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

DepartmentsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
