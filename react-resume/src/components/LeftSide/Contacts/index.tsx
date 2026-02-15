import "./style.css";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-headers">Contacts</div>
      <div className="contacts-detail">
        <ul className="contacts-list">
          <li>
            Email: <a href="mailto:timjobit@gmail.com">timjobit@gmail.com</a>
          </li>
          <li>
            Phone: <a href="tel:+19025806212">+1 (902) 580-6212</a>
          </li>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/97706971"
              target="_blank"
              rel="noopener noreferrer"
            >
              97706971
            </a>
          </li>
          <li>
            GitHub: <a href="https://github.com/amiti-17">amiti-17</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
