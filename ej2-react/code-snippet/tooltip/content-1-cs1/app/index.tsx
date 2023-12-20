

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
  function content() {
    return(
      <span id='tooltipContent'>
      <p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p></span>
    )
  }
  let style: object = {
    display: 'inline-block',
    padding : '5px'
  };
  return (
      <div>A green home is a type of house designed to be
          <TooltipComponent isSticky={true} content={content} style={style}>
          <a><u>environmentally friendly</u></a>
          </TooltipComponent> and sustainable. And also focuses on the efficient use of "energy, water, and building materials." As green homes
          have become more prevalent we have also seen the emergence of green affordable housing.
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('sample'));



