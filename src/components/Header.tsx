import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '10vh',
    width: '100%',
    fontSize: '7rem',
    fontWeight: 'bold',
    lineHeight: '8rem',
    color: '#fff',
    marginBottom: '2rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const { t }: { t: i18next.TFunction } = useTranslation();
  return (
    <Typography align="center" noWrap className={classes.title}>
      {t('header')}
    </Typography>
  );
};

export default Header;
