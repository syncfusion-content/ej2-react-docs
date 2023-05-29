{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
class App extends React.Component {
    data = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
        adaptor: new ODataAdaptor
    });
    DialogOpen(args) {
        args.cancel = true;
    }
    render() {
        return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} allowDragAndDrop={false} dialogOpen={this.DialogOpen.bind(this)}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open"/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                  <ColumnDirective headerText="Testing" keyField="Testing"/>
                  <ColumnDirective headerText="Done" keyField="Close"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));
{% endraw %}