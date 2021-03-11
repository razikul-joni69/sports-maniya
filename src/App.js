import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GetTeams from "./components/GetTeams/GetTeams";
import NotFound from "./components/NotFound/NotFound";
import TeamDetails from "./components/TeamDetails/TeamDetails";

library.add(fab, faCheckSquare);

function App() {
    return (
        <div className="App-header">
            <Router>
                <Switch>
                    <Route path="/home">
                        <GetTeams> </GetTeams>
                    </Route>
                    <Route path="/teamdetails/:teamid">
                        <TeamDetails></TeamDetails>
                    </Route>
                    <Route exact path="/">
                        <GetTeams></GetTeams>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
