import React from 'react';
import PlayerContent from './PlayerContent';
import PlayerDetails from './PlayerDetails';
import './App.css';


function App() {

   function constructor(props) {
      super(props);
      this.state = { selectedPlayer:[0,0], playerName: ''};
      this.updateSelectedPlayer = this.updateSelectedPlayer.bind(this);
   }
  function updateSelectedPlayer(id, name) {
      var arr = [0, 0, 0, 0];
      arr[id] = 1;
      this.setState({
         playerName: name,
         selectedPlayer: arr
      });
   }

      return (
         <div>
            <PlayerContent active={this.state.selectedPlayer[0]}
            clickHandler={this.updateSelectedPlayer} id={0} name="David"/>
            <PlayerContent active={this.state.selectedPlayer[1]}
            clickHandler={this.updateSelectedPlayer} id={1} name="Steve"/>
            <PlayerDetails name={this.state.playerName}/>
         </div>
      );
}

export default App;