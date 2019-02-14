import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mb-lg-0">

              </div>
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">About Game Arena</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-facebook-f"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>

            </div>
          </div>

        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>Copyright &copy; Game Arena 2019</small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
