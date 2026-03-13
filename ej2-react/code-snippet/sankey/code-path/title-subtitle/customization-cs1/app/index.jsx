import * as React from "react";
import * as ReactDOM from "react-dom";
import { SankeyComponent, Inject, SankeyTooltip, SankeyLegend, SankeyExport } from '@syncfusion/ej2-react-charts';
import { SankeyNodeDirective, SankeyNodesCollectionDirective, SankeyLinkDirective, SankeyLinksCollectionDirective } from '@syncfusion/ej2-react-charts';

function App() {
  const titleStyle = {
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
    size: '18px',
    color: '#1F77B4'
  };

  const subtitleStyle = {
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'normal',
    size: '14px',
    color: '#FF7F0E'
  };

  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
          title="Energy Flow Diagram"
          subtitle="Agricultural Energy Conversion"
          titleStyle={titleStyle}
          subtitleStyle={subtitleStyle}
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

