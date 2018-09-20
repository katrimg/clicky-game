//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingCard from "./components/PlayingCard";
import Footer from "./components/Footer";
import rappers from "./rappers.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    rappers,
    clickedRappers: [],
    score: 0
  };

//when you click on a card ... the rapper is taken out of the array
  imageClick = event => {
    const currentRappers = event.target.alt;
    const RappersAlreadyClicked =
      this.state.clickedRappers.indexOf(currentRappers) > -1;

//if you click on a rapper that has already been selected, the game is reset and cards reordered
    if (RappersAlreadyClicked) {
      this.setState({
        rappers: this.state.rappers.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedRappers: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available rapper, your score is increased and cards reordered
    } else {
      this.setState(
        {
          rappers: this.state.rappers.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedRappers: this.state.clickedRappers.concat(
            currentRappers
          ),
          score: this.state.score + 1
        },
//if you get all 12 rappers correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              rappers: this.state.rappers.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedRappers: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
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
export default App;
