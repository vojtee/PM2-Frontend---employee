import { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import MapIcon from '@mui/icons-material/Map';
import { Box, Button, Container, FormControl, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { IssuesTable } from 'src/sections/issue/issues-table';
import { IssuesSearch } from 'src/sections/issue/issues-search';
import { applyPagination } from 'src/utils/apply-pagination';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import createApiInstance from '../utils/api';

const issuesData = [];

const useIssues = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(issuesData, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useIssueIds = (issues) => {
  return useMemo(
    () => {
      return issues.map((issue) => issue.id);
    },
    [issues]
  );
};

const Page = () => {
  const instance = createApiInstance();
  const [issuesData, setIssuesData] = useState(null);
  const [issuesByDepartmentData, setIssuesByDepartmentData] = useState([]);
  const [myIssuesData, setMyIssuesData] = useState([]);

  const [myId, setMyId] = useState(null);
  const [myDepartment, setMyDepartment] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [employee, setEmployee] = useState('');

  const issues = useIssues(page, rowsPerPage);
  const issuesIds = useIssueIds(issues);
  const issuesSelection = useSelection(issuesIds);

  const getMe = async () => {
    try {
      const meData = await instance.get('/api/v1/employees/me');
      setMyId(meData.data.uid);
      setMyDepartment(meData.data.departmentUid);
    } catch (error) {
      console.error('Error fetching my data:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'status') {
      setStatus(value);
    }
    if (name === 'department') {
      if (value != '') {
        getIssuesByMyDepartment(myDepartment);
      }
      setDepartment(value);
    }
    if (name === 'employee') {
      if (value != '') {
        getMyIssues(myId);
      }
      setEmployee(value);
    }
  };

  const applyFilters = () => {
    let filteredData = [...issuesData];

    if (status) {
      filteredData = filteredData.filter(issue => issue.status === status);
    }

    if (department) {
      filteredData =
        filteredData.filter(issue => issuesByDepartmentData.some(dIssue => dIssue.id === issue.id));
    }

    if (employee) {
      filteredData =
        filteredData.filter(issue => myIssuesData.some(mIssue => mIssue.id === issue.id));
    }
    return filteredData;
  };

  const getIssues = async () => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues');
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setIssuesData(issuesData);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const getIssuesByMyDepartment = async (uid) => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues/department/' + uid);
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setIssuesByDepartmentData(issuesData);
    } catch (error) {
      console.error('Error fetching issues by department:', error);
    }
  };

  const getMyIssues = async (uid) => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues/employee/' + uid);
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setMyIssuesData(issuesData);
    } catch (error) {
      console.error('Error fetching issues by me:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIssues();
      await getMe();
    };
    fetchData();
  }, []);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Issues
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Issues
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Status</InputLabel>
                    <Select
                      labelId="select-status-label"
                      id="select-status"
                      value={status}
                      label="Status"
                      name="status"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="PUBLISHED">Published</MenuItem>
                      <MenuItem value="SOLVING">Solving</MenuItem>
                      <MenuItem value="SOLVED">Solved</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Department</InputLabel>
                    <Select
                      labelId="select-department-label"
                      id="select-department"
                      value={department}
                      label="Department"
                      name="department"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="myDepartment">My department</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Employee</InputLabel>
                    <Select
                      labelId="select-employee-label"
                      id="select-employee"
                      value={employee}
                      label="Employee"
                      name="employee"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="me">My issues</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <MapIcon/>
                      </SvgIcon>)} href={"/issue-map"}
                  >
                    Show on map
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <IssuesSearch/>
            <IssuesTable
              count={issuesData ? issuesData.length : 0}
              items={issuesData ? applyFilters(issuesData) : []}
              onDeselectAll={issuesSelection.handleDeselectAll}
              onDeselectOne={issuesSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={issuesSelection.handleSelectAll}
              onSelectOne={issuesSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={issuesSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
