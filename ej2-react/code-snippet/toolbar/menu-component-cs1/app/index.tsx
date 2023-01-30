


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarComponent, MenuComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';

const data = [
  {
    text: 'Appliances',
    items: [
      {
        text: 'Kitchen',
        items: [
          { text: 'Electric Cookers' },
          { text: 'Coffee Makers' },
          { text: 'Blenders' },
        ],
      },
      {
        text: 'Washing Machine',
        items: [{ text: 'Fully Automatic' }, { text: 'Semi Automatic' }],
      },
      {
        text: 'Air Conditioners',
        items: [
          { text: 'Inverter ACs' },
          { text: 'Split ACs' },
          { text: 'Window ACs' },
        ],
      },
    ],
  },
  {
    text: 'Accessories',
    items: [
      {
        text: 'Mobile',
        items: [
          { text: 'Headphones' },
          { text: 'Memory Cards' },
          { text: 'Power Banks' },
        ],
      },
      {
        text: 'Computer',
        items: [
          { text: 'Pendrives' },
          { text: 'External Hard Disks' },
          { text: 'Monitors' },
        ],
      },
    ],
  },
  {
    text: 'Fashion',
    items: [
      {
        text: 'Men',
        items: [
          { text: 'Shirts' },
          { text: 'Jackets' },
          { text: 'Track Suits' },
        ],
      },
      {
        text: 'Women',
        items: [{ text: 'Kurtas' }, { text: 'Salwars' }, { text: 'Sarees' }],
      },
    ],
  },
  {
    text: 'Home & Living',
    items: [
      {
        text: 'Furniture',
        items: [
          { text: 'Beds' },
          { text: 'Mattresses' },
          { text: 'Dining Tables' },
        ],
      },
      {
        text: 'Decor',
        items: [
          { text: 'Clocks' },
          { text: 'Wall Decals' },
          { text: 'Paintings' },
        ],
      },
    ],
  },
];

function App() {

  function contentTemplate() {
    return (<MenuComponent items={data}></MenuComponent>);
  }
  return (
    <div id='container'>
      <ToolbarComponent id="toolbar">
        <ItemsDirective>
          <ItemDirective text="Cut" />
          <ItemDirective text="Copy" />
          <ItemDirective template={contentTemplate} />
          <ItemDirective text="Paste" />
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);


