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
import { SankeyNodeModel, SankeyLinkModel, SankeyLabelRenderEventArgs } from '@syncfusion/ej2-react-charts';

function App() {
    const onLabelRendering = (args: SankeyLabelRenderEventArgs) => {
        // Customize label rendering based on node name
        if (args.text === 'Agricultural Waste 84.152') {
            args.labelStyle = { fontWeight: 'bold', color: '#FF6B6B', fontSize: '14px', fontFamily: 'Arial', fontStyle: 'normal' };
        }
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height="450px"
                    labelSettings={{ visible: true }}
                    labelRendering={onLabelRendering}
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
