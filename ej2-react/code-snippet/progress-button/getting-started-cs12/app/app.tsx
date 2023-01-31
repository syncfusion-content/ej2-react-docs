{% raw %}



import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useState } from "react";

function App() {
  let progressBtn: ProgressButtonComponent;
  const [state, setState] = useState({
    content: 'Download',
    iconCss: 'e-btn-sb-icon e-download'
  });

  return (
    <ProgressButtonComponent content={state.content} enableProgress = {true} duration={4000}
    iconCss={state.iconCss} end={end} cssClass='e-hide-spinner' onClick={clickHandler} ref={(scope)=>{progressBtn = scope as ProgressButtonComponent;}}/>
  );

  function end(): void {
    setState({ content: 'Download', iconCss: 'e-btn-sb-icon e-download' });
  }
  
  function clickHandler(): void {
    if (state.content === 'Download') {
      setState({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause' });
    }
    else if (state.content === 'Pause') {
      setState({ content: 'Resume', iconCss: 'e-btn-sb-icon e-play' });
      progressBtn.stop();
    }
    else if (state.content === 'Resume') {
      setState({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause' });
      progressBtn.start();
    }
  }
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));



{% endraw %}