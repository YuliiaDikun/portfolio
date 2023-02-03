import React from "react";

const Contact = () => {
  return (
    <section name='contact' className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/d55a35ac-12f4-48cd-9a60-05f375e681a7" method='POST' className="flex flex-col w-full md:w-1/2">
            <input className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" type="text" name='name' placeholder="Enter your name" />
            <input className="p-2 bg-transparent border-2 my-4 rounded-md text-white focus:outline-none" type="email" name='mail' placeholder="Enter your e-mail" />
            <textarea name="message" rows="10" placeholder='Enter your message' className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
