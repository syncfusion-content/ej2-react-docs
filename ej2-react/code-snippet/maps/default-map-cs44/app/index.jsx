
import { usa_map } from 'usa.ts';
import { california } from 'california.ts';
import { texas } from 'texas.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
export function App() {
return(
      <MapsComponent >
        <LayersDirective>
          <LayerDirective shapeData={usa_map}
                          shapeSettings={ {
                              fill: '#E5E5E5',
                              border: {
                                  color: 'black',
                                  width: 0.1
                              }
                          } }>
          </LayerDirective>
          <LayerDirective shapeData={texas}
                          type='SubLayer'
                          shapeSettings= { {
                              fill: 'rgba(141, 206, 255, 0.6)',
                              border: {
                                  color: '#1a9cff',
                                  width: 0.25
                              }
                          } }>
          </LayerDirective>
          <LayerDirective shapeData={california}
                          type='SubLayer'
                          shapeSettings= { {
                              fill: 'rgba(141, 206, 255, 0.6)',
                              border: {
                                  color: '#1a9cff',
                                  width: 0.25
                              }
                          } }>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
      );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
 