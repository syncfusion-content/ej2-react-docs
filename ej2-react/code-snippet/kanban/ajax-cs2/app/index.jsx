{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ajax } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
function App() {
    let kanban;
    function componentDidMount() {
        const ajax = new Ajax("https://services.syncfusion.com/react/production/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = (data) => {
            if (kanban) {
                kanban.dataSource = JSON.parse(data);
            }
        };
    }
    return (<KanbanComponent ref={kanban => kanban = kanban} id="kanban" keyField="ShipCountry" dataSource={data} cardSettings={{ contentField: "ShippedDate", headerField: "OrderID" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="Denmark" keyField="Denmark"/>
          <ColumnDirective headerText="Brazil" keyField="Brazil"/>
          <ColumnDirective headerText="Switzerland" keyField="Switzerland"/>
          <ColumnDirective headerText="Germany" keyField="Germany"/>
        </ColumnsDirective>
      </KanbanComponent>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));
{% endraw %}