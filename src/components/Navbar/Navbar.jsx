import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/catalog" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>КАТАЛОГ</NavLink>
      <NavLink to="/" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>Главная</NavLink>
      <a href="#offers" className="navbar__link">Акции</a>
      <NavLink to="/delivery" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>Доставка</NavLink>
      <NavLink to="/contacts" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>Контакты</NavLink>
      <NavLink to="/provision" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>Снабжение</NavLink>
      <NavLink to="/photo" className={({isActive}) => `navbar__link ${isActive ? "navbar__link_active" : ""}`}>Фото</NavLink>
    </nav>
  )
}
