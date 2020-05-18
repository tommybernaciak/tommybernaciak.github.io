import React from 'react';
import './App.css';
import { Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const Social: React.FC = () => {
  const classes = useStyles({});

  const social = [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ];
  return (
    <div>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network, index) => (
        <Link display="block" variant="body1" href="#" key={index}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </div>
  );
};

export default Social;
// <div className="App">
//   <div className="wrapper">
//     <TopNavbar />
//   </div>
//   <div className="content">
//     <div>
//       <div className="nav-button" onClick={() => setPage(PAGE.ABOUT)}>
//         {t('about-button')}
//       </div>
//       {/* <div className="nav-button" onClick={() => setPage(PAGE.BLOG)}>
//         Blog
//       </div> */}
//       <div
//         className="nav-button"
//         onClick={() => window.open('https://www.linkedin.com/in/tommy-bernaciak/')}
//       >
//         LinkedIn
//       </div>
//       <div
//         className="nav-button"
//         onClick={() => window.open('https://twitter.com/tommybernaciak')}
//       >
//         Twitter
//       </div>
//       <div
//         className="nav-button"
//         onClick={() => window.open('https://github.com/tommybernaciak')}
//       >
//         GitHub
//       </div>
//     </div>
//     <div className="wrapper">{renderPage()}</div>
//   </div>
// </div>
