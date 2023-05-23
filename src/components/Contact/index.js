import "../Contact/index.scss";

const Contact = () => {
  return (
    <div className="container-contacts">
      <div className="email-me">
        <h1>Contact Me .</h1>
        <p>Feel free to contact me for any project .</p>
        <form method="POST" className="form" action={process.env.FORM_SUBMIT}>
          <input
            placeholder="Name"
            name="_subject"
            type="hidden"
            value="New email from portfolio"
          />
          <input placeholder="Name" name="name" type="text" />
          <input placeholder="Email" name="email" type="email" required />
          <input type="hidden" name="_next" value="https://google.com" />
          <textarea required placeholder="Your Message" name="text" />
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
