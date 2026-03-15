import * as React from "react";
import * as ReactDOM from "react-dom";
import { SankeyComponent, SankeyNodeDirective, SankeyNodesCollectionDirective, SankeyLinkDirective, SankeyLinksCollectionDirective, Inject, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id='Agricultural Waste' fill='#FF6B6B' />
            <SankeyNodeDirective id='Bio-conversion' fill='#4ECDC4' />
            <SankeyNodeDirective id='Liquid Biofuel' fill='#45B7D1' />
            <SankeyNodeDirective id='Electricity' fill='#FFA07A' />
            <SankeyNodeDirective id='Heat' fill='#98D8C8' />
          </SankeyNodesCollectionDirective>
          <SankeyLinksCollectionDirective>
            <SankeyLinkDirective sourceId='Agricultural Waste' targetId='Bio-conversion' value={124.729} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Liquid Biofuel' value={0.597} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Electricity' value={26.862} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Heat' value={280.845} />
          </SankeyLinksCollectionDirective>
          <Inject services={[SankeyTooltip, SankeyLegend, SankeyExport]} />
        </SankeyComponent>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sankey'));
