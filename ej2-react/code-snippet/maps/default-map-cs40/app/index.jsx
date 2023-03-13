{% raw %}
import { africa_continent } from 'africa-continent.ts';
import * as React from 'react';
import { MapsComponent, LayersDirective, LayerDirective, Inject, Annotations } from '@syncfusion/ej2-react-maps';
import * as ReactDOM from 'react-dom';

const SAMPLE_CSS = `
    .control-fluid {
    padding: 0px !important;
    }
    #annotation {
        color: #DDDDDD;
        font-size: 12px;
        font-family: Roboto;
        background: #3E464C;
        margin: 20px;
        padding: 10px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        width: 300px;
        -moz-box-shadow: 0px 2px 5px #666;
        -webkit-box-shadow: 0px 2px 5px #666;
        box-shadow: 0px 2px 5px #666;
    }`;
export function App() {
    return (
      <div className="control-pane">
        <style>{SAMPLE_CSS}</style>
        <div className="control-section row">
          <MapsComponent
            annotations={[
              {
                content: '#maps-annotation',
                x: '0%',
                y: '70%'
              }
            ]}
          >
            <Inject services={[Annotations]} />
            <LayersDirective>
              <LayerDirective shapeData={africa_continent} />
            </LayersDirective>
          </MapsComponent>
        </div>
        <div id="maps-annotation" style={{ display: 'none' }}>
          <div id="annotation">
            <div
              style={{ marginLeft: '10px', fontSize: '13px', fontWeight: 500 }}
            >
              <h5 style={{ marginLeft: '40px' }}>Facts about Africa</h5>
            </div>
            <hr />
            <div>
              <ul style={{ listStyleType: 'disc' }}>
                <li>
                  Africa is the second largest and second most populated
                  continent in the world.
                </li>
                <li style={{ paddingTop: '5px' }}>
                  Africa has 54 sovereign states and 10 non-sovereign
                  territories.
                </li>
                <li style={{ paddingTop: '5px' }}>
                  Algeria is the largest country in Africa, where as Mayotte is
                  the smallest.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}