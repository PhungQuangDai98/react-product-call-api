import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          phungquangdai98@gmail.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
