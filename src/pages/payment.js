import React , { useState } from 'react' ;
import Cards from 'react-credit-cards'
import './payment.css'
import 'react-credit-cards/es/styles-compiled.css'
import Layout from 'antd/lib/layout/layout';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));
 
function SetCard(){

    const [number , setNumber ] = useState('')
    const [name , setName ] = useState('')
    const [expiry , setExpiry ] = useState('')
    const [cvc , setCvc ] = useState('')
    const [focus , setFocus ] = useState('')

    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Select One!');
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };

    const clear = (event)=>{
      setName("");
      setNumber("");
      setExpiry("");
      setCvc("");
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === 'post') {
        setHelperText('Rate of postage is Rs.90 for the first 250g');
        setError(false);
      } else if (value === 'pronto') {
        setHelperText('The charge per a parcel is 400 rupees');
        setError(false);
      } else if (value === 'domex') {
        setHelperText('The charge per a parcel is 350 rupees');
        setError(false);
      }else {
          setHelperText('Please Select a Delivery Method !');
          setError(true);
      }

    };
 
    return (  
       
            <div className='back' >

                <Layout className='lay' >
                    
                    <form  id ='form-details'>
                      
                        <br/><br/>
                        <h1 className='text' > ENTER CARD DETAILS </h1>

                            <input className = 'txt1' id = 'name' 
                                type = 'text'
                                name = 'name'
                                placeholder= 'Name'
                                value = {name}
                                onChange={e=> setName(e.target.value)}
                                onFocus= {e=> setFocus(e.target.name)}
                                /><br/>

                            <input className = 'txt1' id = 'number'
                                type = 'tel'
                                name = 'number'
                                placeholder= 'Card Number'
                                value = {number}
                                onChange={e=> setNumber(e.target.value)}
                                onFocus= {e=> setFocus(e.target.name)}
                                /><br/>

                            <input className = 'txt' id='expiry'
                                type = 'tel'
                                name = 'expiry'
                                placeholder= 'MM/YY'
                                value = {expiry}
                                onChange={e=> setExpiry(e.target.value)}
                                onFocus= {e=> setFocus(e.target.name)}
                                />

                            <input className = 'txt'
                                type = 'tel'
                                name = 'cvc'
                                placeholder= 'CVC'
                                value = {cvc}
                                onChange={e=> setCvc(e.target.value)}
                                onFocus= {e=> setFocus(e.target.name)}
                                /><br/><br/>

                                <Cards className = 'card'
                                number={number}
                                name ={name}
                                xpiry = {expiry}
                                cvc = {cvc}
                                focused = {focus}
                            />

                            <br/>
                                <Button type="submit" variant="outlined" color="primary" className='btn' onClick={clear}>
                                        Re Enter
                                </Button>

                        </form>

                            <FormControl component="fieldset" error={error} className={classes.formControl}>
                                <h3 className='text'>SELECT DELIVERY METHOD</h3>
                                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                                        <FormControlLabel value="post" control={<Radio />} label="Sri Lanka Post, 2-5 days" />
                                        <FormControlLabel value="pronto" control={<Radio />} label="Pronto Laka, 3-5 days" />
                                        <FormControlLabel value="domex" control={<Radio />} label="Domex Courier, 4-7 days" />
                                    </RadioGroup>
                                <FormHelperText>{helperText}</FormHelperText>
                                <br/><br/>
                                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
                                        CHECK DETAILS
                                </Button>
                            
                                <Button type="submit" variant="outlined" color="primary" className={classes.button} >
                                        Submit
                                </Button>

                            </FormControl>

                </Layout>

            </div>

        );

}

export default SetCard ;