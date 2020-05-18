import React, { Dispatch, SetStateAction, useCallback } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { changeLang } from '../utils/i18next';
import { makeStyles } from '@material-ui/core/styles';
import { IState } from './App';

interface IProps {
  language: string;
  setState: Dispatch<SetStateAction<IState>>;
}

const useStyles = makeStyles(() => ({
  button: {
    color: '#bcbcbc',
  },
  buttonSelected: {
    color: '#2ab859',
  },
}));

const LanguageButton: React.FC<IProps> = ({ language, setState }) => {
  const classes = useStyles();
  const isSelected = useCallback((lang: string) => language === lang, [language]);

  const changeLanguage = useCallback(
    (l: string) => {
      setState((prevState) => {
        return { ...prevState, lang: l };
      });
      changeLang(l);
    },
    [setState]
  );

  return (
    <div>
      <Button
        className={isSelected('pl') ? classes.buttonSelected : classes.button}
        onClick={() => changeLanguage('pl')}
      >
        pl
      </Button>
      <Button
        className={isSelected('en') ? classes.buttonSelected : classes.button}
        onClick={() => changeLanguage('en')}
      >
        en
      </Button>
    </div>
  );
};

export default LanguageButton;
