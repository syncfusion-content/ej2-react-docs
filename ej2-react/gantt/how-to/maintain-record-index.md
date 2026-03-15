---
layout: post
title: Maintain Record Index Position in React Gantt Chart Component | Syncfusion
description: Learn how to maintain record index positions in the Syncfusion React Gantt Chart component using row drag-and-drop for efficient task reordering.
platform: ej2-react
control: Record index
documentation: ug
domainurl: ##DomainURL##
---

# Maintain Record Index Position in React Gantt Chart Component

The React Gantt Chart component enables seamless task reordering by maintaining record index positions through the [rowDrop](https://ej2.syncfusion.com/react/documentation/api/gantt#rowdrop) event, which updates the task order in the data source when a row is dragged and dropped. For example, dragging a task from row 5 to row 2 updates the data source to reflect the new position, preserving project structure. Inject `RowDD` service and enable `allowRowDragAndDrop` to activate this feature. Use the `rowDrop` event to capture `fromIndex` (source row), `dropIndex` (target row), and `dropPosition` and send them to the server via an Ajax request using `DataManager` with `UrlAdaptor`. On the server side, update the data source (e.g., database) with custom methods like `Insert` or `InsertAtTop`, ensuring hierarchical records with parent-child relationships are correctly handled by updating `parentID` in the task data. Configure valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings (e.g., id, child) to support hierarchical tasks. This feature integrates with task dependencies, critical path, and virtual scrolling, ensuring reordered tasks align with the project timeline for efficient schedule management.

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { DataManager, UrlAdaptor, Ajax } from '@syncfusion/ej2-data';

function App() {

    const data: DataManager = new DataManager({
        url: 'https://localhost:44379/Home/UrlDatasource',
        adaptor: new UrlAdaptor(),
        crossDomain: true,
        batchUrl: 'https://localhost:44379/Home/BatchUpdate'
    });

    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };

    function rowDrop(args: any): void {
        const record = args.flatData[args.fromIndex][taskFields.id];
        const record2 = args.flatData[args.dropIndex][taskFields.id];
        const dataItem: any = args.data[0];

        const uri = 'https://localhost:44379/Home/RowDropMethod';

        const dragdropdata = {
            record: dataItem.taskData,
            position: args.dropIndex,
            dragidMapping: record,
            dropidMapping: record2
        };

        const ajax = new Ajax({
            url: uri,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dragdropdata)
        });

        ajax.send();
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="450px"
            dataSource={data}
            allowRowDragAndDrop={true}
            taskFields={taskFields}
            rowDrop={rowDrop}
        >
            <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## See also
- [How to configure row drag and drop?](https://ej2.syncfusion.com/react/documentation/gantt/rows/drag-and-drop)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)