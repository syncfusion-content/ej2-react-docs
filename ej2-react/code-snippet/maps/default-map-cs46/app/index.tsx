
{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject } from '@syncfusion/ej2-react-maps';
import { setCulture } from '@syncfusion/ej2-base';
setCulture('de');

ReactDOM.render(
            <MapsComponent id="maps" format='c' useGroupingSeparator={true}>
                <Inject services={[MapsTooltip]} />
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='Country' shapePropertyPath='name'         dataSource={[
                        { "Country": "China", "Membership": "Permanent", population: '38332521' },
                        { "Country": "France", "Membership": "Permanent", population: '19651127' },
                        { "Country": "Russia", "Membership": "Permanent", population: '3090416' },
                        { "Country": "Kazakhstan", "Membership": "Non-Permanent", population: '1232521' },
                        { "Country": "Poland", "Membership": "Non-Permanent", population: '90332521'},
                        { "Country": "Sweden", "Membership": "Non-Permanent", population: '383521' }
                    ]}
                        shapeSettings={ {
                            colorValuePath: 'Membership',
                            colorMapping: [
                                { value: 'Permanent', color: '#D84444' },
                                { value: 'Non-Permanent', color: '#316DB5' }
                            ]
                        } }
                        tooltipSettings={ {
                            visible: true,
                            valuePath: 'population'
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
document.getElementById("maps") as HTMLElement
);
{% endraw %}

