import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Print, DataLabel } from '@syncfusion/ej2-react-maps';
class App extends React.Component {
    maps;
    clickHandler() {
        this.maps.print();
    }
    render() {
        return (<div>
        <ButtonComponent value='export' onClick={this.clickHandler.bind(this)}>print</ButtonComponent>
            <MapsComponent id="maps" allowPrint={true} ref={g => this.maps = g}>
                <Inject services={[DataLabel, Print]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} dataLabelSettings={{
                visible: true,
                labelPath: 'name',
                smartLabelMode: 'Trim'
            }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('maps'));
