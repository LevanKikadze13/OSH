import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent';

const RegistrationPage = () => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setShowAlert(true);
            return;
        }

        // Perform registration logic here
        console.log('Registration successful!');
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="d-flex flex-column vh-100">
            <NavbarComponent></NavbarComponent>
            <div className="container-fluid flex-grow-1 overflow-auto">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Register</h5>
                                {showAlert && (
                                    <div class="alert alert-warning d-flex align-items-center" role="alert">
                                    <div>
                                      პაროლები არ ემთხვევა
                                    </div>
                                  </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className='row '>
                                        <div className="form-group col">
                                            <label htmlFor="FirstName">სახელი</label>
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="FirstName"
                                                placeholder="Enter your name"
                                                value={FirstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="LastName">გვარი</label>
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                id="LastName"
                                                placeholder="Enter your name"
                                                value={LastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            required
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            required
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            required
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block w-100 mt-2">
                                        Register
                                    </button>
                                    <div className="text-center my-2">
                                        <span className="text-muted">or</span>
                                    </div>
                                    <button type="button" className="btn btn-secondary btn-block w-100" id="login-button">
                                        Login
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

export default RegistrationPage;