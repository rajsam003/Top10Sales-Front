import React from 'react';
import { isAuthenticated } from '../../auth/index';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import Layout from 'components/Layout';

const Dashboard = () => {

    const { user: { _id, name, email, role } } = isAuthenticated();

    const userLinks = () => {
        return (
            <div className="dashboardCard">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item" >
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`}>Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const userInfo = () => {
        return (
            <div className="dashboardCard mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'}</li>
                </ul>
            </div>
        )
    }

    return (
        <Layout>
            <Container className="adminDashboard">
                    <Row >
                        <Col md="6">
                        {userLinks()}
                        </Col>
                        <Col md="6">
                        {userInfo()}
                        </Col>
                    </Row>
                </Container>
            </Layout>
    );
};

export default Dashboard;