import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import RecipeReviewCard from '../RecipeReviewCard'
import Table from '../Table'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
          <Grid item xs={3}>
            <RecipeReviewCard/>
          </Grid>
          <Grid item xs={3}>
            <RecipeReviewCard/>          
          </Grid>
          <Grid item xs={3} >
            <RecipeReviewCard/>          
          </Grid>
        </Grid>
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
          <Grid item xs={10}>
            <Table/>
          </Grid>
        </Grid>
      </div>
    );
  }