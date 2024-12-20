import React from 'react';

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="#0" className="logo icon-img-60">
              {/* <img src="/assets/imgs/logo-light.png" alt="" /> */}
              Sanjita
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://www.facebook.com/sanjitabhujel12347/">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/bhujelsanjita">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/sanjita-bhujel-b31151242/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/bhujel_sanjita/">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:abc@example.com">
                  <span className="sub-title fz-12">hello@bhujelsanjita.me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
