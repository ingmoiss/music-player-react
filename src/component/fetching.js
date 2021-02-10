import React from "react";

//Create Fetching component
export class Fetching extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchData: [],
      playNow: null
    };
  }
  componentDidMount() {
    fetch("https://assets.breatheco.de/apis/sound/songs")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ fetchData: data });
        //console.log(this.state.fetchData);
      });
  }

  songClicked = (refID) => {

    // If there is no song currently playing
    if (!this.state.playingNow) {
        this.setState({ playingNow: this.refs[refID] })
        this.refs[refID].play()
    }
    else {
        let e = this.state.playingNow
        e.pause()
        e.currentTime = 0
        this.setState({ playingNow: this.refs[refID] })
        this.refs[refID].play()
    }
}

  render() {

    return (
      <div className="">
        <div className="row">
          <div className="col-md">
            <h1 className="text-center">.:Music Player:.</h1>
          </div>
        </div>
        <div className="container">
          <div>
            <ul className="list-group" style={{ listStyle: "none" }}>
                {this.state.fetchData.map((song, i) => {
                  return <li className="list-group-item list-group-item-action list-group-item-secondary audio"
                  key={i} onClick={() => this.songClicked("audio"+i)}> 
                  <audio ref={"audio"+i}>
                        <source type="audio/mpeg"
                        src={song.url} 
                        />    
                    </audio>
                  {song.name} 
                  </li>;
                })}
            </ul>
          </div>
          <div>
            <audio>
              <source src={this.state.fetchData} type="audio/mpeg" />
            </audio>
          </div>
          <div className="fixed-bottom">
            <div className="d-flex justify-content-center align-items-center">
              {<i className="fas fa-step-backward fa-lg mr-3"></i>}
              {<i onClick={() => {if (this.state.playingNow) this.state.playingNow.play()}} 
              className="far fa-play-circle fa-3x"></i>}
              {<i onClick={() => {if (this.state.playingNow) this.state.playingNow.pause()}}
              className="far fa-pause-circle fa-3x"></i>}
              {<i className="fas fa-step-forward fa-lg ml-3"></i>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
