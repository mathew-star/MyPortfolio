// Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl text-accent font-bold mb-8">Contact Me</h1>
      <div className="max-w-lg mx-auto text-white">
        <div className="mb-10">
          <h1 className='text-left text-2xl mb-4 text-accent'>Contact Info .</h1>
          <p className="block text-lg font-medium  mb-1">Phone: +91-6282973743</p>
          <p className="block text-lg font-medium  mb-1">Email: mathewjosef41@gmail.com</p>
        </div>

        <h1 className='text-left text-accent text-2xl mb-5'>Keep in Touch .</h1>
        <form
          action="https://formspree.io/f/xbjvodke"
          method="POST"
          className="mb-4"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-slate-800 rounded-md shadow-sm focus:border-accent focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full bg-slate-800 rounded-md shadow-sm focus:border-accent focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-200 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-slate-800 rounded-md shadow-sm focus:border-accent focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-accent text-black rounded-full hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-dark focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
