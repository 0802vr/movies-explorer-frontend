import "./NavAuth.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
 
const NavAuth = () => {
  const [isNav, setNav] = useState(false);

  const toggleNav = () => setNav(!isNav);

  return (
    <nav className="nav">
      <button
        className="nav__buttom_menu"
        type="button"
        onClick={toggleNav}
      ></button>

      <div className={`nav__box ${isNav ? "nav__box_visible" : ""}`}>
        <div className="nav__sidebar">
          <div className="nav__conteiner">
            <button
              className="nav__button-close"
              type="button"
              onClick={toggleNav}
            ></button>
            <ul className="nav__list">
            <li className="nav__item nav__item_burger">
                <NavLink to="/" className="nav__link" onClick={toggleNav}>
                  Главная
                </NavLink>
              </li>
             <li className="nav__item">
                <NavLink to="/movies" className="nav__link nav__link_type_bold nav__link_type_decorate" onClick={toggleNav}>
                  Фильмы
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/saved-movies" className="nav__link" onClick={toggleNav}>
                  Сохранённые фильмы
                </NavLink>
              </li>
              <li className="nav__item">
              <NavLink to="/profile" className="nav__link nav__link_profile" onClick={toggleNav}>
              <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.2" x="1" y="1" width="98" height="30" rx="15" stroke="#AAAAAA" stroke-width="2"/>
<path d="M32.9787 21L33.9134 18.3054H37.8906L38.8203 21H40.451L36.7869 10.8182H35.0121L31.348 21H32.9787ZM34.3608 17.0128L35.8622 12.6676H35.9418L37.4432 17.0128H34.3608ZM41.802 21H43.2885V17.9474H44.253L46.5549 21H48.3993L45.4064 17.0774L48.3645 13.3636H46.525L44.0044 16.5653H43.2885V13.3636H41.802V21ZM49.554 21H51.0405V17.9474H52.005L54.3068 21H56.1513L53.1584 17.0774L56.1165 13.3636H54.277L51.7564 16.5653H51.0405V13.3636H49.554V21ZM59.5282 21.169C60.791 21.169 61.502 20.5277 61.7853 19.956H61.845V21H63.2967V15.929C63.2967 13.7067 61.5467 13.2642 60.3336 13.2642C58.9515 13.2642 57.6788 13.821 57.1816 15.2131L58.5787 15.5312C58.7974 14.9893 59.3542 14.4673 60.3535 14.4673C61.313 14.4673 61.8052 14.9695 61.8052 15.8345V15.8693C61.8052 16.4112 61.2484 16.4013 59.8762 16.5604C58.4295 16.7294 56.948 17.1072 56.948 18.8423C56.948 20.3438 58.0765 21.169 59.5282 21.169ZM59.8514 19.9759C59.0112 19.9759 58.4047 19.598 58.4047 18.8622C58.4047 18.0668 59.1106 17.7834 59.9707 17.669C60.4529 17.6044 61.5964 17.4751 61.8102 17.2614V18.2457C61.8102 19.1506 61.0893 19.9759 59.8514 19.9759ZM65.9428 23.8438C67.1708 23.8438 67.9513 23.2024 68.3888 22.0192L71.5458 13.3786L69.94 13.3636L68.006 19.2898H67.9265L65.9925 13.3636H64.4016L67.1957 21.0994L67.0117 21.6065C66.6339 22.5959 66.1019 22.6854 65.2866 22.4616L64.9286 23.6797C65.1076 23.7642 65.4954 23.8438 65.9428 23.8438ZM74.4032 13.3636H72.9466V21H74.4032V17.8281H77.7093V21H79.161V13.3636H77.7093V16.5405H74.4032V13.3636ZM80.2026 14.6463H82.7033V21H84.155V14.6463H86.6458V13.3636H80.2026V14.6463Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 13C20 14.1046 19.1046 15 18 15C16.8954 15 16 14.1046 16 13C16 11.8954 16.8954 11 18 11C19.1046 11 20 11.8954 20 13ZM22 13C22 15.2091 20.2091 17 18 17C15.7909 17 14 15.2091 14 13C14 10.7909 15.7909 9 18 9C20.2091 9 22 10.7909 22 13ZM16 18C13.7909 18 12 19.7909 12 22V23H14V22C14 20.8954 14.8954 20 16 20H20C21.1046 20 22 20.8954 22 22V23H24V22C24 19.7909 22.2091 18 20 18H16Z" fill="black"/>
</svg>
            </NavLink>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavAuth;
