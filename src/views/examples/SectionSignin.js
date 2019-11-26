import React, { useState } from "react";
import { Redirect, Link } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../../auth/index';

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
  Alert,
} from "reactstrap";
import Layout from "components/Layout";

// core components

function SectionSignin() {
  const [values, setValues] = useState({
    email: 'ryder@gmail.com',
    password: 'ryder123',
    error: '',
    loading: false,
    redirectToReferrer: false
  })

  const { email, password, error, loading, redirectToReferrer } = values
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true })
    signin({ email, password })
      .then(data => {
        console.log('Error :: '+JSON.stringify(data))
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false, })
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              redirectToReferrer: true
            });
          })
        }
      })
  }

  const showLoading = () => (
    loading && (
      <Alert color="success" style={{ marginTop: '5%' }}>
        Loading. Please wait
</Alert>
    )
  )

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />
    }
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
            {showLoading()}
            <Form className="register-form">
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
                Login
                    </Button>
              {showError()}
            </Form>
            <div style={{ textAlign: 'center' }}>
              <Button
                className="btn-link"
                color="danger"
                style={{ marginTop: '-1%' }}
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Forgot password?
                    </Button>
            </div>
            <div style={{ textAlign: 'center' }} className="mt-3">
              New User..?
                      <div style={{ textAlign: 'center' }}>
                <Button className="btn-link" style={{ marginTop: '-2%', color: 'white' }}>
                  <Link to="/signup" style={{ color: 'white' }}>Click here to Register</Link>
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

  return (
    <Layout>
      {signUpForm()}
      {redirectUser()}
    </Layout>

  );
}

export default SectionSignin;
