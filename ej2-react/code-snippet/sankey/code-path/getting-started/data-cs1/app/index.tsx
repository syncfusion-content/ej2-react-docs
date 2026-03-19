{% raw %}

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
          height="420px"
          title="Energy Flow Diagram"
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id="Energy Input" label={{ text: 'Energy Input' }} />
            <SankeyNodeDirective id="Generation" label={{ text: 'Generation' }} />
            <SankeyNodeDirective id="Distribution" label={{ text: 'Distribution' }} />
            <SankeyNodeDirective id="Consumption" label={{ text: 'Consumption' }} />
          </SankeyNodesCollectionDirective>
          <SankeyLinksCollectionDirective>
            <SankeyLinkDirective sourceId="Energy Input" targetId="Generation" value={500} />
            <SankeyLinkDirective sourceId="Generation" targetId="Distribution" value={450} />
            <SankeyLinkDirective sourceId="Distribution" targetId="Consumption" value={400} />
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

