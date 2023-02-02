


import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App() {
  function leftContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>PARIS </h3>
          Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
        </div>
      </div>
    );
  }
  function middleContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>CAMEMBERT </h3>
          The village in the Orne département of Normandy where the famous French cheese is originated from.
        </div>
      </div>
    );
  }
  function rightContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>GRENOBLE </h3>
          The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
        </div>
      </div>
    );
   }
    return (<div className="App">
      <SplitterComponent id="percentage" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content = {leftContent} />
        <PaneDirective size='200px' content = {middleContent} />
        <PaneDirective size='200px' content = {rightContent}  />
      </PanesDirective>
      </SplitterComponent>
    </div>);
}
export default App;


