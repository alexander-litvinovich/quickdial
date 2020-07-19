import { h, Component } from "preact";
import "./dial-button.css";

const openTab = (link) => (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: link, active: true });
  return false;
};

const DialButton = ({ label, icon, link }) => {
  return (
    <button className="DialButton" onClick={openTab(link)}>
      <img className="DialButton-icon" src={icon} alt="icon" />
      <span className="DialButton-label">{label}</span>
    </button>
  );
};

export default DialButton;
