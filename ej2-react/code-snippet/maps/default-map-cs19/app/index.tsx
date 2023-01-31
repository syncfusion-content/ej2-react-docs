{% raw %}


import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
ReactDOM.render(
            <MapsComponent id="maps" titleSettings={{
                text: 'Maps Component',
                textStyle: {
                    color: 'red',
                    fontStyle: 'italic',
                    fontWeight: 'regular',
                    fontFamily: 'arial',
                    size: '14px'
                },
                alignment: 'Center'
            }}>
                <LayersDirective>
                    <LayerDirective shapeData={world_map}
                        shapeSettings={ {
                            autofill: true
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);



{% endraw %}