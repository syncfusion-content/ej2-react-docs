


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function App() {
  // define the array of Json
  let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];
  return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='list' dataSource={arts} ></ListViewComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


