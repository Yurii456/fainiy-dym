import { useState } from "react";
import emailjs from "emailjs-com";
// import { EMAIL_JS_CLIENT_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_SERVICE_ID } from '../config'

const initialState = {
  name: "",
  email: "",
  message: "",
};
const emailjsConfig = {
  serviceId: process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
  clientId: process.env.REACT_APP_EMAIL_JS_CLIENT_ID,
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.clientId
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("Повідомлення відправлено!");
          }
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Зворотній зв'язок</h2>
                <p>
                  Заповніть форму нижче, щоб надіслати нам електронний лист, і
                  ми зв’яжемося з вами якомога швидше.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control contact-input"
                        placeholder="Ім'я"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        className="form-control contact-input"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control contact-input"
                    rows="4"
                    value={message}
                    placeholder="Повідомлення"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Відправити повідомлення
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Контактна інформація</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Адреса
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Телефон
                </span>
                <a href={`tel:${props.data?.phone}`} className="white-link">
                  {props.data ? props.data.phone : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <a href={`mailto:${props.data?.email}`} className="white-link">
                  {props.data ? props.data.email : "loading"}
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};
