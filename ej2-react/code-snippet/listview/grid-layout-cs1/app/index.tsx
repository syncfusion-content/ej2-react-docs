


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

function App() {

  //Define an array of number
  let data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function listtemplate(): JSX.Element {
    return (
      <img id="listImage" src="https://ej2.syncfusion.com/documentation/code-snippet/listview/grid-layout-cs1/apple.png" alt="apple" />
    )
  };

  return (
    <ListViewComponent id='list'
      dataSource={data}
      template={listtemplate as any} >
    </ListViewComponent>
  )
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



