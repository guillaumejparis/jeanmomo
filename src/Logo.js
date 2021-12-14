import "./Logo.css";

function Logo({ text, route = "/" }) {
  return (
    <a href={route} className="Logo">
      {text}
    </a>
  );
}

export default Logo;
