---
layout: post
title: Module in React Gantt Chart Component | Syncfusion
description: Learn how to inject modules in the Syncfusion React Gantt Chart component to enable features like sorting, editing, and toolbar for optimized performance.
platform: ej2-react
control: Module
documentation: ug
domainurl: ##DomainURL##
---

# Module in React Gantt Chart Component

The React Gantt Chart component uses a modular architecture, enabling injection of specific service providers to activate features like sorting for task prioritization, toolbar for task management, or virtual scrolling for large datasets. This approach loads only necessary functionality, reducing bundle size and improving load times for projects, such as managing thousands of tasks in real-time. For example, injecting [Toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar) enables a customizable toolbar for adding or editing tasks, while [Sort](https://ej2.syncfusion.com/react/documentation/api/gantt/sort) allows sorting by task duration. Modules support accessibility with ARIA labels for UI elements (e.g., context menus) and adapt to responsive designs for consistent display across devices, ensuring efficient performance and scalability.

## Inject modules

Modules are injected using the `Inject` component to enable specific Gantt features. The `Inject` component must be placed inside the Gantt component to provide feature-specific functionality. Each module corresponds to specific properties, such as [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar) for `Toolbar` or [editSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#editsettings) for `Edit`.

**Basic module injection**

Inject modules in the Gantt component using the `Inject` component:

```jsx
import React from 'react';
import { GanttComponent, Inject, Sort, Filter, Edit, Toolbar, Selection } from '@syncfusion/ej2-react-gantt';

const GanttApp = () => {
    const data = [];
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    return (
        <GanttComponent dataSource={data} taskFields={taskFields}>
            <Inject services={[Sort, Filter, Edit, Toolbar, Selection]} />
        </GanttComponent>
    );
};

export default GanttApp;
```

### Available modules

- **Core data management**:
  - [Sort](https://ej2.syncfusion.com/react/documentation/api/gantt/sort): Enables column sorting with [allowSorting](https://ej2.syncfusion.com/react/documentation/api/gantt#allowsorting).
  - [Filter](https://ej2.syncfusion.com/react/documentation/api/gantt/filter): Supports data filtering with [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowfiltering).
  - [Selection](https://ej2.syncfusion.com/react/documentation/api/gantt/selection): Allows row and cell selection with [allowSelection](https://ej2.syncfusion.com/react/documentation/api/gantt#allowselection).
  - [Edit](https://ej2.syncfusion.com/react/documentation/api/gantt/edit): Enables task editing with [editSettings](https://ej2.syncfusion.com/react/documentation/api/gantt#editsettings).
- **UI enhancements**:
  - [Toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar): Adds toolbar controls like export buttons with [toolbar](https://ej2.syncfusion.com/react/documentation/api/gantt#toolbar).
  - [ContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt/contextmenu): Enables context menus with [enableContextMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#enablecontextmenu).
  - [ColumnMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#columnmenumodule): Provides column menu options with [showColumnMenu](https://ej2.syncfusion.com/react/documentation/api/gantt#showcolumnmenu).
  - [Reorder](https://ej2.syncfusion.com/react/documentation/api/grid/reorder): Supports column reordering with [allowReordering](https://ej2.syncfusion.com/react/documentation/api/gantt#allowreordering).
  - `Resize`: Enables column resizing with [allowResizing](https://ej2.syncfusion.com/react/documentation/api/gantt#allowresizing).
  - `Freeze`: Supports column freezing with [frozenColumns](https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#frozencolumns).
- **Advanced features**:
  - [RowDD](https://ej2.syncfusion.com/react/documentation/api/gantt/rowDD): Allows row drag-and-drop with [allowRowDragAndDrop](https://ej2.syncfusion.com/react/documentation/api/gantt#allowrowdraganddrop).
  - [DayMarkers](https://ej2.syncfusion.com/react/documentation/api/gantt/dayMarkers): Supports event markers and holidays with [eventMarkers](https://ej2.syncfusion.com/react/documentation/api/gantt#eventmarkers) and [holidays](https://ej2.syncfusion.com/react/documentation/api/gantt#holidays).
  - [VirtualScroll](https://ej2.syncfusion.com/react/documentation/api/gantt#virtualscrollmodule): Enables virtual scrolling for large datasets with [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/gantt#enablevirtualization).
  - [CriticalPath](https://ej2.syncfusion.com/react/documentation/api/gantt#criticalpathmodule): Visualizes critical paths with [enableCriticalPath](https://ej2.syncfusion.com/react/documentation/api/gantt#enablecriticalpath).
  - [UndoRedo](https://ej2.syncfusion.com/react/documentation/api/gantt#undoredomodule): Supports undo/redo operations with [enableUndoRedo](https://ej2.syncfusion.com/react/documentation/api/gantt#enableundoredo).
- **Export features**:
  - [ExcelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#excelexportmodule): Enables Excel export with [allowExcelExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowexcelexport).
  - [PdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#pdfexportmodule): Supports PDF export with [allowPdfExport](https://ej2.syncfusion.com/react/documentation/api/gantt#allowpdfexport).

Ensure modules are injected before using their features to avoid runtime errors. For responsive designs, module-enabled UI elements (e.g., toolbar, context menu) adapt automatically.

## See also
- [How to configure event markers?](https://ej2.syncfusion.com/react/documentation/gantt/event-markers)
- [How to enable virtual scrolling?](https://ej2.syncfusion.com/react/documentation/gantt/scrolling/virtual-scrolling)
- [How to manage task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/editing-tasks)
