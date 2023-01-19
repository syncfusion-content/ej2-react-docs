
{% raw %}

import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='name' shapePropertyPath='name'
                                    dataSource={[
                                        {
                                            'code': 'AF',
                                            'value': 53,
                                            'name': 'Afghanistan',
                                            'population': 29863010,
                                            'density': 119,
                                            'color': '#DEEBAE'
                                        },
                                        {
                                            'code': 'AL',
                                            'value': 117,
                                            'name': 'Albania',
                                            'population': 3195000,
                                            'density': 111,
                                            'color': '#A4D6AD'
                                        },
                                        {
                                            'code': 'DZ',
                                            'value': 15,
                                            'name': 'Algeria',
                                            'population': 34895000,
                                            'density': 15,
                                            'color': '#37AFAB'
                                        },
                                        {
                                            'code': 'AO',
                                            'value': 15,
                                            'name': 'Angola',
                                            'population': 18498000,
                                            'density': 15,
                                            'color': '#547C84'
                                        },
                                        {
                                            'code': 'AR',
                                            'value': 15,
                                            'name': 'Argentina',
                                            'population': 40091359,
                                            'density': 14,
                                            'color': '#CEBF93'
                                        },
                                        {
                                            'code': 'AM',
                                            'value': 109,
                                            'name': 'Armenia',
                                            'population': 3230100,
                                            'density': 108,
                                            'color': '#a69d70'
                                        }
                                    ]}
                                    shapeSettings={{
                                        colorValuePath: 'color',
                                        fill: '#E5E5E5'
                                    }}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);
{% endraw %}


