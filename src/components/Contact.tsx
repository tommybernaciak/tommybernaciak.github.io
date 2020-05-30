import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { green } from './App';

const useStyles = makeStyles(() => ({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: '2rem',
    color: '#fff',
    marginBottom: '2rem',
  },
  email: {
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: '1rem',
    color: '#fff',
    marginBottom: '2rem',
  },
  button: {
    border: `thin solid ${green}`,
    color: green,
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  const { t }: { t: i18next.TFunction } = useTranslation();
  const PHONE = '+48 666 393 797';
  const PHONE_HREF = 'tel:+48666393797';
  const EMAIL = 'contact@tommybernaciak.com';

  return (
    <div className={classes.contact}>
      <Typography align="center" noWrap className={classes.title}>
        {t('contact-title')}
      </Typography>
      <Typography align="center" noWrap className={classes.email}>
        {EMAIL}
      </Typography>
      <Button href={PHONE_HREF} variant="outlined" className={classes.button}>
        {PHONE}
      </Button>
    </div>
  );
};

export default Contact;
