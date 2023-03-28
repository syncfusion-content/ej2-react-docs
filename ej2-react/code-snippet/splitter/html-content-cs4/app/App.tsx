

import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App () {

  return (
    <div className="App">
      <SplitterComponent id="plain" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content = '<div class="content"><h3 class="h3">PARIS </h3>Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...</div>'/>
        <PaneDirective size='200px' content =  '<div class="content"><h3 class="h3">CAMEMBERT </h3>The village in the Orne département of Normandy where the famous French cheese is originated from.</div>'/>
        <PaneDirective size='200px' content = '<div class="content"><h3 class="h3">GRENOBLE </h3>The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.</div>'/>
      </PanesDirective>
      </SplitterComponent>
    </div>
  );

}
export default App;


