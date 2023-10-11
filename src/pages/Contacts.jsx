import socials from "../utils/socials";
import { Link } from "react-router-dom";

// const { gitHub } = socials[0];
// const { linkedIn } = socials[1];
// const { twitter } = socials[2];

const [{ gitHub }, { linkedIn }, { twitter }] = socials;

const Contacts = () => {
  return (
    <main>
      <div className="grid">
        <section className="contacts">
          <div className="contacts__container">
            <h1>Contact me .</h1>
            <p>Feel free to contact me for any project .</p>
            <form
              method="POST"
              className="form"
              action={import.meta.env.VITE_FORM_SUBMIT}
            >
              <input
                placeholder="Name"
                name="_subject"
                type="hidden"
                value="New email from portfolio"
              />
              <input
                placeholder="Name"
                name="name"
                type="text"
                autoComplete="off"
                required
              />
              <input
                placeholder="Email"
                name="email"
                type="email"
                autoComplete="off"
                required
              />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/contacts"
              />
              <textarea required placeholder="Your Message" name="text" />
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
        </section>
        <section className="socials">
          <h1>Socials</h1>
          <p>
            I am currently available to work on any web development project
            full-time. Please feel free to reach out to me on social media or by
            email.
          </p>
          <div className="socials__container">
            <div>
              <Link to={gitHub.path}>{gitHub.icon}</Link>
            </div>
            <div>
              <Link to={linkedIn.path}>{linkedIn.icon}</Link>
            </div>
            <div>
              <Link to={twitter.path}>{twitter.icon}</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Contacts;
