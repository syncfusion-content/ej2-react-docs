---
layout: post
title: Insert page number and navigate to page in React Document editor component | Syncfusion
description: Learn here all about Insert page number and navigate to page in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Insert page number and navigate to page 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Insert page number and navigate to page in React Document editor component

You can insert page number and navigate to specific page in React Document Editor component by following ways.

## Insert page number

You can use [`insertPageNumber`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#insertpagenumber) API in editor module to insert the page number in current cursor position. By default, Page number will insert in Arabic number style. You can change it, by providing the number style in parameter.

>Note: Currently, Documenteditor have options to insert page number at current cursor position.

The following example code illustrates how to insert page number in header.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreated() {
        // To insert text in cursor position
        container.documentEditor.editor.insertText('Document editor');
        // To move the selection to header
        container.documentEditor.selection.goToHeader();
        // Insert page number in the current cursor position
        container.documentEditor.editor.insertPageNumber();
    }

    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreated}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

Also, you use [`insertField`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor/#insertfield) API in Editor module to insert the Page number in current position

```ts
//Current page number
this.container.documentEditor.editor.insertField('PAGE \* MERGEFORMAT', '1');
```

## Get page count

You can use [`pageCount`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#pagecount) API to gets the total number of pages in Document.

The following example code illustrates how to get the number of pages in Document.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreated() {
        // To insert text in cursor position
        container.documentEditor.editor.insertText('Document editor');
        // To get the total number of pages
        let pageCount = container.documentEditor.pageCount;
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreated}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Navigate to specific page

You can use [`goToPage`](https://ej2.syncfusion.com/react/documentation/api/document-editor/selection/#gotopage) API in Selection module to move selection to the start of the specified page number.

The following example code illustrates how to move selection to specific page.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    function onCreated() {
        // To move selection to page number 2
        container.documentEditor.selection.goToPage(2);
    }
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
            enableToolbar={true}
            created={onCreated}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```
