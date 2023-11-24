---
layout: post
title: Disable drag and drop in document editor in React Document editor component | Syncfusion
description: Learn here all about Disable drag and drop in document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Disable drag and drop in document editor 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable drag and drop in document editor in React Document editor component

Document Editor provides support to drag and drop contents within the component and it can be customized(enable and disable) using [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/documenteditorsettings/#allowDragAndDrop)  property in Document editor settings.

The following example illustrates to customize the drag and drop option.

```typescript
var settings = { allowDragAndDrop: false };
var hostUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';

<DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl={hostUrl} documentEditorSettings={settings}/>
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettings/#allowdraganddrop) property is `true`.

The following example illustrates to disable the drag and drop option in DocumentEditor.

```typescript
var settings = { allowDragAndDrop: false };
var hostUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';

<DocumentEditorComponent id="container" height={'590px'} documentEditorSettings={settings}/>
```

>Note: Default value of [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documentEditorSettings/#allowDragAndDrop) property is `true`.