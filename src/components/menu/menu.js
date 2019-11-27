import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

function restartClick (shit){
  console.log('restartClick')
}
function scoreboardClick (shit){
  console.log('scoreboardClick')
}
function returnClick (shit){
  console.log('returnClick')
}

const Menu = ({state}) => {
  return (
    <Wrapper game={{...state.game}}>
      <div className='menu' >
        <button onClick={restartClick}>Restart</button>
        <button onClick={scoreboardClick}>Scoreboard</button>
        <button onClick={returnClick}>Return</button>
        {/* <p>{state.game.isRunning.toString()}</p> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.menu {
  display: ${
    props => !props.game.isRunning ? 'flex': 'none'
    };
  position: absolute;
  top: 48px;
  padding: 0.5em;
  border-radius: 25px 5px
  border: 0.2em solid white;
  left: calc(50vw - 124px);
  background-color: #222D;
  width: 200px;
  height: 300px;
  color: #FFF;
  flex-flow: column;
  justify-content: space-around;
  
  button {
    color: #FFF;
    background-color: #00B4F7;

    align-self: center;
    height: 2.5em;
    width: 120px;
    border-radius: 12px;
  }
}
`;

export default connect(state => ({state: state}))(Menu)
