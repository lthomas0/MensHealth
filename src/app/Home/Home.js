import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Media from "react-media";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import DocInfo  from './components/DocInfo.js';
import DocInfo2  from './components/DocInfo2.js';
import DocInfo3  from './components/DocInfo3.js';
import DocInfo4  from './components/DocInfo4.js';
import DocInfo5  from './components/DocInfo5.js';
import DocInfo6  from './components/DocInfo6.js';
import DocInfo7  from  './components/DocInfo6.js';
import DocVideos from './components/DocVideos';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';
import Icon from '@material-ui/core/Icon';



const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});
class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.setState = {
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
        {/* Navigation Bar */}
          <Media query="(max-width: 800px)">
            {matches =>
              matches ? (
                <MobileNavBar />
              ) : (
                  <NavBar />
                )
            }
          </Media>
          {/* Main Content */}
          <main>
            {/* Video posts here */}
            <DocVideos />
            {/* End video posts */}
          </main>

        </div>
        <Grid container spacing={16} padding={20} container direction="row" justify="center" alignItems="center">
        <Grid item sm={4}>
          <DocInfo />
        </Grid>
        <Grid item sm={4}>
          <DocInfo2 />
        </Grid>
        <Grid item sm={4}>
          <DocInfo3 />
        </Grid>
        <Grid item sm={4}>
          <DocInfo4 />
        </Grid>
        <Grid item sm={4}>
          <DocInfo5 />
        </Grid>
        <Grid item sm={4}>
          <DocInfo6 />
        </Grid>
      </Grid>
        
     
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);