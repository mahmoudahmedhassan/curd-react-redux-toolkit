import { useState } from 'react';
import classes from './index.module.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import Login from './Login';
import Register from './Register';
function Example() {
 
    const [tap,setTap] =useState(0);
    
     // functions close and open modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style = {
        width: '100px',
        height: ' 50px',
        background: '#767676',
        textTransform: 'capitalize',
    }
 
    return (
        <>
            <button onClick={handleShow} style={style}>
                login
            </button>

            <Modal show={show} onHide={handleClose} animation={true} backdrop={true} >
                <div className={classes.taps}>
                         <button onClick={()=>setTap(0)} style={{ borderBottom: tap === 0 && '3px solid #000' }} className={classes.login_tap}  >Login</button>
                        <button onClick={()=>setTap(1)}  style={{ borderBottom: tap === 1 && '3px solid #000' }} className={classes.register_tap}>Register</button>
                 </div>

                <Modal.Body>
                    {
                        tap === 0 ?(<Login />):(<Register />)
                    }


                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    {/* <Button variant="secondary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example