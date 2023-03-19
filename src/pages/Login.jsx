import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='container full-container d-flex justify-content-center align-items-center'>
            <div className="">
                <h2 className='text-center text-success mb-3'>Login</h2>
                <div class="card input-container">
                    <div class="card-body">
                        <form>
                            <div class="form-group mt-2">
                                <label for="exampleInputEmail1">Username</label>
                                <input required type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                            </div>
                            <div class="form-group mt-2">
                                <label for="exampleInputPassword1">Password</label>
                                <input required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>

                            <p className="mt-3 text-center">Don't have an account? <Link to={'/register'}>Register</Link></p>
                            <button type="submit" class="btn btn-success mt-2 mx-auto d-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login