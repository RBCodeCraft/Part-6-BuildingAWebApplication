
import * as React from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { partners } from './partners';

export function PartnersPage() {



    return (
        <Grid>
            <Row>
                <Col xs={12} md={10} mdOffset={1}>

                    <h1>Our Awesome Partners...</h1>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Partner</th>
                                <th>Software</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partners.map((partner, idx) =>
                            <tr key={idx}>
                                <td>{partner.partner}</td>
                                <td>{partner.software}</td>
                                <td><a href={partner.link}>{partner.link}</a></td>
                            </tr>
                            )}
                        </tbody>
                    </table>

                </Col>
            </Row>
        </Grid>
    );
}