


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // define the array of data
  let sportsData: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
        // specifies the tag for render the MultiSelect component
      <MultiSelectComponent id="mtselement" dataSource={sportsData}  placeholder="Find a game" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


