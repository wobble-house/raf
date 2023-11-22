"use client";
import React, { useId, useState } from 'react'
import Link from 'next/link'

export function ContactForm(){
    const id = useId();
    // States for contact form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
    //   Form validation state
    const [errors, setErrors] = useState({});
  
    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Contact Me");
  
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);
  
    // Validation check method
    const handleValidation = () => {
      let tempErrors = {};
      let isValid = true;
  
      if (name.length <= 0) {
        tempErrors["name"] = true;
        isValid = false;
      }
      if (email.length <= 0) {
        tempErrors["email"] = true;
        isValid = false;
      }

      if (message.length <= 0) {
        tempErrors["message"] = true;
        isValid = false;
      }
  
      setErrors({ ...tempErrors });
      console.log("errors", errors);
      return isValid;
    };
    
    //   Handling form submit
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let isValidForm = handleValidation();
  
      if (isValidForm) {
       setButtonText("sending");
        const res = await fetch("./api/sendgrid", {
          body: JSON.stringify({
            email: email,
            name: name,
            phone: phone,
            message: message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
  
        const { error } = await res.json();
        if (error) {
          console.log(error);
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
          setButtonText("Oops! There was an issue..");
          return;
        };
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Sent!");
      }
      console.log(name, email, phone, message);
    };
    return (
      <section className='relative z-80 w-full md:w-[280px] px-6'>
              <form
              className="">

            <div className="flex flex-col gap-2 py-2 ">
                <input id={id} type="text" placeholder="Name*" onChange={e => setName(e.target.value)} name="name" className="w-full focus:border-none focus:ring-accent bg-background" />
            <hr className="border-primary border-1"/>
            </div>

            <div className="flex flex-col gap-2 py-2">
                <input id={id} type="email" placeholder="Email*" onChange={e => setEmail(e.target.value)} name="email" className="w-full focus:border-none focus:ring-accent bg-background" />
            <hr className="border-primary border-1"/>
            </div>

            <div className="flex flex-col gap-2 py-2">  
        <input id={id} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" onChange={e => setPhone(e.target.value)} name="phone" className="w-full focus:border-none focus:ring-accent bg-background" />
        <hr className="border-primary border-1"/>
            </div>


        <div className="flex flex-col gap-2 py-2">
        <textarea id={id} placeholder="Your Message*" onChange={e => setMessage(e.target.value)} name="message" rows={6} className="w-full focus:border-none focus:ring-accent bg-background"></textarea>         
        <hr className="border-primary border-1"/>
            </div>

        <div className={` ${!(message || phone || email || name) ? "text-center py-10": "animate-pulse text-center py-10"}`}>
          <button 
              className="uppercase border-2 border-primary rounded-full px-10 py-2 mx-auto bg-background hover:scale-110 active:scale-105"
              onClick={handleSubmit}>
                <h3 className="hover:text-primary active:text-secondary">
              {buttonText}
              </h3>
          </button>
        </div>  
        { showFailureMessage === true && (<div className="relative"><div className="max-w-[280px] text-center">Error! Please try again. If you continue to encounter problems, please contact <Link href="mailto:marca@ccfil.com">marca@ccfil.com</Link></div></div>) }
     { showSuccessMessage === true && (<div className="relative"><h4 className="max-w-[280px] text-center">Please allow up to 48 hours for us to review your message. Thanks!</h4></div>) }
      </form>
      </section>
    )
  }