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
                    labelSettings={{
                        visible: true
                    }}
                >
                    <SankeyNodesCollectionDirective>
                        <SankeyNodeDirective id="Agricultural Waste" label={{text: 'Agri Waste', padding : 0}} />
                        <SankeyNodeDirective id="Biomass Residues" label={{text: 'Biomass', padding : 10}} />
                        <SankeyNodeDirective id="Bio-conversion" label={{text: 'Bio', padding : 0}} />
                        <SankeyNodeDirective id="Liquid Biofuel" label={{text: 'Liquid', padding : 10}} />
                        <SankeyNodeDirective id="Electricity" label={{text: 'Electricity', padding : 0}} />
                        <SankeyNodeDirective id="Heat" label={{text: 'Heat', padding : 10}} />
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
