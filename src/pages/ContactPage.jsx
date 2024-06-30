import "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Контакти</h1>
      <p>Процедура отримання ліцензій...</p>
      <p>Контактна інформація для правових питань...</p>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Електронна пошта</label>
        <input type="email" name="email" required />
        <label>Повідомлення</label>
        <textarea name="message" required></textarea>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
}

export default ContactPage;
