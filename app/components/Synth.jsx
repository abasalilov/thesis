import React from 'react';
import styles from '../App.scss';
import {connect} from 'react-redux';
import Keyboard from './Keyboard.jsx';
import Patch from './Patch.jsx';
import Knob from './Knob.jsx';
import Oscillators from './Oscillators.jsx';

class Synth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      border: '3px solid #383838',
      borderRadius: '2px',
      backgroundColor: '#efefef',
      width: '100%',
      height: '35%',
      position: 'relative',
      top: '2px',
    }

    return (
      <div className="synth" style={style}>
        <Oscillators />
        {/* <Volume /> would like to be able to add eventually */}
        <div className="synth-volume-placeholder" style={{
          border: '2px solid DarkKhaki',
          position: 'absolute',
          height: '100px',
          top: '5%',
          width: '100px',
          right: '30%'
        }}>
          Volume Placeholder
        </div>
        <Patch />
        <Keyboard />
      </div>
    );
  }
}



const mapStateToProps = function(state) {
  return {};
}

export default connect(mapStateToProps)(Synth);
