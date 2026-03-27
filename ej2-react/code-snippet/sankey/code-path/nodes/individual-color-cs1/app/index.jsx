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
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height="450px"
                >
                    <SankeyNodesCollectionDirective>
                        <SankeyNodeDirective id="Agricultural Waste" color="#f41212" />
                        <SankeyNodeDirective id="Biomass Residues" color="#aed62c" />
                        <SankeyNodeDirective id="Bio-conversion" color="#259bc3" />
                        <SankeyNodeDirective id="Liquid Biofuel" color="#0e11af" />
                        <SankeyNodeDirective id="Electricity" color="#7a0e92" />
                        <SankeyNodeDirective id="Heat" color="#c5b9bb" />
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
