import React from "react";
import {Link} from 'react-router-dom';

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";



function SectionLetsTalk() {
    return (
        <>
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="10">
                                <h2 className="top10title">Are you searching for the best home appliances? </h2>
                                <h5 className="top10title">
                                    Don't worry. Here we help you out to grab the best home appliances available
                                    with a lot of genuine review and rating research done. 
                                    Below we have categories and listed out the top 10 different home appliances into various 
                                    price and quality segments. 
                                </h5>
                            </Col>
                        </Row>
                        </Container>
                    <Container>
                        
                    <h3 className="top10title" style={{margin:'auto'}}>Check it out !!! </h3>
                        <Row className="example-page">
                            <Col className="ImageBox" md="6">
                                <Link to="/top-10-air-conditioners-in-india">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/products/AC.jpg")}
                                        style={{ width: "100%" }}
                                    />
                                    <p className="icon-info-dark">10 Best Air Conditioners brands in India-2019</p>
                                    </Link>
                            </Col>
                            <Col className="ImageBox" md="6">
                                <Link to="/top-10-refrigrators-in-india">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/products/refrigrators.jpg")}
                                        style={{ width: "100%" }}
                                    />
                                    <p className="icon-info-dark">Refrigrators in best price for sale 2019</p>
                               </Link>
                            </Col>
                        </Row>
                        <Row className="example-page">
                            <Col className="ImageBox" md="6">
                                <Link to="/top-10-washing-machines-in-india">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/products/washing-machine.jpg")}
                                        style={{ width: "100%" }}
                                    />
                                    <p className="icon-info-dark">Top 10 Washing Machines brands to buy-2019</p>
                                </Link>
                            </Col>
                            <Col className="ImageBox" md="6">
                                <Link to="/top-10-kitchen-appliances-in-india">
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/products/kitchen-appliances.jpg")}
                                        style={{ width: "100%" }}
                                    />
                                    <p className="icon-info-dark">Best kitchen appliances in Sale-2019</p>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </>
    );
}

export default SectionLetsTalk;