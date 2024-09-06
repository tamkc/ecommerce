import React from "react";

const Form = () => {
  return (
    <div id="contact" className="max-w-[1040px]">
      <form
        action="https://getform.io/f/qblokvna"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2"> </label>
            Name
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2"></label>
            Phone Number
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2"> </label>
          Email
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2"> </label>
          Subject
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Message </label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows={10}
            name="message"
          />
        </div>
        <button className="bg-[#001b5e] rounded-lg w-full p-4 text-gray-100 mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
