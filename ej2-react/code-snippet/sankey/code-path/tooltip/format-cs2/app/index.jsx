{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  SankeyComponent,
  Inject,
  SankeyTooltip,
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
          tooltip={{
            enable: true,
            nodeFormat: '${name} : ${value:n2} TBtu',
            linkFormat: '${start.name} : ${start.out:n2} TBtu → ${target.name} : ${target.in:n2} TBtu<br>Flow: ${value:n2} TBtu'
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
          <Inject services={[SankeyTooltip, SankeyLegend]} />
        </SankeyComponent>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sankey'));

{% endraw %}