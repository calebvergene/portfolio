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
    <form onSubmit={sendEmail} className="max-w-3xl w-full mx-6 p-8 bg-bg2/0 shadow-md space-y-6 font-Epilogue mt-20 mb-10 border-zinc-800 pt-14">
      <h2 className="text-4xl flex row font-semibold text-white mb-7"><span className='pb-2 pt-1.5 pr-1.5 pl-1 mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg> </span>Contact Me!
      </h2>
      
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
