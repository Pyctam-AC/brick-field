import "./Logo.scss";
import brick from "./images/brick.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={brick} className="logo__brick1" />
      <img src={brick} className="logo__brick2" />
      <img src={brick} className="logo__brick3" />
      <img src={brick} className="logo__brick4" />
      <img src={brick} className="logo__brick5" />
      <img src={brick} className="logo__brick6" />
      <img src={brick} className="logo__brick7" />
      <img src={brick} className="logo__brick8" />
      <img src={brick} className="logo__brick9" />
      <img src={brick} className="logo__brick10" />
    </div>
  );
};

export default Logo;
