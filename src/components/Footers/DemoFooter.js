import React from "react";

// reactstrap components
import { Row, Container, Col } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
        <Col className="ml-auto mr-auto" md="12">
          <p className="demoFooterParagraph"> 
          Top10sales.in participates in the Amazon Associates Associates Program, 
          an affiliate advertising program designed to provide a means for sites to 
          earn commissions by linking to Amazon. This means that whenever you buy a 
          product on Amazon from a link on here, we get a small percentage of its price.
          </p>
          <br />
          </Col>
        </Row>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.top10sales.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  © Top10sales.in
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            {/* <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span> */}
            <nav className="footer-nav">
            <ul className="footer-things">
              <li>
                <a
                  href="https://www.top10sales.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dsiclaimer
                </a>
              </li> */}
            </ul>
          </nav>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
