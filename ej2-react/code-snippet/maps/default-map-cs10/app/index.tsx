

import { world_map } from 'world-map.ts';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
} from '@syncfusion/ej2-react-maps';
import {
  BubblesDirective,
  BubbleDirective,
  Bubble,
} from '@syncfusion/ej2-react-maps';
export function App() {
  return (
    <MapsComponent>
      <Inject services={[Bubble]} />
      <LayersDirective>
        <LayerDirective
          shapeData={world_map}
          shapeDataPath="country"
          shapePropertyPath="name"
        >
          <BubblesDirective>
            <BubbleDirective
              visible={true}
              valuePath="femaleRatio"
              colorValuePath="femaleRatioColor"
              dataSource={[
                {
                  country: 'United States',
                  femaleRatio: 50.50442726,
                  maleRatio: 49.49557274,
                  femaleRatioColor: '#99295D',
                  maleRatioColor: 'blue',
                },
                {
                  country: 'India',
                  femaleRatio: 48.18032713,
                  maleRatio: 51.81967287,
                  femaleRatioColor: '#2E769F',
                  maleRatioColor: '#c2d2d6',
                },
                {
                  country: 'Oman',
                  femaleRatio: 34.15597234,
                  maleRatio: 65.84402766,
                  femaleRatioColor: '#816F28',
                  maleRatioColor: 'orange',
                },
                {
                  country: 'United Arab Emirates',
                  femaleRatio: 27.59638942,
                  maleRatio: 72.40361058,
                  femaleRatioColor: '#364A98',
                  maleRatioColor: 'orange',
                },
              ]}
              minRadius={5}
              maxRadius={20}
            />
            <BubbleDirective
              visible={true}
              bubbleType="Circle"
              valuePath="maleRatio"
              colorValuePath="maleRatioColor"
              dataSource={[
                {
                  country: 'France',
                  femaleRatio: 50.50442726,
                  maleRatio: 49.49557274,
                  femaleRatioColor: 'green',
                  maleRatioColor: '#c2d2d6',
                },
                {
                  country: 'China',
                  femaleRatio: 48.18032713,
                  maleRatio: 51.81967287,
                  femaleRatioColor: 'blue',
                  maleRatioColor: '#09156d',
                },
                {
                  country: 'Kazakhstan',
                  femaleRatio: 34.15597234,
                  maleRatio: 65.84402766,
                  femaleRatioColor: '#09156d',
                  maleRatioColor: 'yellow',
                },
                {
                  country: 'Poland',
                  femaleRatio: 27.59638942,
                  maleRatio: 72.40361058,
                  femaleRatioColor: '#09156d',
                  maleRatioColor: 'orange',
                },
              ]}
              minRadius={15}
              maxRadius={25}
              opacity={0.4}
            />
          </BubblesDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


