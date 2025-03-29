---
layout: post
title: Change search-highlight color in React DocumentEditor | Syncfusion
description: Learn here all about Change the default search highlight color in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Change the default search highlight color 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change the default search highlight color in React Document editor component

Document editor provides an options to change the default search highlight color using [`searchHighlightColor`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel/#searchhighlightcolor) in Document editor settings. The highlight color which is given in [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#documenteditorsettings) will be highlighted on the searched text. By default, search highlight color is `yellow`.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the default search highlight color.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  // Add required color to change the default search highlight color
  let searchHighlightColor = {
    searchHighlightColor: 'Grey',
  };
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={searchHighlightColor}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

Output will be like below:

![How to change the default search highlight color](../images/search-color.png)