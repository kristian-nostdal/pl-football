import React, { Component } from "react";
import Button from '@mui/material/Button';
import moment from 'moment';
import MatchCard from './components/MatchCard';
import helpers from './helpers/APIHelper.js';
import { League } from "./model/soccerstream/League";
import './App.css';

type MyState = { premierLeague?: League, date: Date };
class App extends Component <any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      premierLeague: undefined,
      date: new Date(),
    }; 
  }
  componentWillMount() {
    this.setLeague();
    //Does not work. CORS blocking.
    helpers.fetchStreams('').then((data) => {
      console.log("test; ", data)
    });
  }
  plusDate(){
    const date = this.state.date
    date.setDate(date.getDate() + 1)
    this.setDate(date);
  }
  minusDate(){
    const date = this.state.date
    date.setDate(date.getDate() - 1)
    this.setDate(date);
  }
  setDate(date: Date){
    this.setState({date: date});
    this.setLeague();
  }
  setLeague(){
    const date = this.state.date
    let now = moment(date).format('YYYY-MM-DD');
    helpers.fetchMatches(now).then((data) => {
      let findLeague:any  = data.filter((l: any) => {
        return l.id === 3; //premier league (england) has id = 3
      })
      const premierLeague: League = findLeague ? findLeague[0] : [];
      this.setState({premierLeague: premierLeague});
    });
  }

  render() {
    const { premierLeague, date } = this.state;
    let now = moment(date).format('DD.MM.YY');

    return (
      <div className="App">
        <header className="App-header">
          <h1>Your favorite Premier League watcher!</h1>
          <div className="days">
            <Button variant="outlined" onClick={() => {this.minusDate()}}>Previous day</Button>
            <p>
              There are {premierLeague?.events.length ?? 0} matches {now}.
            </p>
            <Button variant="outlined" onClick={() => {this.plusDate()}}>Next day</Button>
          </div>
           {premierLeague?.events.length ? <p> Select your match from the list below. Doubleclick to fullscreen <br/> (Serious AD's warning if you dont have adblock) </p> : null  }
        </header>
        <div className="App-body">
          <div className="Match-body">
            {premierLeague?.events.map(match => (  
              <MatchCard key={match.id} match={match} />
            ))} 
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
