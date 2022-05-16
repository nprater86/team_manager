import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';

const PlayerList = props => {
    const { removeFromDom } = props;
    const [deletePlayerName, setDeletePlayerName] = useState("");
    const [deletePlayerId, setDeletePlayerId] = useState("");
    const [hiddenStatus, setHiddenStatus] = useState("none");
    
    function confirmDelete(id, name){
        setHiddenStatus("block");
        setDeletePlayerName(name);
        setDeletePlayerId(id);
    }

    function handleCancel(){
        setHiddenStatus("none");
        setDeletePlayerName("");
        setDeletePlayerId("");
    }

    function handleDelete(id) {
        axios.delete('http://localhost:8000/api/players/delete/' + id)
            .then(res => {
                removeFromDom(id);
                setHiddenStatus("none");
                setDeletePlayerName("");
                setDeletePlayerId("");
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <table className="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.players.map((player,i) => {
                            return (
                                <tr key={i}>
                                    <td>{player.name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <td><button className="btn btn-danger" onClick={ e => confirmDelete(player._id, player.name) }>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Card className="confirmationCard p-4 w-50 position-absolute top-25 start-50 translate-middle" style={{ display:hiddenStatus }}>
                <p>Are you sure you want to delete <span style={{fontWeight: 'bold'}}>{ deletePlayerName }</span>?</p>
                <button className="btn btn-primary me-3" onClick={ e => handleCancel() }>Cancel</button>
                <button className="btn btn-danger" onClick={ e => handleDelete(deletePlayerId) }>Delete</button>
            </Card>
        </div>
    );
}

export default PlayerList;