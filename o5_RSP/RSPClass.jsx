import React, { Component } from 'react';

// Class : constructor -> render -> ref -> componentDidMount
// (If change   setState/props) -> [shouldComponentUpdate(true)] -> render -> componentDidUpdate
// (If the parent component removes the child component) -> componentWillUnmount    ->   <Disappearance>

const rspCoords = {
  rock: '0',
  scissors: '-142px',
  paper: '-284px',
};

const scores = {
  scissor: 1,
  rock: 0,
  paper: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

class RSPClass extends Component {
	state = {
    result: '',
    imgCoord: 0,
    score: 0,
	};

	interval;

	componentDidMount() {			//	After the component was first re-rendering. call the asynchronous requests here.
		this.interval = setInterval(this.changeHand, 100);
	}

	// componentDidUpdate() {	// After re-rendering
  // }

	componentWillUnmount() {	// Right before the components are removed. clean the asynchronous requests here.
		clearInterval(this.interval);
	}
  
  changeHand = () => {
    const {imgCoord} = this.state;
    if (imgCoord === rspCoords.rock) {
      this.setState({
        imgCoord: rspCoords.scissors,
      });
    } else if (imgCoord === rspCoords.scissors) {
      this.setState({
        imgCoord: rspCoords.paper,
      });
    } else if (imgCoord === rspCoords.paper) {
      this.setState({
        imgCoord: rspCoords.rock,
      });
    }
  }
  
  onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.setState({
        result: 'Draw'
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: 'Win',
          score: prevState.score + 1,
        };
      })
    } else {
      this.setState((prevState) => {
        return {
          result: 'Loose',
          score: prevState.score - 1,
        };
      })
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 100);
    }, 3000);
  }

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
                                        {/* onClick={() => this.onClickBtn('rock')}> */}
          <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>Rock</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('scissors')}>Scissors</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>Paper</button>
        </div>
        <div>{result}</div>
        <div>Now {score} point</div>
      </>
    );
  }
}

export default RSPClass;