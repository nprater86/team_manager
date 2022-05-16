import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import GameStatus from '../components/GameStatus';

const ComponentName = props => {
    const { players, changePlayerStatus } = props;
    return (
        <div>
            <ul className="nav mb-3">
                <li className="nav-item"><Link to="/status/game/1" className="nav-link">Game 1</Link></li>
                <li className="nav-item"><Link to="/status/game/2" className="nav-link">Game 2</Link></li>
                <li className="nav-item"><Link to="/status/game/3" className="nav-link">Game 3</Link></li>
            </ul>
            <Switch>
                <Route path="/status/game/:gameId">
                    <GameStatus players={ players } updatePlayerStatus={ props.updatePlayerStatus }/>
                </Route>
            </Switch>
        </div>
    );
}

export default ComponentName;