import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: 150
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Dr. Raju Thomas"
          className={classes.media}
          height="140"
          image="assets/img/drthomas.jpg"
          title="Dr. Raju Thomas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Dr. Raju Thomas, MD, FACS, FRCS, MHA
          </Typography>
          <Typography component="p">
            Dr. Thomas joined the faculty at Tulane University in the Department of Urology, receiving board 
            certification by the American Board of Urology in 1984. Dr. Thomas’ career has been dedicated to innovations in delivering 
            minimally invasive urologic surgical procedures. Dr Thomas has significant experience in basic and complex endourological 
            procedures, including diagnostic, therapeutic and reconstructive.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
