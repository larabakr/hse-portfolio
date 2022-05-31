import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <h1>Contact</h1>
      <p>
        For professional inquiries, please complete the form below or contact me
        at <a href="mailto:husseinmo.va@gmail.com">husseinmo.va@gmail.com</a> I look forward to working with you!
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="message" placeholder="Message..." required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
