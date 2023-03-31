{% raw %}
import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MapsTooltip, Inject, MarkersDirective, MarkerDirective, Marker } from '@syncfusion/ej2-react-maps';
export function App() {
    return(<div><MapsComponent>
        <Inject services={[MapsTooltip, Marker]} />
        <LayersDirective>
          <LayerDirective
            shapeData={world_map}
            shapeSettings={{
              fill: '#C3E6ED',
            }}
          >
            <MarkersDirective>
              <MarkerDirective
                enableDrag={true}
                visible={true}
                animationDuration={0}
                dataSource={[
                  {
                    latitude: 49.95121990866204,
                    longitude: 18.468749999999998,
                    name: 'MarkerOne',
                  },
                  {
                    latitude: 59.88893689676585,
                    longitude: -109.3359375,
                    name: 'MarkerTwo',
                  },
                  {
                    latitude: -6.64607562172573,
                    longitude: -55.54687499999999,
                    name: 'MarkerThree',
                  },
                  {
                    latitude: 23.644385824912135,
                    longitude: 77.83189239539234,
                    name: 'MarkerFour',
                  },
                  {
                    latitude: 63.66569332894224,
                    longitude: 98.2225173953924,
                    name: 'MarkerFive',
                  },
                ]}
                shape="Balloon"
                width={20}
                height={20}
                border={{ width: 2, color: '#285255' }}
                tooltipSettings={{
                  visible: true,
                  valuePath: 'name',
                }}
              ></MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}