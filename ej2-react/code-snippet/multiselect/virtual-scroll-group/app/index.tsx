
import { MultiSelectComponent, Inject, VirtualScroll } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // maps the appropriate column to fields property
  private fields: object = {groupBy: 'group', text: 'text', value: 'id' };

   // define the array of string
   private records: { [key: string]: Object }[] = [];
   
   // define the array of string
  constructor(props) {
    super(props);
    for (let i = 1; i <= 150; i++) {
      const item: { id: string, text: string, group: string } = {
        id: 'id' + i,
        text: `Item ${i}`,
        group: ''
      };

      // Generate a random number between 1 and 4 to determine the group
      const randomGroup = Math.floor(Math.random() * 4) + 1;
      switch (randomGroup) {
        case 1:
          item.group = 'Group A';
          break;
        case 2:
          item.group = 'Group B';
          break;
        case 3:
          item.group = 'Group C';
          break;
        case 4:
          item.group = 'Group D';
          break;
        default:
          break;
      }
      this.records.push(item);
    }
  }

  public render() {
    return (
      // specifies the tag for render the DropDownList component
      <MultiSelectComponent id="datas" dataSource={this.records} placeholder="e.g. Item 1" enableVirtualization={true} allowFiltering={true} fields={this.fields} popupHeight="200px" >
      <Inject services={[VirtualScroll]}/>
  </MultiSelectComponent>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


