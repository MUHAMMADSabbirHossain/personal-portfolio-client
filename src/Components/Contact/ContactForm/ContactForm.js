import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert, CircularProgress, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
    const { register, handleSubmit, reset} = useForm();
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [messageLoading, setMessageLoading] = useState(false);
  const onSubmit = data => {
    setMessageLoading(true);
      emailjs.send("service_z4e78to","template_jk8gkju",data,"user_5J2KF5PBtXsIFEVdAu5UM")
        .then(result => {
            if(result.text){
                setMessageLoading(false);
                setEmailSuccess(true);
                reset();
            }
        })
        .catch(err => {
        })
    };
    return (
       <div className="form-area">
            <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("name")} className="form-input" type="text" name="name" id="standard-basic" label="Your name" variant="standard" required /><br />
            <TextField {...register("email")} className="form-input" type="email" name="email" id="standard-basic" label="Your email" variant="standard" required  /><br />
            <textarea {...register("message")} className="form-input" placeholder="Your Message" name="message" id="" cols="60" rows="8" required ></textarea>
            <button className="form-input send-button">Send</button>
            </form>
            {messageLoading && <CircularProgress style={{textAlign:"center", marginTop:"10px"}} color="secondary" />}
            {emailSuccess && <Alert style={{textAlign:"center", marginTop:"10px", width:"100%"}} severity="success">Message send Sucessfully!</Alert>}
        </div>
       </div>
    );
};

export default ContactForm;