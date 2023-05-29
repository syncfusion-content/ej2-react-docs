

import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp () {
  let fields = { text: 'todoList' };
  // define the array of JSON
  let todoList: any = [
    { todoList: 'Pay Bills' },
    { todoList: 'Call Chris' },
    { todoList: 'Meet Andrew' },
    { todoList: 'Visit Manager' },
    { todoList: 'Customer Meeting' },
  ];

    return (
      <div>
        <div className="e-card" id="basic">
          <div className="e-card-title">To-Do List</div>
          <div className="e-card-separator" />
          <div className="e-card-content">
            <ListViewComponent dataSource={todoList} fields={fields} showCheckBox={true} />
          </div>
        </div>
      </div>
    );

}
ReactDOM.render(<ReactApp />, document.getElementById("element"));


