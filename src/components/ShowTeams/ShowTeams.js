import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShowTeams.css";

const ShowTeams = (props) => {
    console.log(props);
    const { strSport, strTeam, strTeamBadge, idTeam } = props.team;

    return (
        <div >
            <Container className="card-container">
                <div>
                    <Card className="mt-3 card">
                        <Card.Img
                            className="px-3 pt-3"
                            variant="top"
                            src={strTeamBadge}
                        />
                        <Card.Body className="text-center">
                            <Card.Title className="text-primary">{strTeam}</Card.Title>
                            <Card.Text className="text-primary">{strSport}</Card.Text>
                            <Link to={`/teamdetails/${idTeam}`}>
                                <Button
                                    className="details-btn"
                                    variant="primary"
                                >
                                    Explore{" "}
                                    <FontAwesomeIcon
                                        icon={faArrowCircleRight}
                                    />
                                </Button>{" "}
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default ShowTeams;
