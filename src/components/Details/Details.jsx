import React from 'react';
import {Card , CardContent , CardHeader , Typography} from '@material-ui/core';
import useTransactions from '../../useTransaction';
import useStyles from './style'

import {Doughnut} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({title}) => {
    const classes = useStyles();
    const { total , chartData} = useTransactions(title)
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant='h5'>${total}</Typography>
            <Doughnut data={chartData} />
        </CardContent>
    </Card>
  )
}


export default Details