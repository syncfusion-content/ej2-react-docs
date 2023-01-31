

import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
import { useState } from 'react';

function App() {
  const firstPaneContent = `<div>
      <div className="content">
        <h3 className="h3">HTML</h3>
        <div className="code-preview">
          &lt;<span>!DOCTYPE html&gt;</span>
          <div>&lt;<span>html&gt;</span></div>
          <div>&lt;<span>body&gt;</span></div>
          &lt;<span>div</span> id="custom-image"&gt;
          <div>&lt;<span>img</span> src="src/albert.png"&gt;</div>
          <div>&lt;<span>div</span>&gt;</div>
          <div>&lt;<span>/body&gt;</span></div>
          <div>&lt;<span>/html&gt;</span></div>
        </div>
      </div>
      </div>`;

  const secondPaneContent = `<div>
      <div className="content">
        <h3 className="h3">CSS</h3>
        <div className="code-preview">
        <span>img { </span>
        <div id="code-text">margin:<span>0 auto;</span></div>
        <div id="code-text">display:<span>flex;</span></div>
        <div id="code-text">height:<span>70px;</span></div>
        <span> }</span>
        </div>
      </div>
      </div>`;

  const thirdPaneContent = `<div>
        <div className="content">
          <h3 className="h3">JavaScript</h3>
          <div className="code-preview">
          <span>var</span> image = document.getElementById("custom-image");
          <div>image.addEventListener("click", function() { </div>
            <div>// Code block for click action</div>
          <span> }); </span>
          </div>
        </div>
      </div>`;

  const [pane1Content] = useState(firstPaneContent);
  const [pane2Content] = useState(secondPaneContent);
  const [pane3Content] = useState(thirdPaneContent);

  return (
    <div className="App">
      <SplitterComponent id="splitter" height="250px" width="550px">
        <PanesDirective>
          <PaneDirective content={pane1Content} />
          <PaneDirective content={pane2Content} />
          <PaneDirective content={pane3Content} />
        </PanesDirective>
      </SplitterComponent>
    </div>
  );
}

export default App;



