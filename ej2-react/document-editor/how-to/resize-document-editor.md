---
layout: post
title: Resize document editor in React Document editor component | Syncfusion
description: Learn here all about Resize document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Resize document editor 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resize document editor in React Document editor component

In this article, we are going to see how to change height and width of Documenteditor.

## Change height of Document Editor

DocumentEditorContainer initially render with default height. You can change height of documenteditor using [`height`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/#height) property, the value which is in pixel.

The following example code illustrates how to change height of Document Editor.

```ts
 <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          this.container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
      />
```

Similarly, you can use [`height`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#height) property for DocumentEditor also.

## Change width of Document Editor

DocumentEditorContainer initially render with default width. You can change width of documenteditor using [`width`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documentEditorContainerModel/#width) property, the value which is in percent.

The following example code illustrates how to change width of Document Editor.

```ts

 <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          this.container = scope;
        }}
        width={'100%'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
      />

```

Similarly, you can use [`width`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#width) property for DocumentEditor also.

## Resize Document Editor

Using [`resize`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#resize) method, you change height and width of Document editor.

The following example code illustrates how to fit Document Editor to browser window size.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function onCreate() {
    setInterval(() => {
      updateDocumentEditorSize();
    }, 100);
    //Adds event listener for browser window resize event.
    window.addEventListener('resize', onWindowResize);
  }
  function onWindowResize() {
    //Resizes the document editor component to fit full browser window automatically whenever the browser resized.
    updateDocumentEditorSize();
  }
  function updateDocumentEditorSize() {
    //Resizes the document editor component to fit full browser window.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    container.resize(windowWidth, windowHeight);
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```
