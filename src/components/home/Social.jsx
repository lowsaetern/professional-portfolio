import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/lbsaetern"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/lowsaetern"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://lowbriansaetern-1.slack.com/archives/C04QTNLENGM"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-slack"></i>
      </a>
    </div>
  );
};

export default Social;
