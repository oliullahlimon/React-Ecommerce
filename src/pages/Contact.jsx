const Contact = () => {
  return (
    <section className="main-container">
      <h2 className="text-4xl mb-12 font-semibold text-center">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3261560367378!2d90.37695654043073!3d23.806998378720767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72bd61eac7f%3A0xbd333740bce64fd6!2sHazi%20Ali%20Hossain%20High%20School!5e0!3m2!1sen!2sbd!4v1742030248641!5m2!1sen!2sbd"
        className="w-full h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="mt-14 max-w-2xl mx-auto">
        <form
          action="https://formspree.io/f/xkgjggpy"
          method="POST"
          className="flex flex-col gap-8"
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
            required
            className="w-full p-4 border border-gray-300 shadow-lg"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            className="w-full p-4 border border-gray-300 shadow-lg"
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            autoComplete="off"
            required
            placeholder="Enter you message"
            className="w-full p-4 border border-gray-300 shadow-lg"
          ></textarea>

          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
