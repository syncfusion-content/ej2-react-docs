


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
  let data: string[] = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];

  return (
    <ListBoxComponent dataSource={data} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



