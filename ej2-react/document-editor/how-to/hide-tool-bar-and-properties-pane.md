---
layout: post
title: Hide tool bar and properties pane in React Document editor component | Syncfusion
description: Learn here all about Hide tool bar and properties pane in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Hide tool bar and properties pane 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Hide tool bar and properties pane in React Document editor component

**Document editor container** provides the main document view area along with the built-in toolbar and properties pane.

**Document editor** provides just the main document view area. Here, the user can compose, view, and edit the Word documents. You may prefer to use this component when you want to design your own UI options for your application.

## Hide the properties pane

By default, Document editor container has built-in properties pane which contains options for formatting text, table, image and header and footer. You can use [`showPropertiesPane`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/#showpropertiespane) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the properties pane.

The following example code illustrates how to hide the properties pane.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/"
      showPropertiesPane={false}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://services.syncfusion.com/react/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

>Note: Positioning and customizing the properties pane in Document editor container is not possible. Instead, you can hide the exiting properties pane and create your own pane using public API's.

## Hide the toolbar

You can use [`enableToolbar`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/#enabletoolbar) API in [`DocumentEditorContainer`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/) to hide the existing toolbar.

The following example code illustrates how to hide the existing toolbar.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent
} from '@syncfusion/ej2-react-documenteditor';
function App() {
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/"
      enableToolbar={false}
    />
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```

> The Web API hosted link `https://services.syncfusion.com/react/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## See Also

* [How to customize the toolbar](../../document-editor/how-to/customize-tool-bar)