


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function App() {
  // define the array of Json
  let arts: { [key: string]: string }[] = [
    {
      'text': 'Audi A4',
      'id': '9bdb',
      'category': 'Audi'
    },
    {
      'text': 'Audi A5',
      'id': '4589',
      'category': 'Audi'
    },
    {
      'text': 'BMW 501',
      'id': 'f849',
      'category': 'BMW'
    },
    {
      'text': 'BMW 502',
      'id': '7aff',
      'category': 'BMW'
    }
  ];

  let fields = { groupBy: 'category', tooltip: 'text' };
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='list' dataSource={arts} fields={fields} ></ListViewComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


