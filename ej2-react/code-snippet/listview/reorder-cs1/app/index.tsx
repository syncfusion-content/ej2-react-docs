


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import {DragAndDropEventArgs } from '@syncfusion/ej2-navigations';

function App() {
  //Define an array of JSON data
  let data: any[] = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" },
    { text: "Aston Martin One- 77", id: "list-07" },
    { text: "Jaguar XJ220", id: "list-08" },
    { text: "McLaren P1", id: "list-09" },
    { text: "Ferrari LaFerrari", id: "list-10" }
  ];

  let field: object = { dataSource: data, id: "id", text: "text" };

  function onDragStop(args: DragAndDropEventArgs) {
    //Block the Child Drop operation in TreeView
    let draggingItem: HTMLCollection = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
      draggingItem[0].classList.add("e-no-drop");
      args.cancel = true;
    }
  }

  return (
    <TreeViewComponent
      id="treeview"
      allowDragAndDrop={true}
      nodeDragging={onDragStop.bind(this) as any}
      nodeDragStop={onDragStop.bind(this) as any}
      fields={field}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



