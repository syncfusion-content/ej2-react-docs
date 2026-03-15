import * as React from "react";
import * as ReactDOM from "react-dom";
import { SankeyComponent, SankeyNodeDirective, SankeyNodesCollectionDirective, SankeyLinkDirective, SankeyLinksCollectionDirective, Inject, SankeyTooltip, SankeyLegend, SankeyExport, SankeyLegendRenderEventArgs } from '@syncfusion/ej2-react-charts';

function App() {
  const onLegendItemRendering = (args: SankeyLegendRenderEventArgs) => {
    // Customize legend item appearance and text
    args.text = args.text.toUpperCase();
    args.fill = '#333'
  };

  return (
    <div className="control-pane">
      <div className="control-section" id="sankey-container">
        <SankeyComponent
          width="90%"
          height="450px"
          legendSettings={{
            visible: true,
            position: 'Bottom'
          }}
          legendItemRendering={onLegendItemRendering}
        >
          <SankeyNodesCollectionDirective>
            <SankeyNodeDirective id='Agricultural Waste' />
            <SankeyNodeDirective id='Bio-conversion' />
            <SankeyNodeDirective id='Liquid Biofuel' />
            <SankeyNodeDirective id='Electricity' />
            <SankeyNodeDirective id='Heat' />
          </SankeyNodesCollectionDirective>
          <SankeyLinksCollectionDirective>
            <SankeyLinkDirective sourceId='Agricultural Waste' targetId='Bio-conversion' value={124.729} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Liquid Biofuel' value={0.597} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Electricity' value={26.862} />
            <SankeyLinkDirective sourceId='Bio-conversion' targetId='Heat' value={280.845} />
          </SankeyLinksCollectionDirective>
          <Inject services={[SankeyTooltip, SankeyLegend, SankeyExport]} />
        </SankeyComponent>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sankey'));

