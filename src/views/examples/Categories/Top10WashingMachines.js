import React, { useState, useEffect } from 'react';
import { list } from '../apiUser';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import SectionCarousel from "views/index-sections/SectionCarousel";
import ProductCard from "views/index-sections/ProductCard";

const Top10WashingMachines = () => {
  const [data, setData] = useState({
    results: [],
    showProduct: false
});

const { results, showProduct } = data;

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const searchData = () => {
        list({search: 'Washing Machines' || undefined, category:'5dd247ed9af6e222d0b3d337'})
        .then(response => {
            if(response.error){
                console.log(response.error)
            }else {
              if (response === undefined || response.length === 0) {
                setData({ ...data, results: response, showProduct: false })
              } else {
                setData({ ...data, results: response, showProduct: true })
              }
            }
          })
      }

  useEffect(() => {
    searchData()
}, [])

  const fridgeContent = () => (
    <div className="profile-content">
      <Container>
        <div className="owner">
          {/* <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              />
            </div> */}
          <div className="name">
            <h2 className="top10title">
              Best Washing Machines In India 2019 – Review’s & Buyer’s Guide <br />
            </h2>
          </div>
        </div>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="16">
            <h5 className="top10title" style={{ marginLeft: '3%', marginRight: '3%' }}>
              Want to buy a new washing machine but wondering what to buy. Here we give you the in depth
              review and help you out to buy the best suitable washing machine available in India.
              With the detailed review mentioned you can conveniently make selection. Amazon alone
              has about 2000 washing machines of various size, capacity and brands listed.
              <br />
              <br />
              Washing machines are a must-have nowadays in every modern home. It is an expensive purchase.
              If you choose wisely then you will praise it for years and if you choose terribly then you
              have no other choice than cursing it.

             </h5>
          </Col>
        </Row>
      </Container>
    </div>
  )

  const items = [
    {
      src: require("assets/img/products/WM-wall-3.jpg"),
      // altText: "Whirlpool",
      // caption: "Whirlpool"
    },
    {
      src: require("assets/img/products/WM-wall-2.jpg"),
      // altText: "Samsung",
      // caption: "Samsung"
    },
    {
      src: require("assets/img/products/WM-wall-1.jpg"),
      // altText: "Godrej",
      // caption: "Godrej"
    }
  ];

  const showProductAvailable = () => {
    if (showProduct) {
      return (
        <div>
          {fridgeContent()}
          <ProductCard products={results} loadProduct={searchData} />
        </div>
      )
    } else {
      return (
        <div className="showNoProduct">
          <span>Currently products unavailable</span>
        </div>
      )
    }
  }

  return (
    <>
      <IndexNavbar />
      <SectionCarousel items={items}/>
      {showProductAvailable()}
      <DemoFooter />
    </>
  );
}

export default Top10WashingMachines;
