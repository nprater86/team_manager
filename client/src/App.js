import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NavBar from './views/NavBar';
import Players from './views/Players';
import Status from './views/Status';

function App() {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
      axios.get("http://localhost:8000/api/players/")
          .then(res => {
              setPlayers(res.data.players);
              setLoaded(true);
          })
          .catch(err => console.error(err));
  },[])

  function createPlayer(player){
    axios.post("http://localhost:8000/api/players/new", player)
        .then(res => {
            setPlayers(players => [...players, res.data.player])
        })
        .catch(err => console.error(err.config.data));
  }

  function removeFromDom(id) {
    setPlayers(players.filter(player => player._id != id));
  }

  function updatePlayerStatus(id, gameId, playerStatus){
    setPlayers(players.map(player => {
      if(player._id === id){
          player.status[`game${gameId}`] = playerStatus;
          return player;
      } else {
          return player;
      }
    }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/players">
              {loaded && <Players players={ players } createPlayer={ createPlayer } removeFromDom={ removeFromDom }/>}
            </Route>
            <Route path="/status">
              {loaded && <Status players={ players } updatePlayerStatus={ updatePlayerStatus } />}
            </Route>
            <Redirect to="/players/list" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
