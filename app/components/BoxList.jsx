import React from 'react';
import styles from '../App.scss';
import Box from './Box.jsx';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

let counter = 0; 

const list = ['drums', 'twice', 'three times a lady']
class BoxList extends React.Component {

  renderList() {
    return list.map((box) => {
      return (
        <li key={counter++}>
        <Box /> 
        </li>
        );
    });

  }

  render() {
    return (
      <ul>
      {this.renderList()}
      </ul>
      )
  }
}

function mapStateToProps(state) {
  return {
    box: state.box
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BoxList);