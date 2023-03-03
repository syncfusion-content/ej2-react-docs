


import { MultiSelectComponent, TaggingEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // define the JSON of data
  const colorsData: { [key: string]: Object }[] =[
    { Color: 'Chocolate', Code: '#75523C' },
    { Color: 'CadetBlue', Code: '#3B8289' },
    { Color: 'DarkOrange', Code: '#FF843D' },
    { Color: 'DarkRed', Code: '#CA3832' },
    { Color: 'Fuchsia', Code: '#D44FA3' },
    { Color: 'HotPink', Code: '#F23F82' },
    { Color: 'Indigo', Code: '#2F5D81' },
    { Color: 'LimeGreen', Code: '#4CD242' },
    { Color: 'OrangeRed', Code: '#FE2A00' },
    { Color: 'Tomato', Code: '#FF745C' }
];
  // maps the appropriate column to fields property
  const fields: { [key: string]: string } = { text: 'Color', value: 'Code' };
  // set the value to MultiSelect
  const colorValues: string[] = ['#75523C', '#4CD242', '#FF745C'];
  // bind the tagging event
  function onTagging = (e: TaggingEventArgs) => {
    // set the current selected item text as class to chip element.
    e.setClass((e.itemData as any)[fields.text].toLowerCase());
  }
  return (
      <MultiSelectComponent id="chip-customization" value={colorValues} dataSource={colorsData} fields={fields} mode="Box" placeholder="Favorite Colors" tagging={onTagging = onTagging.bind(this)} />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


