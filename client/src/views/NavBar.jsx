import React from 'react';
import { Link } from 'react-router-dom';

const ComponentName = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/players/list">Manage Players</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/status/game/1">Manage Player Status</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default ComponentName;