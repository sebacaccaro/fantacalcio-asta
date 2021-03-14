import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { signInWithGoogle } from '../firebase';

function Welcome() {
  return (
    <div className='container'>
      <Jumbotron>
        <h1>Benvenuto in Fantacalcio App!</h1>
        <p>Fantacalcio App è lo strumento perfetto per gestire la tua asta. Crea un account o accedi per cominciare a giocare!</p>
        {/* <p>
            <Button variant='primary'>Learn more</Button>
          </p> */}
        <div className='text-center social-btn row'>
          {/* <a href='#' className='btn btn-primary btn-block'>
              <i className='fa fa-facebook'></i> Sign in with <b>Facebook</b>
            </a>
            <a href='#' className='btn btn-info btn-block'>
              <i className='fa fa-twitter'></i> Sign in with <b>Twitter</b>
            </a> */}
          <div className='col-lg col-1'></div>
          <a
            onClick={() => {
              signInWithGoogle();
            }}
            className='col-10 col-lg-3 btn btn-danger btn-block'
          >
            <i className='fa fa-google'></i> Accedi con <b>Google</b>
          </a>
          <div className='col-lg col-1'></div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Welcome;
