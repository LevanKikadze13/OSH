import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import NavbarComponent from './NavbarComponent';

const LoginPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavbarComponent></NavbarComponent>
      <div className="container-fluid flex-grow-1 overflow-auto">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card" style={{width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Login</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-right mb-3">
                    <a href="#" className="text-muted">
                      Forgot password?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block login-register-button">
                    Login
                  </button>
                  <div className="text-center mt-3">
                    <span className="text-muted">or</span>
                  </div>
                  <button type="button" className="btn btn-secondary btn-block mt-3 login-register-button">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;