import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
    faClock,
    faFlag,
    faFutbol,
    faGlobe,
    faMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import female from "./female.png";
import male from "./male.png";
import "./TeamDetails.css";
library.add(faFacebookF);
const TeamDetails = () => {
    const { teamid } = useParams();
    const [team, setTeam] = useState({});
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

    //conditional imager rendering
    function ShowGender(props) {
        const gender = props.gender;
        if (gender === "male" || gender === "Male") {
            return <img src={male} alt="male" />;
        }
        return <img src={female} alt="female" />;
    }
    return (
        <div>
            <div>
                <img className="top-background" src={strStadiumThumb} alt="" />
                <img className="team-logo" src={strTeamBadge} alt="" />
            </div>
            <Container>
                <div className="row rounded p-3 mt-4 detail-container">
                    <div>
                        <h1>{strTeam}</h1>
                        <h6>
                            <FontAwesomeIcon icon={faClock} /> Founded:{" "}
                            {intFormedYear}
                        </h6>
                        <h6>
                            <FontAwesomeIcon icon={faFlag} /> Country:{" "}
                            {strCountry}
                        </h6>
                        <h6>
                            <FontAwesomeIcon icon={faFutbol} /> League:{" "}
                            {strLeague}
                        </h6>
                        <h6>
                            <FontAwesomeIcon icon={faMars} /> Gender:{" "}
                            {strGender}
                        </h6>
                    </div>
                    <div>{<ShowGender gender={strGender}></ShowGender>}</div>
                </div>
                <div className="mt-4">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="mt-5 text-center social-icon">
                    <a
                        target="_blank"
                        href={`https://${strFacebook}`}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="mx-2 facebook"
                            size="2x"
                            icon={["fab", "facebook-square"]}
                        />
                    </a>
                    <a
                        target="_blank"
                        href={`https://${strInstagram}`}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="mx-2 instagram"
                            size="2x"
                            icon={["fab", "instagram-square"]}
                        />
                    </a>
                    <a
                        target="_blank"
                        href={`https://${strTwitter}`}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="mx-2 twitter"
                            size="2x"
                            icon={["fab", "twitter-square"]}
                        />
                    </a>
                    <a
                        target="_blank"
                        href={`https://${strYoutube}`}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="mx-2 youtube"
                            size="2x"
                            icon={["fab", "youtube-square"]}
                        />
                    </a>
                    <a
                        target="_blank"
                        href={`https://${strWebsite}`}
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="mx-2 website"
                            size="2x"
                            icon={faGlobe}
                        />
                    </a>
                </div>
                <h6 className="mt-2 text-center">
                    all rights reserved&copy;razikul.joni
                </h6>
            </Container>
        </div>
    );
};

export default TeamDetails;
