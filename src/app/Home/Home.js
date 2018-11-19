import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Media from "react-media";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import DocVideos from './components/DocVideos';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar';

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
          <Media query="(max-width: 599px)">
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