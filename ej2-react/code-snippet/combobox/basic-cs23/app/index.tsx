

import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
 // defined the array of data
  private sportsData: { [key: string]: Object }[] = [
    { Id: 'game1', Game: 'Badminton' },
    { Id: 'game2', Game: 'Football' },
    { Id: 'game3', Game: 'Tennis' }
  ];

   // maps the appropriate column to fields property
   private fields: object= { text: 'Game', value: 'Id' };

  public render() {
    return (
      // specifies the tag for render the ComboBox component
      <ComboBoxComponent id="comboelement" fields={this.fields} dataSource={this.sportsData} allowCustom={true} placeholder="Select a game" />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


