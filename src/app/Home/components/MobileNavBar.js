import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class MobileNavBar extends PureComponent {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <AppBar position="fixed">
                <IconButton
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}

                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Home</MenuItem>
                    <MenuItem onClick={this.handleClose}>Conditions and Treatments</MenuItem>
                    <MenuItem onClick={this.handleClose}>Our Doctors</MenuItem>
                    <MenuItem onClick={this.handleClose}>Our Clinic</MenuItem>
                </Menu>
            </AppBar>
        );
    }
}

export default MobileNavBar;