import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { ApiClient } from './api-client';
import Users from './components/users';
import Clients from './components/clients';
import Campaigns from './components/campaign';
import { AppBar, Toolbar, IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const apiClient = new ApiClient();

  const classes = useStyles();
  return (
    <Router>
      <div className="app">
        <div className="header">
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Link to="/campaign">
                  Campaign
                </Link>
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Link to="/users">
                  Users
              </Link>
              </IconButton>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Link to="/clients">
                  clients
              </Link>
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
        <Switch>
          <Route exact path="/campaign">
            <div className="campaigns">
              <h1> Campaign</h1>
              <Campaigns apiClient={apiClient} />
            </div>
          </Route>
          <Route path="/users">
            <div className="users">
              <h1>Users</h1>
              <Users apiClient={apiClient} />
            </div>
          </Route>
          <Route path="/clients">
            <div className="clients">
              <h1>Clients</h1>
              <Clients apiClient={apiClient} />
            </div>
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
