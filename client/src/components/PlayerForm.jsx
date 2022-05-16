import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const PlayerForm = props => {
    const { initialName, initialPreferredPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState("");
    const [preferredPosition, setPreferredPosition] = useState(initialPreferredPosition);
    const history = useHistory();

    useEffect(() => {
        if (name.length >= 2){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    },[name])

    function onSubmitHandler(e){
        e.preventDefault(e);

        setError("");
        onSubmitProp({
            name,
            preferredPosition,
            status: {
                game1:"undecided",
                game2:"undecided",
                game3:"undecided"
            }
        });

        history.push("/players/list");
    }

    return (
        <div>
            <Card className="p-4 w-50">
                <form onSubmit={ e => onSubmitHandler(e) }>
                    <div className="row mb-2">
                        <label className="col-5">Player Name:</label>
                        <div className="col-auto">
                            <input type="text" onChange={ e => setName(e.target.value) } value={ name } />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-5">Preferred Position:</label>
                        <div className="col-7">
                            <input type="text" onChange={ e => setPreferredPosition(e.target.value)} value={ preferredPosition } />
                        </div>
                    </div>
                    <div className="row">
                        {
                            isValid ?
                            <button type="submit" className="col-2 btn btn-success">Add</button> :
                            <button type="submit" className="col-2 btn btn-success" disabled>Add</button>
                        }
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default PlayerForm;