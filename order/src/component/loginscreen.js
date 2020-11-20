import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React from "react";


const Login = (props) => {
    return(
        <div class="p-4">
                <form>
                    <h3>Sign In</h3>

                    <div class="row">
                        <div class="col">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                    </div>

                    <div class="row">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div className="custom-control custom-checkbox"></div>
                            <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </div>
                
                </form>
            </div>
    )
                
                

};
export default Login;
