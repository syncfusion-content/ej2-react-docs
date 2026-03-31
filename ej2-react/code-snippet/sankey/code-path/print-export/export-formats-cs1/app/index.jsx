{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { SankeyComponent, Inject, SankeyTooltip, SankeyLegend, SankeyExport,
  SankeyNodeDirective,
  SankeyNodesCollectionDirective,
  SankeyLinkDirective,
  SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';

function App() {
  let sankeyInstance = null;

  const handleExportPNG = () => {
    if (sankeyInstance) {
      sankeyInstance.export('PNG', 'Sankey');
    }
  };

  const handleExportPDF = () => {
    if (sankeyInstance) {
      sankeyInstance.export('PDF', 'Sankey');
    }
  };

  const handleExportSVG = () => {
    if (sankeyInstance) {
      sankeyInstance.export('SVG', 'Sankey');
    }
  };

  return (
    <div className="control-pane">
      <div className="control-section">
        <button onClick={handleExportPNG} style={{ marginRight: '5px' }}>
          Export PNG
        </button>
        <button onClick={handleExportPDF} style={{ marginRight: '5px' }}>
          Export PDF
        </button>
        <button onClick={handleExportSVG} style={{ marginBottom: '10px' }}>
          Export SVG
        </button>
        <SankeyComponent
          ref={(sankey) => (sankeyInstance = sankey)}
          id="sankey-container"
          width="90%"
          height="450px"
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

{% endraw %}

