import React from 'react';
import IndexNavbar from './Navbars/IndexNavbar';
import DemoFooter from './Footers/DemoFooter';

const Layout = ({children}) =>
    (
        <>
            <IndexNavbar />
            <div
                className="section section-image"
                style={{
                    backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
                }}
            >
                <div >{children}</div>
            </div>{" "}
            <DemoFooter />
        </>
    )
export default Layout;