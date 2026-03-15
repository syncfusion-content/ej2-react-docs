import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  SankeyComponent, Inject, SankeyTooltip, SankeyLegend, SankeyExport,
  SankeyNodeDirective,
  SankeyNodesCollectionDirective,
  SankeyLinkDirective,
  SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
          title="Comprehensive Sankey Customization"
          margin={{ left: 40, right: 40, top: 40, bottom: 40 }}
          nodeStyle={{ opacity: 0.85 }}
          linkStyle={{ opacity: 0.6, curvature: 0.5 }}
          labelSettings={{
            fontWeight: 'bold'
          }}
          tooltip={{
            enable: true,
            nodeFormat: '<b>${sourceNodeName} → ${targetNodeName}</b><br/>Value: ${value}'
          }}
          legendSettings={{
            visible: true,
            position: 'Bottom'
          }}
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id="Agricultural Waste" color="#FF6B6B" />
            <SankeyNodeDirective id="Biomass Residues" />
            <SankeyNodeDirective id="Bio-conversion" color="#4ECDC4" />
            <SankeyNodeDirective id="Liquid Biofuel" color="#45B7D1" />
            <SankeyNodeDirective id="Electricity" color="#FFA07A" />
            <SankeyNodeDirective id="Heat" color="#98D8C8" />
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

