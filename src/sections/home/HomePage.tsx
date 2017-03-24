
import * as React from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';

export function HomePage() {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={10} mdOffset={1}>

                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>This is a sample Web App built with HapiJS, React and TypeScript!</p>
                        <p><Button bsStyle="primary" href="https://www.medium.com/@dupski">Learn more</Button></p>
                    </Jumbotron>

                </Col>
            </Row>
        </Grid>
    );
}