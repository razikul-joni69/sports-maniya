import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ShowTeams from "../ShowTeams/ShowTeams";
import "./GetTeams.css";

const GetTeams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url =
            "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTeams(data.teams));
    }, []);
    
    return (
        <Container>
            <div className="team-container">
                {teams.map((team) => (
                    <ShowTeams key={team.idTeam} team={team}></ShowTeams>
                ))}
            </div>
        </Container>
    );
};

export default GetTeams;
