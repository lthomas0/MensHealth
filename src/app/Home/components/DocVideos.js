import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
};

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={40} >
      <Grid item key={2} xs={12} md={12}>
        <Card >
          <Grid container>
            <Grid item key={2} xs={12} md={6}>
              <div className={classes.playerWrapper}>
                <ReactPlayer className={classes.reactPlayer} width='100%' height='100%' url='https://www.youtube.com/watch?v=BOtv4zIaN88' />
              </div>
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, quo vidit ipsum ubique ei, sit suas
                  insolens ne, in vim equidem invidunt percipitur. Movet graecis usu an,
                  ridens volumus voluptatibus eu his. Pro id persius feugiat offendit.
                  Ne semper tacimates eum, at nominavi perpetua pericula usu.
                  In splendide urbanitas signiferumque ius, quo ex mutat propriae. His vitae tacimates in.
          </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item key={2} xs={12} md={12}>
        <Card >
          <Grid container>
            <Grid item key={2} xs={12} md={6}>
              <div className={classes.playerWrapper}>
                <ReactPlayer className={classes.reactPlayer} width='100%' height='100%' url='https://www.youtube.com/watch?v=BOtv4zIaN88' />
              </div>
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, quo vidit ipsum ubique ei, sit suas
                  insolens ne, in vim equidem invidunt percipitur. Movet graecis usu an,
                  ridens volumus voluptatibus eu his. Pro id persius feugiat offendit.
                  Ne semper tacimates eum, at nominavi perpetua pericula usu.
                  In splendide urbanitas signiferumque ius, quo ex mutat propriae. His vitae tacimates in.
          </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item key={2} xs={12} md={12}>
        <Card >
          <Grid container>
            <Grid item key={2} xs={12} md={6}>
              <div className={classes.playerWrapper}>
                <ReactPlayer className={classes.reactPlayer} width='100%' height='100%' url='https://www.youtube.com/watch?v=BOtv4zIaN88' />
              </div>
            </Grid>
            <Grid item key={2} xs={12} md={6}>
              <CardContent>
                <Typography component="p">
                  Lorem ipsum dolor sit amet, quo vidit ipsum ubique ei, sit suas
                  insolens ne, in vim equidem invidunt percipitur. Movet graecis usu an,
                  ridens volumus voluptatibus eu his. Pro id persius feugiat offendit.
                  Ne semper tacimates eum, at nominavi perpetua pericula usu.
                  In splendide urbanitas signiferumque ius, quo ex mutat propriae. His vitae tacimates in.
          </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid >
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);