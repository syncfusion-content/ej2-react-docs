---
layout: post
title: Customize color picker in React Document editor component | Syncfusion
description: Learn here all about Customize color picker in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Customize color picker 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---
# Customize color picker in React Document editor control

Document editor provides an options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettingsModel/#colorpickersettings) in Document editor settings. Color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/react/documentation/api/document-editor/#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to Customize the color picker in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  // Add required color picker settings to the document editor settings
  let settings =  {colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true }};
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={settings}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
```

The following table illustrates all the possible properties for the color picker.

| Property | Behaviour |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |
