import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';


const styles = theme => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
});

const sections = [
    'Home',
    'Conditions and Treatments',
    'Our Doctors',
    'Our Clinic'
];

function NavBar(props) {
    const { classes } = props;
    return (
        <header>
            <Toolbar className={classes.toolbarMain}>
                <Grid container >
                    <Grid item key={1} xs={12} md={2}>
                        <Typography
                            component="h6"
                            color="inherit"
                            noWrap
                        >
                            Phone:(555) 555-5555
</Typography>
                    </Grid>
                    <Grid item key={2} xs={12} md={4}>
                        <Typography
                            component="h6"
                            color="inherit"
                            noWrap
                        >
                            Address:1111 8th St., 
                            New Orleans, LA 55555
</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar variant="dense" className={classes.toolbarSecondary}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                >
                    Men's Health New Orleans
</Typography>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                        {section}
                    </Typography>
                ))}
            </Toolbar>
        </header>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);