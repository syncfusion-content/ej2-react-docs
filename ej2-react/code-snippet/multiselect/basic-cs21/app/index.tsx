


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
  // define the array of data
  private sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  public render() {
    return (
        // specifies the tag for render the MultiSelect component
      <MultiSelectComponent id="mtselement" dataSource={this.sportsData}  placeholder="Find a game" />
    );
  }
}
ReactDOM.render(<App />, document.getElementById('sample'));


