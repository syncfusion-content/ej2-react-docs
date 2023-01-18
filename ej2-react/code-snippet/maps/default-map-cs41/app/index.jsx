{% raw %}
import { world_map } from 'world-map.ts';
import { africa_continent } from 'africa-continent.ts';
import { dafaultData } from 'data.ts';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Highlight, Marker, MarkerDirective, MarkersDirective } from '@syncfusion/ej2-react-maps';
class App extends React.Component {
    shapeSelected(args) {
        let shape = args.shapeData.continent;
        if (this.mapInstance.baseLayerIndex === 0) {
            if (shape === 'Africa') {
                this.mapInstance.baseLayerIndex = 1;
                this.mapInstance.refresh();
            }
        }
    }
    render() {
        return (<MapsComponent id="element" height="400" ref={m => (this.mapInstance = m)} shapeSelected={this.shapeSelected.bind(this)}>
        <Inject services={[Highlight, Marker]}/>
        <LayersDirective>
          <LayerDirective shapeData={world_map} layerType="Geometry" shapeDataPath="continent" shapePropertyPath="continent" dataSource={dafaultData} shapeSettings={{
                colorValuePath: 'drillColor'
            }}>
            <MarkersDirective>
              <MarkerDirective visible={true} template='<div style="font-size: 12px;color:white;text-shadow: 0px 1px 1px black;font-weight: 500;width:50px">Africa</div>' dataSource={[
                { latitude: 10.97274101999902, longitude: 16.390625 }
            ]} animationDuration={0}/>
            </MarkersDirective>
          </LayerDirective>
          <LayerDirective layerType="Geometry" shapeData={africa_continent} shapeSettings={{
                fill: '#80306A'
            }} highlightSettings={{
                enable: true,
                fill: '#80306A'
            }}/>
        </LayersDirective>
      </MapsComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('maps'));
{% endraw %}