import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useOutletContext } from "react-router-dom";
import DocRecentPatients from '../components/DocRecentPatients';

export default function Dashboard() {
  const doctorId=useOutletContext();
  return (
          <Container maxWidth="xl" >
            <Grid container spacing={12}>
              {/* Recent Patients */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 440,
                  }}
                >
                  <h3>Recent Patients</h3>
                  <DocRecentPatients doctorId={doctorId}/>
                </Paper>
              </Grid>
              {/* Some Chart */}
              <Grid item xs={12}  md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                  }}
                >
                  The trends
                </Paper>
              </Grid>
              {/* Tasks */}
              <Grid item xs={12}  md={6} lg={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                 To-Do List
                </Paper>
              </Grid>
            </Grid>
          </Container>
  );
}