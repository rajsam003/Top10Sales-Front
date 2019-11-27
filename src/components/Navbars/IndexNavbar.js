import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import { Link, withRouter } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
import { isAuthenticated } from "auth";
import { signout } from "auth";

const IndexNavbar = ({ history }) => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarHomeColor, setNavbarHomeColor] = React.useState("navbarHomeFont");
  const [navbarFontColor, setNavbarFontColor] = React.useState("navbarLink");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    console.log('toggleNavbarCollapse')
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setNavbarFontColor("navbarLinkDark");
        setNavbarHomeColor("navbarHomeFontDark");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarFontColor("navbarLink");
        setNavbarHomeColor("navbarHomeFont");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <Link to="/top10refrigratorsinindia">
            <div className={classnames(navbarHomeColor)}>
              Top 10 Sales
                </div>
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link to="/top-10-air-conditioners-in-india">
                <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                  Air Conditioners
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/top-10-washing-machines-in-india">
                <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                  Washing Machines
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/top-10-refrigrators-in-india">
                <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                  Refrigrators
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/top-10-kitchen-appliances-in-india">
                <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                  Kitchen Appliances
                </div>
              </Link>
            </NavItem>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem> */}
            {!isAuthenticated() && (
              <NavItem>
                <Link to="/signup">
                  <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                    <i
                      aria-hidden={true}
                      className="nc-icon nc-single-02"
                      style={{ fontSize: 'initial', marginLeft: '-2%' }}
                    />{"    "}
                    <span className="d-lg-none">Account</span>
                  </div>
                </Link>
              </NavItem>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
              <NavItem>
                <Link to="/user/dashboard">
                  <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                    <i
                      aria-hidden={true}
                      className="nc-icon nc-single-02"
                      style={{ fontSize: 'initial', marginLeft: '-2%' }}
                    />{"    "}
                    <span className="d-lg-none">Profile</span>
                  </div>
                </Link>
              </NavItem>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
              <NavItem>
                <Link to="/admin/dashboard">
                  <div onClick={toggleNavbarCollapse} className={classnames(navbarFontColor)}>
                    <i
                      aria-hidden={true}
                      className="nc-icon nc-single-02"
                      style={{ fontSize: 'initial', marginLeft: '-2%' }}
                    />{"    "}
                    <span className="d-lg-none">Profile</span>
                  </div>
                </Link>
              </NavItem>
            )}
            {isAuthenticated() && (
              <NavItem>
                <span onClick={toggleNavbarCollapse} className=" nav-link signoutButton" 
                  onClick={() => signout(() => {
                    history.push('/');
                  })}>Signout</span>
              </NavItem>
            )}

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(IndexNavbar);
