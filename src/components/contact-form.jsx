import { useEffect, useState } from "react";
import "../style/components.css"
import emailjs from '@emailjs/browser';


function Message ({ msg, setMsg }) {

    useEffect(() => {
        setTimeout(() => {
            setMsg({
                info: "",
                status: ""
            })
        }, 800);
    }, [])

    return (
        <div className="err-msg" data-status={msg.status}>
            {msg.info}

            <div className="msg-load" />
        </div>
    )
}

export function ContactForm ({  setContactOpen }) {
    
    const [ contact, setContact ] = useState({
        from: "",
        message: ""
    })

    const [ msg, setMsg ] = useState({
        info: "",
        status: ""
    })

    const [ loading, setLoading ] = useState(false)


    function handleSubmit (e) {
        e.preventDefault();

        if (!contact.from || !contact.message) {
            setMsg({
                info: "Email and Message cannot be empty",
                status: "failed"
            })
            return;
        }

        setLoading(true)

        emailjs
            .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, contact, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                (response) => {
                    setMsg({ info: "Success", status: "success" })
                    setTimeout(() => {
                        setContactOpen(false)
                    }, 1000)
                },
                (err) => {
                    setLoading(false)
                    setMsg({ info: "Error, Try Again", status: "failed" })
                },
            );

        
    }

    function handleChange (e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    

    return (
        <div className="contact-form-container">
            <div className="form-wrapper">
                <div className="contact-form-header">
                    <span onClick={() => setContactOpen(false)} > {"<"}</span>

                    <span>Contact Us</span>
                </div>

                <form onSubmit={handleSubmit} className="contact-form-main">
                    <input type="email" placeholder="Email Address" name="from" value={contact.email} onChange={handleChange} required />
                    <textarea placeholder="Message" name="message" value={contact.message} onChange={handleChange} required />
                    
                    <button className="button" type='submit' disabled={loading}>
                        Send
                    </button>
                </form>

                {
                    msg.info
                    ?
                    <Message msg={msg} setMsg={setMsg} />
                    :
                    <></>
                }
            </div>
            

            <div className="contact-form-blur"/>
        </div>
    )
}