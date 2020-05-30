import React, { memo } from 'react';
import './App.css';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { green } from './App';

const useStyles = makeStyles((theme) => ({
  social: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    marginBottom: '2rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    color: green,
  },
}));

const Social: React.FC = () => {
  const classes = useStyles();

  const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/tommybernaciak' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/tommybernaciak' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/tommy-bernaciak/' },
  ];
  return (
    <div className={classes.social}>
      {social.map((s, index) => (
        <Link display="block" className={classes.link} href={s.url} key={index}>
          <s.icon />
        </Link>
      ))}
    </div>
  );
};

export default memo(Social);
