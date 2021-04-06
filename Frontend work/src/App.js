import React from 'react';
import bg from './images/bg.jpg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <div className="card py-8 bg-primary position-relative text-white">
    <div className="card-img bg-cover bg-overlay-primary">
      <img src={bg} className="img-fluid img-cover" alt="Robust UI Kit"/>
    </div>
    <div className="card-img-overlay intro-content mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h1 className="display-4 mb-3 card-title">Welcome Here!</h1>
            
          </div>
          <div className="col-md-5 ml-auto">
            <div className="card">
              <div className="card-body text-dark">
                <form onSubmit={(e) => login(e)}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                  </div>
                  <button type="submit" className="btn btn-success btn-block btn-lg mb-2">Sign In</button>
                  <div className="text-center">
                    Don't have an account? <a href="#">Register here</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}


function login(e){

  e.preventDefault();

  let request = {
      email: document.getElementById('email').value, 
      password: document.getElementById('password').value
  }

  axios.post('http://localhost:3000/login', request)
  .then(response => {
    alert(response.data.message);
  })
  .catch(err => {
    console.log(err);
  })

}


export default App;
