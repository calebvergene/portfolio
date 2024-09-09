"use client"

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_ynlxmfo', 'template_0mytrgh', e.currentTarget,'O5tsPcWNgye9iDbG8'

      )
      .then(
        () => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        },
        () => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        }
      );

    // Clear the form after submission
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={sendEmail} className="max-w-3xl w-full mx-6 p-8 bg-bg2/0 shadow-md space-y-6 font-Epilogue mb-10 border-zinc-800 pt-0">
      
      <div className="flex flex-col">
        <label htmlFor="user_name" className="text-white mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          required
          className="p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>
  
      <div className="flex flex-col">
        <label htmlFor="user_email" className="text-white mb-2 ">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          required
          className="p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>
  
      <div className="flex flex-col">
        <label htmlFor="message" className="text-white mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="p-3 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-3xl mt-2 flex space-x-3 ml-2">
            <button className='text-white/70 hover:text-white/90'><FaInstagram /></button>
            <button className='text-white/70 hover:text-white/90'><FaLinkedinIn /></button>
        </div>
        
        <div className="flex justify-end">
            <input
            type="submit"
            value={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
            className="px-6 pt-2.5 pb-2 mt-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
        </div>
        </div>
      {stateMessage && <p className="text-center text-green-400 mt-4">{stateMessage}</p>}
    </form>
  );
  
};

export default ContactForm;
