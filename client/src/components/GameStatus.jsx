import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const GameStatus = props => {
    const { updatePlayerStatus } = props;
    const [players, setPlayers] = useState(props.players);
    const { gameId } = useParams();

    function handleStatusChange(id, playerStatus){
        axios.put('http://localhost:8000/api/players/update/' + id, {"$set": { ["status.game" + gameId] : playerStatus } })
            .then(res => {
                updatePlayerStatus(id, gameId, playerStatus);
            })
            .catch(err => console.error(err));
    }   

    return (
        <div>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player,i) => {
                            return (
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td className="d-flex justify-content-evenly">
                                        { 
                                            player.status[`game${gameId}`] === "playing" ?
                                            <button className="btn btn-success me-3">Playing</button> :
                                            <button onClick={ e => handleStatusChange(player._id, `playing`) } className="btn btn-outline-success me-3">Playing</button>
                                        }
                                        { 
                                            player.status[`game${gameId}`] === "not-playing" ?
                                            <button className="btn btn-danger me-3">Not Playing</button> :
                                            <button onClick={ e => handleStatusChange(player._id, `not-playing`) } className="btn btn-outline-danger me-3">Not Playing</button>
                                        }
                                        { 
                                            player.status[`game${gameId}`] === "undecided" ?
                                            <button className="btn btn-warning">Undecided</button> :
                                            <button onClick={ e => handleStatusChange(player._id, `undecided`) } className="btn btn-outline-warning">Undecided</button>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default GameStatus;