import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_z6hqyrb",       // your service ID
        "template_4475wce",      // your template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "TlI6FQJxAapAS4345"      // your public key
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            iconColor: "#0DFC4B",
            title: "Message sent successfully!",
            text: "Thank you for contacting me. I will get back to you as soon as possible.",
            showConfirmButton: true,
            background: "#191a19",
            color: "#fff",
            confirmButtonColor: "#117911",
            backdrop: `rgba(54, 55, 54,0.4)`,
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again!",
            background: "#191a19",
            color: "#fff",
            confirmButtonColor: "#ff0000",
          });
        }
      );
  };

  return (
    <section name="Contact" className="relative w-full p-4 text-white h-unset">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Contact
          </h2>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />
            <button
              type="submit"
              className="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              {loading ? "Sending..." : "Let's talk"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;