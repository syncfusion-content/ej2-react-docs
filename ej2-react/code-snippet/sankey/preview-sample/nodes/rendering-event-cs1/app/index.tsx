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
import { SankeyNodeModel, SankeyLinkModel, SankeyNodeEventArgs } from '@syncfusion/ej2-react-charts';

function App() {
    const nodeRendering = (args: SankeyNodeEventArgs) => {
        if (args.node.id === 'Bio-conversion') {
            args.node.color = '#FF6B6B';
        } else if (args.node.id === 'Liquid Biofuel') {
            args.node.color = '#4ECDC4';
        } else if (args.node.id === 'Electricity') {
            args.node.color = '#45B7D1';
        } else if (args.node.id === 'Heat') {
            args.node.color = '#FFA07A';
        } else {
            args.node.color = '#98D8C8';
        }
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height="450px"
                    nodeRendering={nodeRendering}
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
