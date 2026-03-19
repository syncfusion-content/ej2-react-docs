import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SankeyComponent,
    Inject,
    SankeyTooltip,
    SankeyExport,
    SankeyLegend,
    SankeyNodeDirective,
    SankeyNodesCollectionDirective,
    SankeyLinkDirective,
    SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';
import { SankeyNodeModel, SankeyLinkModel, SankeyTooltipRenderEventArgs } from '@syncfusion/ej2-react-charts';

function App() {
    const onTooltipRendering = (args: SankeyTooltipRenderEventArgs) => {
        // Customize tooltip content dynamically
        if (args.link) {
            args.text = `Flow: ${args.link.sourceId} → ${args.link.targetId} (${args.link.value})`;
        } else {
            args.text = `Node: ${args.node.label}`;
        }
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height="450px"
                    nodes={nodes}
                    links={links}
                    tooltip={{ enable: true }}
                    tooltipRendering={onTooltipRendering}
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

