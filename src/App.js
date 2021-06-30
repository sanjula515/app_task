 import React from 'react';
 import './App.css';
 import {library} from '@fortawesome/fontawesome-svg-core';
 import { faDownload, faEye, faFile,  faTrash } from '@fortawesome/free-solid-svg-icons';
 import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 library.add(faFile);
 library.add(faTrash);
 library.add(faEye);
 library.add(faDownload);
 class App extends React.Component{
  render(){
    return(
      <div>
        <div className="container">
            <div className="d-flex flex-column my-flex-container-column">
              <div className="p-2 my-flex-item nav-icons"><FontAwesomeIcon className="faicons"icon="file" id="style_icon"/> Application.PDf</div>
            </div>
              <div className="d-flex flex-row justify-content-end ">
              <div className="p-2 my-flex-item nav-icons "><FontAwesomeIcon className="faicons"icon="trash"/></div>
              <div className="p-2 my-flex-item nav-icons "><FontAwesomeIcon className="faicons"icon="eye"/></div>
              <div className="p-2 my-flex-item nav-icons "><FontAwesomeIcon className="faicons"icon="download"/></div>
              </div>
        </div>
      </div>
);
  }
}

export default App;