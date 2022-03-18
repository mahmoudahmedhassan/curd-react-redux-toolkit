import React from 'react';
import classes from './index.module.css'

function Login() {
  return (
    <div> 
      <form className={classes.form_register}>
            
            <div>
                <label htmlFor="email">Email</label>
                 <input type="email" placeholder='Email' id='email'/>
            </div>
          
            <div>
                <label htmlFor="password">Password</label>
                 <input type="data" placeholder='Password' id='password'/>
            </div>
             
            <div>
                <button className={classes.form_register_submit}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login