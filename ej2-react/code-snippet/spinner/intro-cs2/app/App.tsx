


import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    componentDidMount();
  })
  function componentDidMount(prevProps) {
    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('container'),
    });
    // showSpinner() will make the spinner visible
    showSpinner(document.getElementById('container'));
  }
    return (
      <div className="control-pane">
        <div id="container"
          className="control-section col-lg-12 spinner-target"
        ></div>
      </div>
    );
  }



