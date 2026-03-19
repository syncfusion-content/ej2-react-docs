{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  SankeyComponent, Inject, SankeyTooltip, SankeyLegend,
  SankeyExport,
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
          title="Sankey Chart"
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id="A" />
            <SankeyNodeDirective id="B" />
            <SankeyNodeDirective id="C" />
          </SankeyNodesCollectionDirective>
          <SankeyLinksCollectionDirective>
            <SankeyLinkDirective sourceId="A" targetId="B" value={100} />
            <SankeyLinkDirective sourceId="B" targetId="C" value={80} />
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

