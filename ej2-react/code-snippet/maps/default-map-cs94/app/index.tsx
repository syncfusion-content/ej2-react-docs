


import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Selection, Inject } from '@syncfusion/ej2-react-maps';

export function App() {
    let mapsInstance;
    function selectclickHandler() {
    mapsInstance.shapeSelection(0, "continent", "Asia", true);
    }
    function unselectclickHandler() {
       mapsInstance.shapeSelection(0, "continent", "Asia", false);
    }
    return (<div>
      <MapsComponent  ref={maps => mapsInstance = maps}>
            <Inject services={[Selection]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map} selectionSettings={ {
                        enable: true,
                        fill: 'green',
                        border: { color: 'white', width: 2 }
                    } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
            <button value='select' onClick={selectclickHandler}>select</button>
            <button value='unselect' onClick={unselectclickHandler}>unselect</button></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



