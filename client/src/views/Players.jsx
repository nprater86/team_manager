import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';


const Players = props => {
    const { players, createPlayer, removeFromDom } = props;

    return (
        <div>
            <ul className="nav mb-3">
                <li className="nav-item"><Link to="/players/list" className="nav-link">List</Link></li>
                <li className="nav-item"><Link to="/players/addplayer" className="nav-link">Add Player</Link></li>
            </ul>
            <Switch>
                <Route path="/players/list">
                    <PlayerList players={ players } removeFromDom={ removeFromDom } />
                </Route>
                <Route path="/players/addplayer">
                    <PlayerForm initialName={""} initialPreferredPosition={""} onSubmitProp={ createPlayer } />
                </Route>
            </Switch>
        </div>
    );
}

export default Players;