import React from 'react';
import classes from './header.module.css';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import ModalAuth from '../modal/ModalAuth'
function Header() {
    const { error } = useSelector(state => state.postSlice)
    return (
        <>
            {error ? (<Alert severity="error" style={{ color: 'red' }}>{error}</Alert>
            ) : (
                <div className={classes.header}>
                    <h1>test crud app using redux toolkit</h1>
                    <button className={classes.login}>
                        <ModalAuth />  
                    </button>
                </div>
            )
            }


        </>

    );
}

export default Header;
