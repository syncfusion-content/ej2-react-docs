import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SankeyComponent,
    Inject,
    SankeyTooltip,
    SankeyLegend,
    SankeyExport,
    SankeyNodeDirective,
    SankeyNodesCollectionDirective,
    SankeyLinkDirective,
    SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';

function App() {
    const onLinkRendering = (args) => {
        // Customize link appearance during rendering
        if (args.link.value > 50) {
            args.fill = '#FF6B6B'
        } else {
            args.fill = '#70AD47'
        }
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height="450px"
                    linkRendering={onLinkRendering}
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
