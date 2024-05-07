import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class ReactApp extends React.Component {
    fields = { text: 'todoList' };
    // define the array of JSON
    todoList = [
        { todoList: 'Pay Bills' },
        { todoList: 'Call Chris' },
        { todoList: 'Meet Andrew' },
        { todoList: 'Visit Manager' },
        { todoList: 'Customer Meeting' },
    ];
    render() {
        return (<div>
        <div className="e-card" id="basic">
          <div className="e-card-title">To-Do List</div>
          <div className="e-card-separator"/>
          <div className="e-card-content">
            <ListViewComponent dataSource={this.todoList} fields={this.fields} showCheckBox={true}/>
          </div>
        </div>
      </div>);
    }
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
