import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Iframe from 'react-iframe'
import { MatchEvent } from "../model/soccerstream/MatchEvent";
import '../App.css';
import pl from '../helpers/pl21-22.json';

type MyProps = { match: MatchEvent };
type MyState = { baseUrl: string };
const theme = createTheme({
    palette: {
        mode: "dark"
    }
});
class MatchCard extends Component <MyProps, MyState>{
    
    constructor(props: MyProps) {
        super(props);
        this.state = {
            baseUrl: 'https://resources.premierleague.com/premierleague/badges/100/'
        };
    }
    render() {
        const { baseUrl } = this.state;
        const { match } = this.props;

        const ratio = window.matchMedia("(min-width: 768px)").matches ? "400" : "200"
        
        let homeUrl = baseUrl;
        let awayUrl = baseUrl;

        const teams = pl.content;
        teams.forEach(team => {
            if(team.name === match.homeTeam.name){
                homeUrl = homeUrl + team.altIds.opta + ".png"
            }
            else if(team.name === match.awayTeam.name){
                awayUrl = awayUrl + team.altIds.opta + ".png"
            }
        });

        return (
            <ThemeProvider theme={theme}>
                <Card className="Test" sx={{ width: 700 }}>
                    <CardActionArea >
                        <Iframe url="http://weakstreams.com/streams/9591476"
                            width="98%"
                            height={ratio}
                            id="myId"
                            allowFullScreen 
                            display="inline"
                            position="relative"/>
                           
                        <CardContent>
                            <Typography 
                                gutterBottom 
                                variant="h5" 
                                className="smile"
                                component="div">
                                    <img src={homeUrl} className="Club-logo" alt="logo" />
                                    <div>{match.homeTeam.name} vs {match.awayTeam.name}</div>
                                    <img src={awayUrl} className="Club-logo" alt="logo" />
                            </Typography>
                            <Typography 
                                variant="body2" 
                                color="text.secondary">
                                    Score: {match.homeScore.current} - {match.awayScore.current}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ThemeProvider>
        );
    }
}

export default MatchCard;

