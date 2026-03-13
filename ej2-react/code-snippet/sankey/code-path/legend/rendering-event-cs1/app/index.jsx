import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  SankeyComponent,
  Inject,
  SankeyExport,
  SankeyLegend,
  SankeyNodeDirective,
  SankeyNodesCollectionDirective,
  SankeyLinkDirective,
  SankeyLinksCollectionDirective,
  SankeyLabelRenderEventArgs
} from '@syncfusion/ej2-react-charts';

function App() {
  const onLegendItemRendering = (args) => {
    // Customize legend item appearance based on node data
    args.fill = '#333'
  };

  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
          legendSettings={{
            visible: true,
            position: 'Bottom'
          }}
          legendItemRendering={onLegendItemRendering}
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id="Agricultural Waste" />
            <SankeyNodeDirective id="Biomass Residues" />
            <SankeyNodeDirective id="Bio-conversion" />
            <SankeyNodeDirective id="Liquid Biofuel" />
            <SankeyNodeDirective id="Electricity" />
            <SankeyNodeDirective id="Heat" />
          </SankeyNodesCollectionDirective>
          <SankeyLinksCollectionDirective>
            <SankeyLinkDirective sourceId="Agricultural Waste" targetId="Bio-conversion" value={84.152} />
            <SankeyLinkDirective sourceId="Biomass Residues" targetId="Bio-conversion" value={24.152} />
            <SankeyLinkDirective sourceId="Bio-conversion" targetId="Liquid Biofuel" value={10.597} />
            <SankeyLinkDirective sourceId="Bio-conversion" targetId="Electricity" value={36.862} />
            <SankeyLinkDirective sourceId="Bio-conversion" targetId="Heat" value={60.845} />
          </SankeyLinksCollectionDirective>
          <Inject services={[SankeyTooltip, SankeyLegend, SankeyExport]} />
        </SankeyComponent>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sankey'));

