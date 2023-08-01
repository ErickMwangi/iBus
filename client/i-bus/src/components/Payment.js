import React, { useState } from 'react';
import './Payment.css'

function Payment(){
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [idOrPassportNumber, setidOrPassportNumber] = useState('')
    const [nationality, setNationality] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        
        console.log('Full Name:', fullName)
        console.log('Phone Number:', phoneNumber)
        console.log('ID or Passport Number:', idOrPassportNumber);
        console.log('Nationality:', nationality);

        setFullName('')
        setPhoneNumber('')
        setidOrPassportNumber('')
        setNationality('')
    }

    
    return(
        <div className='payment-div'>
         <img className='payment-page-image' src='images/bus-payment-page-image.png' alt='bus-payment-image'/> 
         <div className='form-div'>
        <form onSubmit={handleFormSubmit}>
            <div className='form-section'>
                <label>
                    Full name: <br />
                    <input
                    placeholder='Full Name'
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    style={{
                        '::placeholder': { // Internal CSS for the placeholder text color
                          color: 'grey',
                        },
                        color: 'blue', // Optional, you can set the text color of the input itself
                      }}
                    />
                </label>
            </div>
            <div className='form-section'>
                <label>
                Phone Number: <br />
                <input 
                placeholder='Phone Number'
                type='tel'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
                </label>
            </div>
            <div className='form-section'>
                <label>
                ID or Passport:  <br />
                <input 
                placeholder='ID or Passport'
                type='text'
                value={idOrPassportNumber}
                onChange={(e) => setidOrPassportNumber(e.target.value)}
                required
                />
                </label>
            </div>
            <div className='form-section'>
                <label>
                Nationality:  <br />
                <input
                placeholder='Nationality'
                type='text'
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
                />
                </label>
            </div>

            <div className='pay-with-mpesa'>
            Pay with   <img className='mpesa-image' src='images/2560px-M-PESA_LOGO-01.svg.png' alt='bus-payment-image'/> 
            </div>
            <div className='stk-push'>
            An stk push will be sent on your <br /> mobile number Before you proceed, <br />please confirm you have enough money <br /> in your M-Pesa.
            </div>
            <button className='submit-pay-button' type='submit'>SUBMIT AND PAY</button>
            
        </form>
        </div>
       
        </div>
         
    )

}

export default Payment