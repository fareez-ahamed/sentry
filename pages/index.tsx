import * as React from 'react'
import BaseLayout from '../components/BaseLayout';
import { Paper, withStyles, Typography, TextField, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: theme.spacing.unit * 50,
    margin: "100px auto"
    // marginLeft: theme.spacing.unit * 60,
    // marginRight: theme.spacing.unit * 60,
    // marginTop: theme.spacing.unit * 10,
    // marginBottom: theme.spacing.unit * 10
  }
})

const IndexPage = ({classes}) => {
  return (
    <BaseLayout title="Sign In" bgcolor="white">
      <Paper className={classes.root} elevation={1}>
        <form autoComplete="off" noValidate>
          <TextField type="Email" variant="outlined" label="Email" margin="normal" fullWidth />
          <TextField type="Password" variant="outlined" label="Password" margin="normal" fullWidth />
          <Button type="submit" size="large" color="primary" variant="contained" fullWidth>Sign In</Button>
        </form>
      </Paper>
    </BaseLayout>
  )
}

export default withStyles(styles)(IndexPage);
