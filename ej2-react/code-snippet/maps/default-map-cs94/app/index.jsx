{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Selection, Inject } from '@syncfusion/ej2-react-maps';
class App extends React.Component {
    mapsInstance;
    selectclickHandler() {
        this.mapsInstance.shapeSelection(0, "continent", "Asia", true);
    }
    unselectclickHandler() {
        this.mapsInstance.shapeSelection(0, "continent", "Asia", false);
    }
    render() {
        return (<div>
      <MapsComponent id="maps" ref={maps => this.mapsInstance = maps}>
            <Inject services={[Selection]}/>
                <LayersDirective>
                    <LayerDirective shapeData={world_map} selectionSettings={{
                enable: true,
                fill: 'green',
                border: { color: 'white', width: 2 }
            }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
            <button value='select' onClick={this.selectclickHandler.bind(this)}>select</button>
            <button value='unselect' onClick={this.unselectclickHandler.bind(this)}>unselect</button></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('maps'));
{% endraw %}