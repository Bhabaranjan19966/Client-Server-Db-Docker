/*eslint react/jsx-filename-extension: 0 */
/*eslint react/prop-types: 0 */

import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HomePageComponent from './HomePageComponent'



const styles = theme => ({
  card: {
    maxWidth: '80%',
    marginTop: '1%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'green'
  },
  checkCircle: {
    height: '1.5em',
  }
});

const ListUrlComponent = (props) => {
  // const token = queryString.parse(props.location.search).token;
  // if (!token) {
  //     window.localStorage.setItem("jwt",token);
  //     props.history.push("/");
  //  }
  const { classes } = props;
  const data = ['css', 'html', 'javascript', 'nodejs'];
  return (
    <div>
      <HomePageComponent />
      {data.map((x) =>
          <div className={classes.root}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    <CheckCircle className={classes.checkCircle} />
                  </Avatar>
                }
                title={x}
                subheader="September 14, 2016"
              />
            </Card>
          </div>
        )
      }
    </div>
  );
}

export default withStyles(styles)(ListUrlComponent);
