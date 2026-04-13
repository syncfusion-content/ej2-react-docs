import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import {
  ItemDirective,
  ItemsDirective,
  MenuComponent,
  ToolbarComponent,
} from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

const COLORS = ['Red', 'Orange', 'Blue', 'Yellow', 'Brown', 'Black'];
const ELECTRONICS = [
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
];

const App = () => {
  const [counter, setCounter] = useState(0);

  const colorsDropdown = new DropDownList({
    dataSource: COLORS,
    width: 50,
    index: 2,
  });

  const electronicsMenu = () => {
    return (<MenuComponent items={ELECTRONICS}></MenuComponent>);
  }

  return (
    <div id='container'>
      <ButtonComponent onClick={() => setCounter(counter + 1)}>
        Counter {counter}
      </ButtonComponent>
      <ToolbarComponent statelessTemplates={['directiveTemplates']}>
        <ItemsDirective>
          <ItemDirective text="Cut" />
          <ItemDirective text="Copy" />
          <ItemDirective text="Paste" />
          <ItemDirective type="Separator" />
          <ItemDirective type="Input" template={colorsDropdown} />
          <ItemDirective template={electronicsMenu} />
        </ItemsDirective>
      </ToolbarComponent>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);
