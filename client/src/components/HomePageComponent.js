/*eslint react/jsx-filename-extension: 0 */

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

import '../styling/homepage.css';

function HomePageComponent() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Link to={`/home`} className="lnk">
            <IconButton className="menuButton" color="inherit" aria-label="Menu">
              <Home />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" className="grow">
            <Link to={`/listUrl`} className="lnk"> App </Link>
          </Typography>
          <Typography variant="h6" color="inherit" className="grow">
            <Link to={`/newApp`} className="lnk"> NewApp </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HomePageComponent;
