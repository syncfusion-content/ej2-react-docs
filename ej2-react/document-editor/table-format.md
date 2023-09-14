---
layout: post
title: Table format in React Document editor component | Syncfusion
description: Learn here all about Table format in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Table format 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Table format in React Document editor component

Document Editor customizes the formatting of table, or table cells such as table width, cell margins, cell spacing, background color, and table alignment. This section describes how to customize these formatting for selected cells, rows, or table in detail.

## Cell margins

You can customize the cell margins by using the following sample code.

```ts
//To change the left margin
documenteditor.selection.cellFormat.leftMargin=5.4;
//To change the right margin
documenteditor.selection.cellFormat.rightMargin=5.4;
//To change the top margin
documenteditor.selection.cellFormat.topMargin=5.4;
//To change the bottom margin
documenteditor.selection.cellFormat.bottomMargin=5.4;
```

You can also define the default cell margins for a table. If the specific cell margin value is not defined explicitly in the cell formatting, the corresponding value will be retrieved from default cells margin of the table. Refer to the following sample code.

```ts
//To change the left margin
documenteditor.selection.tableFormat.leftMargin=5.4;
//To change the right margin
documenteditor.selection.tableFormat.rightMargin=5.4;
//To change the top margin
documenteditor.selection.tableFormat.topMargin=5.4;
//To change the bottom margin
documenteditor.selection.tableFormat.bottomMargin=5.4;
```

## Background color

You can explicitly set the background color of selected cells using the following sample code.

```ts
documenteditor.selection.cellFormat.background='#E0E0E0';
```

Refer to the following sample code to customize the background color of the table.

```ts
documenteditor.selection.tableFormat.background='#E0E0E0';
```

## Cell spacing

Refer to the following sample code to customize the spacing between each cell in a table.

```ts
documenteditor.selection.tableFormat.cellSpacing=2;
```

## Cell vertical alignment

The content is aligned within a table cell to ‘Top’, ‘Center’, or ‘Bottom’. You can customize this property of selected cells. Refer to the following sample code.

```ts
documenteditor.selection.cellFormat.verticalAlignment='Bottom';
```

## Table alignment

The tables are aligned in document editor to ‘Left’, ‘Right’, or ‘Center’. Refer to the following sample code.

```ts
documenteditor.selection.tableFormat.tableAlignment=’Center’;
```

## Cell width

Set the desired width of table cells that will be considered when the table is layouted. Refer to the following sample code.


```ts
documentEditor.selection.cellFormat.preferredWidth = 100;
```


## Table width

You can set the desired width of a table in ‘Point ‘or ‘Percent’ type. Refer to the following sample code.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        createTable();
    }, []);
    function createTable() {
        documenteditor.editor.insertTable(2, 2);
        //To change the width of a table
        documenteditor.selection.tableFormat.preferredWidthType = 'Point';
        documenteditor.selection.tableFormat.preferredWidth = 300;
    }
    return (
        <DocumentEditorComponent
            id="container"
            height={'330px'}
            ref={scope => {
                documenteditor = scope;
            }}
            isReadOnly={false}
            enableSelection={true}
            enableEditor={true}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Apply borders

Document Editor exposes API to customize the borders for table cells by specifying the settings. Refer to the following sample code.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, BorderSettings, } from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        documenteditor.editor.insertTable(2, 2);
        //Border settings.
        let borderSettings: BorderSettings = {
            type: 'AllBorders',
            lineWidth: 12,
        };
        //Apply border.
        documenteditor.editor.applyBorders(borderSettings);
    }
    return (
        <DocumentEditorComponent
            id="container"
            height={'330px'}
            ref={scope => {
                documenteditor = scope;
            }}
            isReadOnly={false}
            enableSelection={true}
            enableEditor={true}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```


Please check below gif which illustrates how to apply border for selected cells through properties pane options - border color, line size and no border:

![ApplyBorderToSelectedCell_viaPropertiesPane](images/ApplyBorderToSelectedCell_viaPropertiesPane.gif)

## Working with row formatting

Document Editor allows various row formatting such as height and repeat header.

### Row height

You can customize the height of a table row as ‘Auto’, ‘AtLeast’, or ‘Exactly’. Refer to the following sample code.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';
//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        //Insert table.
        documenteditor.editor.insertTable(2, 2);
        //To change the width of a table
        documenteditor.selection.rowFormat.heightType = 'Exactly';
        documenteditor.selection.rowFormat.height = 20;
    }
    return (
        <DocumentEditorComponent
            id="container"
            ref={scope => {
                documenteditor = scope;
            }}
            isReadOnly={false}
            enableSelection={true}
            enableEditor={true}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```


### Header row

The header row describes the content of a table. A table can optionally have a header row. Only the first row of a table can be the header row. If the cursor position is at first row of the table, then you can define whether it as header row or not, using the following sample code.

```ts
documenteditor.selection.rowFormat.isHeader=true;
```

### Allow row break across pages

This property is valid if a table row does not fit in the current page during table layout. It defines whether a table row can be allowed to break. If the value is false, the entire row will be moved to the start of next page. You can modify this property for selected rows using the following sample code.

```ts
documenteditor.selection.rowFormat.allowRowBreakAcrossPages=false;
```

### Title

Document Editor expose API to get or set the table title of the selected table. Refer to the following sample code to set title.

```ts
documenteditor.selection.tableFormat.title = 'Shipping Details';
```

### Description

Document Editor expose API to get or set the table description of the selected image. Refer to the following sample code to set description.

```ts
documenteditor.selection.tableFormat.description = 'Freight cost and shipping details';
```

## See Also

* [Table properties dialog](../document-editor/dialog#table-properties-dialog)