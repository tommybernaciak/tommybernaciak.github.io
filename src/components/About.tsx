import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  main: {
    width: '100%',
    paddingLeft: '10rem',
    paddingRight: '10rem',
  },
  about: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
    marginBottom: '2rem',
    minHeight: '8rem',
  },
  stackTitle: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  stack: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  more: {
    fontSize: '1rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    minHeight: '3rem',
  },
}));

const About: React.FC = () => {
  const classes = useStyles({});
  const { t }: { t: i18next.TFunction } = useTranslation();
  const FRONTEND = 'React, AngularJS, Angular, JavaScript, Typescript';
  const BACKEND = 'Ruby, Ruby on Rails';
  const STYLE = 'HTML5, CSS3, Flexbox, Bootstrap, Material-UI';
  const DB = 'SQL, MySQL, PostgreSQL';
  const DEPLOY = 'AWS, Heroku, Jenkins';

  return (
    <>
      <Typography className={`${classes.main} ${classes.about}`}>{t('about')}</Typography>
      <Typography className={`${classes.main} ${classes.stackTitle}`}>
        {t('stack-title')}
      </Typography>
      <Typography className={`${classes.main} ${classes.stack}`}>{FRONTEND}</Typography>
      <Typography className={`${classes.main} ${classes.stack}`}>{BACKEND}</Typography>
      <Typography className={`${classes.main} ${classes.stack}`}>{STYLE}</Typography>
      <Typography className={`${classes.main} ${classes.stack}`}>{DB}</Typography>
      <Typography className={`${classes.main} ${classes.stack}`}>{DEPLOY}</Typography>
      <Typography className={`${classes.main} ${classes.more}`}>{t('more')}</Typography>
    </>
  );
};

export default About;
