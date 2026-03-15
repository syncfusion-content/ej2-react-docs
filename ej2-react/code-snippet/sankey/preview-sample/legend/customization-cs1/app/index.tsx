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
  SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
          legendSettings={{
            visible: true,
            position: 'Right',
            border: { width: 2, color: '#333' },
            background: '#f5f5f5',
            textStyle: {
              fontFamily: 'Segoe UI',
              fontStyle: 'Normal',
              fontWeight: '500',
              size: '13px'
            },
            itemPadding: 12
          }}
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

