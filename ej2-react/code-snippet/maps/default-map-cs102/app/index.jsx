import { world_map } from 'world-map.ts';
import { default_data } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject } from '@syncfusion/ej2-react-maps';
class App extends React.Component {
    render() {
        return (<div><MapsComponent id="maps">
        <Inject services={[MapsTooltip]}/>
            <LayersDirective>
              <LayerDirective shapeData={world_map} dataSource={default_data} shapeDataPath='continent' shapePropertyPath='continent' tooltipSettings={{
                visible: true,
                valuePath: 'continent',
                template: '<div style="width:60px; text-align:center; background-color: white; border: 2px solid black; padding-bottom: 10px;padding-top: 10px;padding-left: 10px;padding-right: 10px;"><span>${continent}</span></div>',
                textStyle: {
                    color: 'black'
                }
            }}/>
            </LayersDirective>
           </MapsComponent></div>);
    }
}
ReactDOM.render(<App />, document.getElementById('maps'));
