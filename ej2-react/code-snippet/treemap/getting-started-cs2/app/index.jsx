
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

export function App() {
  return (
    <TreeMapComponent
      height="350px"
      dataSource={[
        {
          Title: 'State wise International Airport count in South America',
          State: 'Brazil',
          Count: 25,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Colombia',
          Count: 12,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Argentina',
          Count: 9,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Ecuador',
          Count: 7,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Chile',
          Count: 6,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Peru',
          Count: 3,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Venezuela',
          Count: 3,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Bolivia',
          Count: 2,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Paraguay',
          Count: 2,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Uruguay',
          Count: 2,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Falkland Islands',
          Count: 1,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'French Guiana',
          Count: 1,
          Brand: 'Ford',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Guyana',
          Count: 1,
          Brand: 'Maruti',
        },
        {
          Title: 'State wise International Airport count in South America',
          State: 'Suriname',
          Count: 1,
          Brand: 'Ford',
        },
      ]}
      weightValuePath="Count"
      equalColorValuePath="Brand"
      leafItemSettings={{
        labelPath: 'State',
        colorMapping: [
          {
            value: 'Ford',
            color: '#634D6F',
          },
          {
            value: 'Maruti',
            color: '#B34D6D',
          },
        ],
      }}
    ></TreeMapComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
