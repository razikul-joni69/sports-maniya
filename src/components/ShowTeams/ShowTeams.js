import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./ShowTeams.css";

const ShowTeams = (props) => {
    console.log(props);
    const {
        strSport,
        strTeam,
        strTeamBadge,
    } = props.team;
    
    return (
        <div>
            <Container className="card-container">
                        <div >
                            <Card  className="mt-3 card">
                                <Card.Img className="p-3" variant="top" src={strTeamBadge} />
                                <Card.Body className="text-center">
                                    <Card.Title>{strTeam}</Card.Title>
                                    <Card.Text>
                                        {strSport}
                                    </Card.Text>
                                    <Button variant="primary">
                                        Explore{" "}
                                        <FontAwesomeIcon
                                            icon={faArrowCircleRight}
                                        />
                                    </Button>{" "}
                                </Card.Body>
                            </Card>
                        </div>
            </Container>
        </div>
    );
};

export default ShowTeams;
