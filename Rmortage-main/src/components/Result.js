import { Stack, Typography } from '@mui/material';
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {

  const { homeValue, downpayment, loanAmount, loanTerm, Interest } = data
  const totalMonths = loanTerm * 12;
  const interestPerMonth = Interest / 100 / 12
  const monthlyPayment = (
    loanAmount *
    interestPerMonth *
    (1 + interestPerMonth) ** totalMonths) /
    ((1 + interestPerMonth) ** totalMonths - 1);
  const totalInterest = monthlyPayment * totalMonths - loanAmount
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: 'Ratio of Principle and Interest',
        data: [homeValue, totalInterest],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <Stack>
      <Typography textAlign={'center'} variant='h5'>Monthly Payment:${Math.round(monthlyPayment)}</Typography>
      <Pie data={pieChartData}></Pie>
    </Stack>
  )
}

export default Result