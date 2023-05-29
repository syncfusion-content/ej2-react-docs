{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
    let data = extend([], kanbanData, null, true);
      function template(props): JSX.Element {
        return (<div className="e-kanbantooltiptemp">
            <table>
                <tr>
                    <td className="e-kanban-card-details">
                        <table>
                            <colgroup>
                                <col style={{ width: "30%" }} />
                                <col style={{ width: "70%" }} />
                            </colgroup>
                            <tbody><tr><td className="CardHeader">Assignee:</td><td>{props.Assignee}</td></tr>
                                <tr><td className="CardHeader">Type:</td><td>{props.Type}</td></tr><tr>
                                    <td className="CardHeader">Estimate:</td><td>{props.Estimate}</td></tr>
                                <tr><td className="CardHeader">Summary:</td><td>{props.Summary}</td></tr></tbody>
                        </table>
                    </td></tr>
            </table>
        </div>
        );
    }
    return(
        <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} enableTooltip={true} tooltipTemplate={template.bind(this)}>
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open" />
                <ColumnDirective headerText="In Progress" keyField="InProgress" />
                <ColumnDirective headerText="Testing" keyField="Testing" />
                <ColumnDirective headerText="Done" keyField="Close" />
            </ColumnsDirective>
        </KanbanComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('kanban'));



{% endraw %}