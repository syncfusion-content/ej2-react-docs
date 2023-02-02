import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    function pane1Content() {
        return (<div>
        <div className="content">
          <h3>PARIS </h3>
          Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
        </div>
      </div>);
    }
    function pane2Content() {
        return (<div>
        <div className="content">
          <h3>CAMEMBERT </h3>
          The village in the Orne département of Normandy where the famous French cheese is originated from.
        </div>
      </div>);
    }
    function pane3Content() {
        return (<div>
        <div className="content">
          <h3>GRENOBLE </h3>
          The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
        </div>
      </div>);
    }
    function pane4Content() {
        return (<div>
        <div className="content">
          <h3>AUSTRALIA </h3>
           Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal. Its capital, Canberra, is inland.
        </div>
      </div>);
    }
    return (<div className="App">
      <SplitterComponent id="multiple" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='150px' content={pane1Content}/>
        <PaneDirective size='150px' content={pane2Content}/>
        <PaneDirective size='150px' content={pane3Content}/>
        <PaneDirective size='150px' content={pane4Content}/>
      </PanesDirective>
      </SplitterComponent>
    </div>);
}
export default App;
