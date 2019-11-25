import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { signup } from '../../auth/index';

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert
} from "reactstrap";
import Layout from "components/Layout";

// core components

function SectionSignup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const { name, email, password, error, success } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false })
    signup({ name, email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        } else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true
          })
        }
      })
  }


  const signUpForm = () => (
    <Container>
      <Row>
        <Col className="mx-auto" lg="4" md="6" style={{ margin: '5%' }}>
          <Card className="card-register">
            <h3 className="title mx-auto">Welcome</h3>
            <div className="social-line text-center">
              <Button
                className="btn-neutral btn-just-icon mt-0"
                color="facebook"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon mt-0 ml-1"
                color="google"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon mt-0 ml-1"
                color="twitter"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
            </div>
            <Form className="register-form">
              <label>Name</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-single-02" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Name" type="text" onChange={handleChange('name')} value={name} />
              </InputGroup>
              <label>Email</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-email-85" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Email" type="email" onChange={handleChange('email')} value={email} />
              </InputGroup>
              <label>Password</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-key-25" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Password" type="password" onChange={handleChange('password')} value={password} />
              </InputGroup>
              <Button
                block
                className="btn-round"
                color="danger"
                type="button"
                onClick={clickSubmit}
              >
                Register
                    </Button>
              {showError()}
              {showSuccess()}
            </Form>
            <div style={{ textAlign: 'center' }} className="mt-3">
              If already have an account
                      <div style={{ textAlign: 'center' }}>
                <Button className="btn-link" style={{ marginTop: '-2%', color: 'white' }}>
                  <Link to="/signin" style={{ color: 'white' }}>Click here to login</Link>
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
  const showError = () => (
    <Alert color="danger" style={{ display: error ? "" : "none", marginTop: '4%', marginBottom: 'auto' }}>
      {error}
    </Alert>
  )
  const showSuccess = () => (
    <Alert color="primary" style={{ display: success ? "" : "none", marginTop: '4%', marginBottom: 'auto' }}>
      New account is created. Please<Link to="/signin">Login</Link>
    </Alert>
  )

  return (
    <Layout>
      {signUpForm()}
    </Layout>
  );
}

export default SectionSignup;
