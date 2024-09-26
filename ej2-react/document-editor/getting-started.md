---
layout: post
title: Getting started with React Document editor component | Syncfusion
description:  Learn here all about Getting started with React Document editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Document editor component

This section explains the steps to create a Word document editor within your application and demonstrates the basic usage of the DocumentEditor component.

To get started quickly with DocumentEditor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tgJgvbnxdBA" %}

## Dependencies

Following is the list of minimum dependencies required to use the documenteditor.

```javascript
|-- @syncfusion/ej2-react-documenteditor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-build
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-documenteditor
    |-- @syncfusion/ej2-charts
```

### Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](../document-editor/import#convert-word-documents-into-sfdt)
* [Paste with formatting](../document-editor/clipboard#paste-with-formatting)
* [Restrict editing](../document-editor/document-management)
* [Spellcheck](../document-editor/spell-check)
* [Save as file formats other than SFDT and DOCX](../document-editor/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

To know about server-side dependencies, please refer this [page](../document-editor/web-services-overview).

## Setup for Local Development

You can use [`create-react-app`](https://github.com/facebook/create-react-app) to setup the applications.
To install `create-react-app` run the following command.

``` 
npm install -g create-react-app
```

* To setup basic `React` sample use following commands.

<div class='tsx'>
```
create-react-app quickstart --scripts-version=react-scripts-ts
cd quickstart
npm install
```
</div>
<div class='jsx'>
```
create-react-app quickstart
cd quickstart
npm install
```
</div>

>Note: Creating react app without mentioning typescript, will create `src/app.js` instead of `src/app.tsx` file. You can also add the below code snippet in `src/app.js` file.<br><br>To create react app using typescript, you can use this **create-react-app quickstart --template typescript** command. This will create `app.tsx` file under `src` folder of project location.

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg/) public registry.
You can choose the component that you want to install.

To install Document Editor component, use the following command

```
npm install @syncfusion/ej2-react-documenteditor --save
```

## Adding CSS reference

Add Document Editor component and its dependent component styles as given below in `src/App.css`.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-documenteditor/styles/material.css";
```

> To know about individual component CSS, please refer to
[Individual Component theme files](../appearance/theme#referring-individual-control-theme) section.

## Adding Component

You can add `DocumentEditorContainer` Component with  predefined toolbar and properties pane options or `DocumentEditor` component with customize options.

>Note: Starting from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](../document-editor/how-to/disable-optimized-text-measuring).

### DocumentEditor component

DocumentEditor Component is used to create , view and edit word documents. In this , you can customize the UI options based on your requirements to modify the document.

#### Adding DocumentEditor component

Now, you can start adding DocumentEditor component in the application. For getting started, add the DocumentEditor component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the DocumentEditor.



```ts
import * as React from 'react';
import { DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog);
function App() {
    return (<DocumentEditorComponent id="container" height={'330px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" isReadOnly={false} enablePrint={true} enableSelection={true} enableEditor={true} enableEditorHistory={true} enableContextMenu={true} enableSearch={true} enableOptionsPane={true} enableBookmarkDialog={true} enableBordersAndShadingDialog={true} enableFontDialog={true} enableTableDialog={true} enableParagraphDialog={true} enableHyperlinkDialog={true} enableImageResizer={true} enableListDialog={true} enablePageSetupDialog={true} enableSfdtExport={true} enableStyleDialog={true} enableTableOfContentsDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableTextExport={true} enableWordExport={true} />);
}
export default App
```

#### Run the DocumentEditor application

The [`create-react-app`](https://github.com/facebook/create-react-app) will pre-configure the project to compile and run the application in browser. Use the following command to run the application.

```
npm start
```

Document Editor output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/base-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/base-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/base-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/base-cs2" %}

### DocumentEditorContainer component

DocumentEditorContainer Component is also used to create, view and edit word document. But here, you can use predefined toolbar and properties pane to view and modify word document.

#### Adding DocumentEditorContainer component

Now, you can start adding DocumentEditorContainer component in the application. For getting started, add the DocumentEditorContainer component in `src/App.tsx` file using following code.

Add the below code in the `src/App.tsx` to initialize the DocumentEditor.

{% raw %}

```ts
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    return (<DocumentEditorContainerComponent id="container" style={{ 'height': '590px' }} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>);
}
export default App

```
{% endraw %}

#### Run the DocumentEditorContainer application

The [`create-react-app`](https://github.com/facebook/create-react-app) will pre-configure the project to compile and run the application in browser. Use the following command to run the application.

```
npm start
```

DocumentEditorContainer output will be displayed as follows.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/base-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/base-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/base-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/base-cs3" %}

## Frequently Asked Questions

* [How to localize the Documenteditor container](../document-editor/global-local).
* [How to load the document by default](../document-editor/how-to/open-default-document).
* [How to customize tool bar](../document-editor/how-to/customize-tool-bar).
* [How to resize Document editor component](../document-editor/how-to/resize-document-editor).