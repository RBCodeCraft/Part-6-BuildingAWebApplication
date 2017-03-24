
import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export function Error404() {
    return (
        <Grid>
            <Row>
                <Col xs={12} md={8} mdOffset={2}>
                
                    <div className="alert alert-danger text-center" role="alert">
                        <strong>404</strong> Page Not Found :(
                    </div>

                </Col>
            </Row>
        </Grid>
    );
}