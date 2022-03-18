import { React, useState } from 'react';
import classes from './inputs.module.css';
import {  useDispatch } from 'react-redux';
import {insertPost} from '../../redux//index';
import {v4 as uuid} from 'uuid';

 function Inputs() {

    let dispatch = useDispatch();

    const [data, setData] = useState({
        title: '',
        description: ''
    })
         const isValid = (data.title && data.description) != null && (data.title.length &&data.description.length ) > 0;
 
    const handelOnChange = ({target}) => {
        let values = {...data}
           values[target.id]=target.value
           setData(values)
     }

    const handeClick =(e)=>{
        e.preventDefault();
         dispatch(insertPost({id:uuid() , ...data }));

        setData({
            title :'',
            description:'',
        });
         if(!isValid){
             alert('Please enter a valid')
         }
    }

    return (
        <div className={classes.inputs}>

            <form className={classes.form} autoComplete="off">

                <div className={classes.title}>
                    <input
                        type="text"
                        className={classes.input}
                        placeholder='add title...'
                        required='required'
                        value={data.title}
                        id='title'
                        onChange ={(e)=>handelOnChange(e)}
                         />
                </div>
                <div className={classes.post}>
                    <input
                        type="text"
                        className={classes.input}
                        placeholder='add post...'
                        required 
                        value={data.description}
                        id='description'
                        onChange ={(e)=>handelOnChange(e)}
                        />
                </div>
                <div className={classes.submit}>
                    <input type="submit" value='add new post'
                     onClick={(e)=>handeClick( e)} 
                     disabled= {!isValid} style={{cursor:isValid ? "pointer" : "notAllowed"}}
                     />
                </div>

            </form>
        </div>
    );
}

export default Inputs;
