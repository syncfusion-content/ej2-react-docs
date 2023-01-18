{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, Zoom, Inject } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps" zoomSettings={{ enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'] }}>
            <Inject services={[Zoom]}/>
                <LayersDirective>
                    <LayerDirective urlTemplate='https://tile.openstreetmap.org/level/tileX/tileY.png'/>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
{% endraw %}