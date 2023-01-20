


import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { MapsComponent, LayersDirective, LayerDirective, DataLabel, Inject, ImageExport } from '@syncfusion/ej2-react-maps';

class App extends React.Component<{}, {}>{
    private maps: MapsComponent;
    public clickHandler(){
        this.maps.export('PNG', 'Maps', null, false).then((data: string)=>{
            document.getElementById('data').innerHTML = data;
        })
    }
render(){
        return (<div>
        <ButtonComponent value='export' onClick= { this.clickHandler.bind(this)}>Export</ButtonComponent>
            <MapsComponent id="maps" allowImageExport={true} ref={g => this.maps = g}>
                <Inject services={[DataLabel, ImageExport]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                     dataLabelSettings={ {
                            visible: true,
                            labelPath: 'name',
                            smartLabelMode: 'Trim'
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent><div id="data"></div></div>)
        }
};
ReactDOM.render(<App />, document.getElementById('maps'));


