import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SankeyComponent, Inject, SankeyTooltip, SankeyLegend, SankeyExport,
    SankeyNodeDirective,
    SankeyNodesCollectionDirective,
    SankeyLinkDirective,
    SankeyLinksCollectionDirective
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

function App() {
    const onLoaded = () => {
        const element = document.getElementById('sankey-container');
        if (element) element.setAttribute('title', '');
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <SankeyComponent
                    id="sankey-container"
                    width="90%"
                    height={Browser.isDevice ? '600px' : '450px'}
                    title="California Energy Consumption in 2023"
                    subTitle="Source: Lawrence Livermore National Laboratory"
                    linkStyle={{ opacity: 0.6, curvature: 0.55, colorType: 'Source' }}
                    labelSettings={{ visible: Browser.isDevice ? false : true }}
                    tooltip={{ enable: true }}
                    legendSettings={{ visible: true, position: 'Bottom', itemPadding: 8 }}
                    loaded={onLoaded}
                >
                    <SankeyNodesCollectionDirective>
                        <SankeyNodeDirective id="Electricity Generation" offset={-120} />
                        <SankeyNodeDirective id="Residential" offset={38} />
                        <SankeyNodeDirective id="Commercial" offset={36} />
                        <SankeyNodeDirective id="Industrial" offset={34} />
                        <SankeyNodeDirective id="Transportation" offset={32} />
                        <SankeyNodeDirective id="Rejected Energy" offset={-40} />
                        <SankeyNodeDirective id="Energy Services" />
                        <SankeyNodeDirective id="Solar" />
                        <SankeyNodeDirective id="Nuclear" />
                        <SankeyNodeDirective id="Wind" />
                        <SankeyNodeDirective id="Geothermal" />
                        <SankeyNodeDirective id="Natural Gas" />
                        <SankeyNodeDirective id="Coal" />
                        <SankeyNodeDirective id="Biomass" />
                        <SankeyNodeDirective id="Petroleum" offset={-10} />
                    </SankeyNodesCollectionDirective>
                    <SankeyLinksCollectionDirective>
                        <SankeyLinkDirective sourceId="Solar" targetId="Electricity Generation" value={454} />
                        <SankeyLinkDirective sourceId="Nuclear" targetId="Electricity Generation" value={185} />
                        <SankeyLinkDirective sourceId="Wind" targetId="Electricity Generation" value={47.8} />
                        <SankeyLinkDirective sourceId="Geothermal" targetId="Electricity Generation" value={40} />
                        <SankeyLinkDirective sourceId="Natural Gas" targetId="Electricity Generation" value={800} />
                        <SankeyLinkDirective sourceId="Coal" targetId="Electricity Generation" value={28.7} />
                        <SankeyLinkDirective sourceId="Biomass" targetId="Electricity Generation" value={50} />
                        <SankeyLinkDirective sourceId="Electricity Generation" targetId="Residential" value={182} />
                        <SankeyLinkDirective sourceId="Natural Gas" targetId="Residential" value={400} />
                        <SankeyLinkDirective sourceId="Petroleum" targetId="Residential" value={50} />
                        <SankeyLinkDirective sourceId="Electricity Generation" targetId="Commercial" value={351} />
                        <SankeyLinkDirective sourceId="Natural Gas" targetId="Commercial" value={300} />
                        <SankeyLinkDirective sourceId="Electricity Generation" targetId="Industrial" value={641} />
                        <SankeyLinkDirective sourceId="Natural Gas" targetId="Industrial" value={786} />
                        <SankeyLinkDirective sourceId="Biomass" targetId="Industrial" value={563} />
                        <SankeyLinkDirective sourceId="Petroleum" targetId="Industrial" value={300} />
                        <SankeyLinkDirective sourceId="Electricity Generation" targetId="Transportation" value={20} />
                        <SankeyLinkDirective sourceId="Natural Gas" targetId="Transportation" value={51} />
                        <SankeyLinkDirective sourceId="Biomass" targetId="Transportation" value={71} />
                        <SankeyLinkDirective sourceId="Petroleum" targetId="Transportation" value={2486} />
                        <SankeyLinkDirective sourceId="Residential" targetId="Rejected Energy" value={432} />
                        <SankeyLinkDirective sourceId="Commercial" targetId="Rejected Energy" value={351} />
                        <SankeyLinkDirective sourceId="Industrial" targetId="Rejected Energy" value={972} />
                        <SankeyLinkDirective sourceId="Transportation" targetId="Rejected Energy" value={1920} />
                        <SankeyLinkDirective sourceId="Residential" targetId="Energy Services" value={200} />
                        <SankeyLinkDirective sourceId="Commercial" targetId="Energy Services" value={300} />
                        <SankeyLinkDirective sourceId="Industrial" targetId="Energy Services" value={755} />
                        <SankeyLinkDirective sourceId="Transportation" targetId="Energy Services" value={637} />
                    </SankeyLinksCollectionDirective>
                    <Inject services={[SankeyTooltip, SankeyLegend, SankeyExport]} />
                </SankeyComponent>
            </div>
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sankey'));


