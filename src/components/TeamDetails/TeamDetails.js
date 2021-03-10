import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
    faCoffee,
    faFlag,
    faFutbol,
    faMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './TeamDetails.css'
library.add(faFacebookF);
const TeamDetails = () => {
    const { teamid } = useParams();
    const [team, setTeam] = useState({});
    console.log(team);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamid}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTeam(data.teams[0]));
    }, [teamid]);
    const {
        strTeam,
        strLeague,
        intFormedYear,
        strCountry,
        strTeamBadge,
        strStadiumThumb,
        strDescriptionEN,
        strFacebook,
        strGender,
        strInstagram,
        strTwitter,
        strWebsite,
        strYoutube,
    } = team;
    return (
        <div>
            <div > 
                <img className="top-background" src={strStadiumThumb} alt="" />
                <img class="team-logo" src={strTeamBadge} alt="" />
            </div>
            <Container>
                <div className="rounded p-3 detail-container mt-4">
                    <h1>{strTeam}</h1>
                    <h6>
                        <FontAwesomeIcon icon={faCoffee} /> Founded:{" "}
                        {intFormedYear}
                    </h6>
                    <h6>
                        <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
                    </h6>
                    <h6>
                        <FontAwesomeIcon icon={faFutbol} /> Sport Type: {}
                    </h6>
                    <h6>
                        <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
                    </h6>
                </div>
                <div className="mt-4">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionEN}</p>
                </div>
                <div>
                    {/* <FontAwesomeIcon icon="fa-facebook-f" /> */}
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;
