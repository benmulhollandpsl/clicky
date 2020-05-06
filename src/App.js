import React, { Component } from 'react';
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import CharCard from "./components/CharCard";
import Score from "./components/Score";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import BottomNavMDC from "./components/BottomNavMDC";
import picturecards from "./picturecards.js";
// import images from "../public/imgs";

// images;
class App extends Component {

  state = {
    picturecards: picturecards,
    pickedChars: [],
    topScore: 0,
    alertMessage: ""
  }

  handlePicked(event){
    console.log(event)
    // acces this event to find the value 
    const name = event.target.getAttribute("./");
    this.shufflePicturecards()
    console.log(name)
    this.checkGuess(name, this.updateTopScore)
  }

  shufflePicturecards = () => {
    this.setState({picturecards: this.shuffleArray(this.state.picturecards)})
    
  }

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedChars.includes(name)) {
      newState.alertMessage = `YOU ALREADY PICKED ${ name }!`
      newState.pickedChars = []
      this.setState(newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `GOOD CHOICE!`
      this.setState(newState)
    }
    cb(newState, this.alertWinner)
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState(newState)
    }
    cb(newState)
  }

  alertWinner = (newState) => {
    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "CHAMPION!";
      newState.pickedChars = [];
      this.setState(newState)
    }
  }

  render() {
    return (
      <div>
        <NavBar style={{ background: "#313133", marginBottom: "5px" }} />

        <GridMDC container direction="column" style={{ margin: "0 auto", maxWidth: 945 }}>

          <GridMDC item lg={12}>
            <PaperMDC>
              {this.state.alertMessage === "GOOD CHOICE!" ? (
                <Alert message={this.state.alertMessage} style={{ color: "green" }} />
              ) : (
                  <Alert message={this.state.alertMessage} style={{ color: "red" }} />
                )}
            </PaperMDC>
          </GridMDC>

          <GridMDC container justify="space-between">

            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score type="Score" score={this.state.pickedChars.length} />
              </PaperMDC>
            </GridMDC>

            <GridMDC item lg={6} md={6} sm={12} xs={12}>
              <PaperMDC>
                <Score type="Top Score" score={this.state.topScore} />
              </PaperMDC>
            </GridMDC>

          </GridMDC>

        </GridMDC>

        <GridMDC container spacing={24} justify="center" style={{ maxWidth: 945, margin: "0 auto" }}>
          {this.state.picturecards.map(char => (
            <GridMDC item lg={3} md={3} sm={4} xs={6}>
            <CharCard
              id={char.id}
              name={char.name}
              value={char.name}
              image={char.image}
              key={char.id}
              handlePicked={(e) => this.handlePicked(e)}
            />
            console.log(name)
            </GridMDC>
          ))}
        </GridMDC>
        <BottomNavMDC style={{ background: "#313133", marginTop: "17.5px", paddingTop: "15px", borderTop: "2.5px solid slategray" }}>
          <a href="https://github.com/benmulhollandpsl/clicky" target="_blank" rel="noopener noreferrer" className="link" alt="clicky-github-link"><i className="fa fa-github fa-2x"></i></a>
        </BottomNavMDC>

      </div>
    )
  }
}

export default App;
