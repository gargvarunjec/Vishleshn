import React from 'react'
import Header from 'component/Header';
import { Box } from '@mui/material';
import BreakdownChart from 'component/BreakdownChart';

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Breakdown" subtitle="Breakdown of Sales by Category" />
      <Box mt="40px" height="75vh">
            <BreakdownChart />
      </Box>
    </Box>
  )
}

export default Breakdown;