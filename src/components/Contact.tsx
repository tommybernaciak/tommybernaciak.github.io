import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  contact: {
    width: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2rem',
    letterSpacing: 'normal',
    color: '#fff',
    marginBottom: '2rem',
  },
  email: {
    fontSize: '1rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1rem',
    letterSpacing: 'normal',
    color: '#fff',
  },
  button: {
    backgroundColor: '#2ab859',
    color: '#2ab859',
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  const { t }: { t: i18next.TFunction } = useTranslation();

  return (
    <div className={classes.contact}>
      <Typography align="center" noWrap className={classes.title}>
        {t('contact-title')}
      </Typography>
      <Typography align="center" noWrap className={classes.email}>
        contact@tommybernaciak.com
      </Typography>
      <Button href="tel:+48666393797" variant="outlined" className={classes.button}>
        +48 666 393 797
      </Button>
    </div>
  );
};

export default Contact;
