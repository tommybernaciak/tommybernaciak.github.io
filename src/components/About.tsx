import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  about: {
    width: '100%',
    fontSize: '2rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2rem',
    letterSpacing: 'normal',
    marginBottom: '2rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    minHeight: '12rem',
  },
}));

const About: React.FC = () => {
  const classes = useStyles({});
  const { t }: { t: i18next.TFunction } = useTranslation();

  return (
    <>
      <Typography className={classes.about}>{t('about')}</Typography>
      <Typography>
        Here are my expertise listed below. • React, AngularJS, Angular, JavaScript, Typescript •
        Ruby, Ruby on Rails • HTML5, CSS3, Flexbox, Bootstrap, Material-UI • D3.js, Recharts,
        Chart.js • SQL, MySQL, PostgreSQL • AWS, Heroku, Jenkins I am open and curious, always
        striving to be better than the day before. I enjoy my work. I am proud of what I built and I
        appreciate a good laugh. If you are looking for a developer who is honest, activated and
        writes clean code - please contact me, I am glad to help you!
      </Typography>
    </>
  );
};

export default About;

// <div className="content-box">
//   <div className="content-heading">About</div>
//   <p>Hi, my name is Tommy and I am a software engineer and a web developer.</p>
//   <p>I'm proud to have worked with some awesome companies:</p>

//   <div className="button-group">
//     <div className="button" onClick={() => window.open('https://www.binarapps.com/')}>
//       BINARAPPS
//     </div>
//     <div className="button" onClick={() => window.open('https://www.stratajet.com/')}>
//       STRATAJET
//     </div>
//     <div className="button" onClick={() => window.open('https://www.gabi.com/')}>
//       GABI
//     </div>
//   </div>
//   <div className="button-group">
//     <div className="button" onClick={() => window.open('https://www.abb.com/')}>
//       ABB
//     </div>
//     <div className="button" onClick={() => window.open('https://www.biotechnologia.pl/')}>
//       BIO-TECH MEDIA
//     </div>
//     <div className="button" onClick={() => window.open('http://www.lokoom.eu/')}>
//       LOKOOM
//     </div>
//   </div>
