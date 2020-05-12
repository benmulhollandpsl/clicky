import React, { Component } from 'react';
import ColumnGrid from "./components/ColumnGrid";
import FooterNav from "./components/FooterNav";
import InlayGrid from "./components/InlayGrid";
import PictureFrame from "./components/PictureFrame";
import Score from "./components/Score";
import Start from "./components/Start";
import NavBar from "./components/NavBar";


import picturecards from "./picturecards";
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
    const name = event.target.getAttribute("./");
    this.shufflePicturecards()

    this.checkGuess( name,this.updateTopScore)
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
      newState.alertMessage = `you picked ${ name } a 2nd time!`
      newState.pickedChars = []
      this.setState(newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `Keep going!`
      this.setState(newState)
    }
    cb(newState, this.alertWon)
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState(newState)
    }
    cb(newState)
  }

  alertWon = (newState) => {
    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "you won";
      newState.pickedChars = [];
      this.setState(newState)
    }
  }


 



  render() {
    return (
      <div>
        <NavBar style={{ background: "rebeccapurple", marginBottom: "300px" }} />

        <ColumnGrid container direction="column" style={{ margin: "auto auto", maxWidth: 1200 }}>

          <ColumnGrid item lg={12}>
            <InlayGrid>
              {this.state.alertMessage === "So far so good!" ? (
                <Start message={this.state.alertMessage} style={{ color: "green" }} />
              ) : (
                  <Start message={this.state.alertMessage} style={{ color: "red" }} />
                )}
            </InlayGrid>
          </ColumnGrid>

          <ColumnGrid container justify=" ">

            <ColumnGrid item lg={12} md={6} sm={3} xs={12}>
              <InlayGrid>
                <Score type="Score" score={this.state.pickedChars.length} />
              </InlayGrid>
            </ColumnGrid>

            <ColumnGrid item lg={6} md={6} sm={12} xs={12}>
              <InlayGrid>
                <Score type="Top Score" score={this.state.topScore} />
              </InlayGrid>
            </ColumnGrid>

          </ColumnGrid>

        </ColumnGrid>

        <ColumnGrid container spacing={4} justify="center" style={{ maxWidth: 945, margin: "0 auto" }}>
          {this.state.picturecards.map(char => (
            <ColumnGrid item lg={3} md={3} sm={4} xs={12}>
            <PictureFrame
              id={char.id}
              name={char.name}
              image={char.image}
              key={char.id}
              handlePicked={(e) => this.handlePicked(e)}
            />
            </ColumnGrid>
          ))}
        </ColumnGrid>
        <FooterNav style={{ background: "cyan", marginTop: "17.5px", paddingTop: "15px", borderTop: "2.5px solid rebeccapurple" }}>
          <a href="https://github.com/benmulhollandpsl/clicky" target="_blank" rel="noopener noreferrer" className="link" alt="clicky-github-link"><i class="fab fa-github"></i></a>
         </FooterNav>

      </div>
        )
      }
  }

export default App;
