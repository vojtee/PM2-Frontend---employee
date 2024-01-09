import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestIssues } from 'src/sections/overview/overview-latest-issues';
import { OverviewEmployeeIssuesGraph } from 'src/sections/overview/overview-employee-issues-graph';
import { OverviewIssueTypeGraph } from 'src/sections/overview/overview-issue-type-graph';
import React, { useEffect, useState } from 'react';
import {endOfMonth, format, startOfMonth} from "date-fns";
import createApiInstance from '../utils/api';

const now = new Date();

const Page = () => {

  const instance = createApiInstance();
  const [employee, setEmployee] = useState(null);
  const [employeeDept, setEmployeeDept] = useState(null);
  const [employeeIssues, setEmployeeIssues] = useState([]);
  const [yearlyGraphData, setYearlyGraphData] = useState({
      thisYear: [],
      lastYear: [],
    }
  );
  const [statusCount, setStatusCount] = useState({
    solving: 0,
    solved: 0,
  });

  const getEmployee = async () => {
    try {
      const response = await instance.get(`/api/v1/employees/me`);
      setEmployee(response.data);
      const responseDept = await instance.get(`/api/v1/departments/${response.data?.departmentUid}`);
      setEmployeeDept(responseDept.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getIssues = async () => {
    try {
      const response = await instance.get(`/api/v1/issues/employee/${employee?.uid}`);
      const issuesData = response.data.issues;
      const formattedIssues = issuesData.map(issue => ({
        id: issue.id,
        name: issue.title,
        description: issue.description,
        longitude: issue.coordinates.longitude,
        latitude: issue.coordinates.latitude,
        dateOfCreation: issue.creationDate,
        status: issue.status
      }));

      setEmployeeIssues(formattedIssues);
      countIssuesByStatus(formattedIssues);
    } catch (error) {
      console.log(error);
    }
  };

  const countIssuesByStatus = async (issues) => {
    try {
      if (employee) {
        const startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
        const responseSolved = await instance.get(`api/v1/issues/employee/${employee?.uid}/count?from=${startDate}&statuses=SOLVED`);
        const responseSolving = await instance.get(`api/v1/issues/employee/${employee?.uid}/count?from=${startDate}&statuses=SOLVING`);
        const solvedCount = responseSolved.data.count;
        const solvingCount = responseSolving.data.count;
        setStatusCount({
          solved: solvedCount,
          solving: solvingCount,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getYearlyGraphData = async () => {
    try {
      if (employee) {
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;
        const months = Array.from({ length: 12 }, (_, month) => month);

        const thisYearPromises = months.map(async (month) => {
          const thisYearStartDate = format(new Date(currentYear, month, 1), 'yyyy-MM-dd');
          const thisYearEndDate = format(endOfMonth(new Date(currentYear, month)), 'yyyy-MM-dd');
          const responseThisYear = await instance.get(`api/v1/issues/employee/${employee?.uid}/count?from=${thisYearStartDate}&to=${thisYearEndDate}`);
          return responseThisYear.data.count;
        });

        const lastYearPromises = months.map(async (month) => {
          const lastYearStartDate = format(new Date(lastYear, month, 1), 'yyyy-MM-dd');
          const lastYearEndDate = format(endOfMonth(new Date(lastYear, month)), 'yyyy-MM-dd');
          const responseLastYear = await instance.get(`api/v1/issues/employee/${employee?.uid}/count?from=${lastYearStartDate}&to=${lastYearEndDate}`);
          return responseLastYear.data.count;
        });

        const [thisYearCounts, lastYearCounts] = await Promise.all([
          Promise.all(thisYearPromises),
          Promise.all(lastYearPromises),
        ]);

        setYearlyGraphData({
          thisYear: thisYearCounts,
          lastYear: lastYearCounts,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getEmployee();
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (employee) {
        await getIssues();
        await getYearlyGraphData();
      }
    };
    fetchData();
  }, [employee]);

return (
  <>
    <Head>
      <title>
        Better City
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Grid container spacing={3}>
        {/* First grid box above all with name */}
        <Grid item xs={12} sx={{paddingTop:0}}>
          <Card>
            <CardContent>
              <Typography variant="h5">{employee ? employee.firstName + " " + employee.lastName : null}</Typography>
              <Typography variant="subtitle1">Department: {employeeDept ? employeeDept.name : null}</Typography>
              <Typography variant="body1">{employee ? employee.email : null}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
              xs={12}
              md={12}
              lg={8}
          >
            <OverviewLatestIssues
                issues={employeeIssues}
                sx={{ height: '100%' }}
            />
          </Grid>

          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewIssueTypeGraph
              chartSeries={[statusCount.solving, statusCount.solved]}
              labels={['Solving', 'Solved']}
              sx={{ height: '100%' }}
            />
          </Grid>

          <Grid
            xs={12}
            lg={8}
          >
            <OverviewEmployeeIssuesGraph
              chartSeries={[
                {
                  name: 'This year',
                  data: yearlyGraphData.thisYear
                },
                {
                  name: 'Last year',
                  data: yearlyGraphData.lastYear
                }
              ]}
              sx={{height: '100%'}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
