

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, Inject, ImageExport } from '@syncfusion/ej2-react-maps';

class App extends React.Component<{}, {}>{
    private maps: MapsComponent;
    public clickHandler(){
        this.maps.export('PNG', 'Maps');
    }
render() {
        return (<div>
        <ButtonComponent value='export' onClick= { this.clickHandler.bind(this)}>Export</ButtonComponent>
            <MapsComponent id="maps" allowImageExport={true}
                                     ref={g => this.maps = g}
                                     titleSettings={ { text: 'OSM' } }>
                <Inject services={[ImageExport]} />
                <LayersDirective>
                    <LayerDirective urlTemplate="https://tile.openstreetmap.org/level/tileX/tileY.png">
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent></div>)
        }
};
ReactDOM.render(<App />, document.getElementById('maps'));


