//import all dependencies 
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingCard from "./components/PlayingCard";
import Footer from "./components/Footer";
import rappers from "./rappers.json";
import "./App.css";

//setting the state for App
class App extends Component {
  state = {
    rappers,
    clickedRappers: [],
    score: 0
  };

//take a clicked rapper out of the array of rappers
  imageClick = event => {
    const currentRappers = event.target.alt;
    const RappersAlreadyClicked =
      this.state.clickedRappers.indexOf(currentRappers) > -1;

//if the rapper has already been clicked, then
    if (RappersAlreadyClicked) {
      this.setState({
        //resort the rappers randomly
        rappers: this.state.rappers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedRappers: [],
        //set score back to 0
        score: 0
      });
//test comment



//else, 
    } else {
      this.setState(
        {
          //randomly order cards
          rappers: this.state.rappers.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedRappers: this.state.clickedRappers.concat(
            currentRappers
          ),
          //increase score by 1
          score: this.state.score + 1
        },
//if score reaches 12 then alert win message       
        () => {
          if (this.state.score === 12) {
            alert("You Win!!!");
            this.setState({
              rappers: this.state.rappers.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              //set score and clicked back to 0
              clickedRappers: [],
              score: 0
            });
          }
        }
      );
    }
  };

//render the navbar, jumbotron, playingcard, and footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.rappers.map(rappers => (
            <PlayingCard
              imageClick={this.imageClick}
              id={rappers.id}
              key={rappers.id}
              image={rappers.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
//export app
export default App;
