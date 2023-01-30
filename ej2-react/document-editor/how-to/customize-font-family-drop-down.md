---
layout: post
title: Customize font family drop down in React Document editor component | Syncfusion
description: Learn here all about Customize font family drop down in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize font family drop down 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop down in React Document editor component

Document editor provides an options to customize the font family drop down list values using [`fontfamilies`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel/#fontfamilies) in Document editor settings. Fonts which are added in fontFamilies of [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#documenteditorsettings) will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the font families in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  // Add required font families to list it in font drop down
  let fontFamilies = {
    fontFamilies: ['Algerian', 'Arial', 'Calibri', 'Cambria'],
  };
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={fontFamilies}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
```

Output will be like below:

![Font](../images/font-family.png)