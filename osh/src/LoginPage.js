import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import NavbarComponent from './NavbarComponent';
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavbarComponent></NavbarComponent>
      <div className="container-fluid flex-grow-1 overflow-auto">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">შესვლა</h5>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className='mb-1'>ელ-ფოსტა:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="შეიყვანეთ ელ-ფოსტა"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className='mb-1'>პაროლი:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="შეიყვანეთ პაროლი"
                    />
                  </div>
                  <div className="text-right mb-3">
                    <a href="#" className="text-muted">
                      დაგავიწყდათ პაროლი?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block w-100 mt-2">
                    შესვლა
                  </button>
                  <div className="text-center my-2">
                    <span className="text-muted">ან</span>
                  </div>
                  <Link to="/Register" className="btn btn-secondary btn-block w-100" id="login-button">
                    რეგისტრაცია
                  </Link>
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