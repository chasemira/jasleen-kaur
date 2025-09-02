import React from "react";

const Footer = () => {
  return (
    <div className="footer-background w-full h-60 relative flex items-end justify-center pb-12">
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="footer-menu-btn"
      >
        View my Resume
      </a>
    </div>
  );
};

export default Footer;