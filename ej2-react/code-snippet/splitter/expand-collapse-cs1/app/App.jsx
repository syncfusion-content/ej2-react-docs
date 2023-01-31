import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
class App extends React.Component {
    firstPaneContent() {
        return (<div>
      <div className='content'>
        <h3>PARIS </h3>Paris, the city of lights and love - this short guide is full of ideas for how to make the most of the romanticism...
      </div>
      </div>);
    }
    ;
    secondPaneContent() {
        return (<div>
      <div className='content'>
        <h3>CAMEMBERT </h3>The village in the Orne département of Normandy where the famous French cheese is originated from. </div>
      </div>);
    }
    ;
    thirdPaneContent() {
        return (<div>
      <div className='content'>
        <h3>GRENOBLE </h3>The capital city of the French Alps and a major scientific center surrounded by many ski resorts, host of the Winter Olympics in 1968.
      </div>
      </div>);
    }
    ;
    render() {
        return (<div className="App">
      <SplitterComponent id="expand-collapse" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content={this.firstPaneContent} collapsible={true}/>
        <PaneDirective size='200px' content={this.secondPaneContent} collapsible={true}/>
        <PaneDirective size='200px' content={this.thirdPaneContent} collapsible={true}/>
      </PanesDirective>
      </SplitterComponent>
    </div>);
    }
}
export default App;
