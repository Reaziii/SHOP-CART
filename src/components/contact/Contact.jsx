import React, { Component } from 'react'
import './contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-from">
                    <form>
                        <input type="text" name="name" placeholder="Your name" required/>
                        <input type="email" name="email" placeholder="Your email" required/>
                        <textarea className="textarea" name="message" placeholder="Your message" required></textarea>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
