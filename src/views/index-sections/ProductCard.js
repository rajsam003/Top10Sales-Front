import React from "react";
import { deleteProduct } from '../examples/apiAdmin';

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";
import ShowImage from "./ShowImage";
import { isAuthenticated } from "auth";

const ProductCard = ({ products, loadProduct }) => {

    const { user, token } = isAuthenticated();

    const removeProduct = productId => {
        deleteProduct(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                loadProduct()
            }
        })
    }

    return (
        <>
            <div className="text-center" style={{ marginBottom: '3%' }}>
                <Container>
                    {/* <div className="productDescription">
                        <h3>1. Haier 320 L 3 Star Frost Free Double Door Refrigerator</h3>
                        <Row className="example-page">
                            <Col md="5">
                                <div style={{textAlign:'center'}}>
                                    <img
                                        alt="..."
                                        className="img-rounded img-responsive"
                                        src={require("assets/img/products/haier-320.jpg")}
                                        style={{ width: "100%", marginTop: '10%' }}
                                    />
                                </div>
                            </Col>
                            <Col md="7">
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{padding:'2%', fontSize:'1rem'}}>
                                        When you compare the refrigerators apple-to-apple,
                                        this refrigerator from Haier definitely is one of the most affordable
                                        option available. A noteworthy feature that makes it different from
                                        the other refrigerators is the easy access it offers as the freezer is
                                        at the bottom—making it one of the best options for vegetarians and families
                                        with elder members, who do not use freezer extensively.
                                    </p>
                                    <div className="specs">
                                    <h5 >Specifications:</h5>
                                    <ul>
                                        <li>
                                            Frost Free, Double Door: Auto defrost to stop ice-build up
                                    </li>
                                        <li>
                                            Capacity 320 L: Suitable for families with 3-4 members
                                    </li>
                                        <li>
                                            Warranty: 1 year on product, 10 years on compressor
                                    </li>
                                    </ul>
                                    </div>
                                    <div className="prosCons">
                                        <div className="pros">
                                            <h5>Pros:</h5>
                                            <ul>
                                                <li>
                                                    Frost-free
                                                </li>
                                                <li>
                                                    Avoids hassle of bending every time to remove food items
                                                </li>
                                                <li>
                                                    Auto-defrost
                                                </li>
                                                <li>
                                                    Huge storage space
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cons">
                                            <h5>Cons:</h5>
                                            <ul>
                                                <li>
                                                    Installation takes time if you leave in a rural area.
                                                    But, for urban areas installation is very quick
                                                </li>
                                                <li>
                                                    There is no lighting inside the bottom freezer compartment.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                        <div style={{textAlign:'center'}}>
                        <Button color="danger" outline size="lg" type="button">
                            Check Price on Amazon
                         </Button>
                         </div>
                    </div>
                    <hr /> */}
                    {products.map((product, index) => (
                        <div key={index}>
                            <div className="productDescription">
                                <h3>{index + 1}{". "}{product.name}</h3>
                                <Row className="example-page">
                                    <Col md="5">
                                        <ShowImage item={product} url="product" />
                                    </Col>
                                    <Col md="7">
                                        <div style={{ textAlign: 'left' }}>
                                            <p style={{ padding: '2%', fontSize: '1rem' }}>
                                                {product.description}
                                            </p>
                                            <div className="specs">
                                                <h5 >Specifications:</h5>
                                                <ul>
                                                    {product.specifications.map((spec, i) => (
                                                        <li key={i}>
                                                            {spec}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="prosCons">
                                                <div className="pros">
                                                    <h5>Pros:</h5>
                                                    <ul>
                                                        {product.pros.map((pro, i) => (
                                                            <li key={i}>
                                                                {pro}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="cons">
                                                    <h5>Cons:</h5>
                                                    <ul>
                                                        {product.cons.map((con, i) => (
                                                            <li key={i}>
                                                                {con}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                                <div style={{ textAlign: 'center' }}>
                                    <Button color="danger" outline size="lg" type="button" style={{ margin: '5px' }}>
                                        Check Price
                                    </Button>
                                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                        <>
                                            <Button onClick={() => removeProduct(product._id)} color="danger" outline size="lg" type="button" style={{ margin: '5px' }}>
                                                Delete Product
                                            </Button>
                                            <Button color="danger" outline size="lg" type="button" style={{ margin: '5px' }}>
                                                Update Product
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default ProductCard;