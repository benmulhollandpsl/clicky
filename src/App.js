import React, { Component } from 'react';
import ColumnGrid from "./components/ColumnGrid";
import FooterNav from "./components/FooterNav";
import InlayGrid from "./components/InlayGrid";
// import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12} from "./picturecards";

import picturecards from "./picturecards";
import PictureFrame from "./components/PictureFrame";

import Score from "./components/Score";
import Start from "./components/Start";
import Title from "./components/Title";




class App extends Component {

  state = {

    // picturecards: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
    picturecards: picturecards,
    // name:
    pickedChars: [picturecards].sort(this.shuffleArray),
    topScore: 0,
    Score: 0,
    alertWon: false,
    correct: undefined,
    alertMessage: ""
  }

  shuffleArray = (a, b) => Math.random() > .5 ? -1 : 1
  //new shuffle array start

  handlePicked = (event) => {
//getNamedItem method returns the attribute node with the specified name from the current attributes collection
    const name = event.target.attributes.getNamedItem("name").value;
    this.checkClickPicture((name).updateTopScore);
    this.shufflePicturecards()
  }

  shufflePicturecards = () => {
    this.setState(
      {
        picturecards: this.shuffleArray(this.state.pickedChars)
      },
      console.log(picturecards)
      )
    
  }

  

  checkClickPicture = (name) => {
   const newState = { ...this.state };
   console.log(name);
    
    if (newState.clicked.indexOf(name) === -1) {
      // score = newState.clicked.length +1,
      newState.alertMessage = `you picked "${name}" a 2nd time!`
      newState.pickedChars = []
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `Keep going!`
    
      newState.alertMessage = `something weird happened, try again`
    }
    // console.log(name)
  }
  

  updateTopScore = (newState, cb) => {
    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      newState()
    }
    cb(newState)
  }

  alertWon = (newState) => {
    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "you won";
      newState.pickedChars = [];
      this.setState = newState
    }
  }


 



  render() {
    return (
      <div>
        <Title style= {{ background: "rebeccapurple", marginBottom: "300px" }} />

        <ColumnGrid container direction="column" style={{ margin: "auto auto", maxWidth: 1200 }}>

          <ColumnGrid item lg={12}>
            <InlayGrid>
              {this.state.alertMessage === "So far so good!" ? (
                <Start message={this.state.alertMessage} style={{ color: "cyan" }} />
              ) : (
                  <Start message={this.state.alertMessage} style={{ color: "yellow" }} />
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
              clicked={char.clicked}
              handlePicked={this.handlePicked}
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
