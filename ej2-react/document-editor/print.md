---
layout: post
title: Print in React Document Editor Component | Syncfusion
description: Learn here all about Print in Syncfusion Essential React Document Editor component, its elements and more.
control: Print 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Print in React Document Editor Component

To print the document, use the [`print`](https://helpej2.syncfusion.com/react/documentation/api/document-editor/#print) method from document editor instance.

Refer to the following example for showing a document and print it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/print-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/print-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs1" %}

Refer to the following example for creating a document and print it.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/print-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/print-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs2" %}

> DocumentEditor features are segregated into individual feature-wise modules. To use print inject `Print` module using the `DocumentEditor.Inject(Print)`.
> To enable print for a document editor instance, set enablePrint as true.

## Improve print quality

Document editor provides an option to improve the print quality using [`printDevicePixelRatio`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documenteditorsettingsmodel/#printdevicepixelratio) in Document editor settings. Document editor using canvas approach to render content. Then, canvas are converted to image and it process for print. Using printDevicePixelRatio API, you can increase the image quality based on your requirement.

The following example code illustrates how to improve the print quality in Document editor container.

```ts
import * as ReactDOM from 'react-dom';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let settings={printDevicePixelRatio :2};
return (
            <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true} documentEditorSettings= {settings}/>);
}
export default App
ReactDOM.render(<App />, document.getElementById('root'));

```

>Note: By default, printDevicePixelRatio value is 1

## Print using window object

You can print the document in document editor by passing the window instance. This is useful to implement print in third party frameworks such as electron, where the window instance will not be available. Refer to the following example.



```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent,
    DocumentEditor,
    Print,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditor.Inject(Print);
function App() {
    let documenteditor: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function componentDidMount() {
        //Print the document content.
        documenteditor.print(window);
    }
    return (
        <DocumentEditorComponent
            id="container"
            height={'330px'}
            ref={scope => {
                documenteditor = scope;
            }}
            enablePrint={true}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, DocumentEditor, Print, } from '@syncfusion/ej2-react-documenteditor';
DocumentEditor.Inject(Print);
function App() {
    let documenteditor;
    React.useEffect(() => {
        componentDidMount();
    }, []);
    function componentDidMount() {
        //Print the document content.
        documenteditor.print(window);
    }
    return (<DocumentEditorComponent id="container" height={'330px'} ref={scope => {
            documenteditor = scope;
        }} enablePrint={true}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Page setup

Some of the print options cannot be configured using JavaScript. Refer to the following links to learn more about the browser page setup:

* [`Chrome`](https://support.google.com/chrome/answer/1069693?hl=en&visit_id=1-636335333734668335-3165046395&rd=1/)
* [`Firefox`](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)

However, you can customize margins, paper, and layout options by modifying the section format properties using page setup dialog



```ts
import * as ReactDOM from 'react-dom';
import { DocumentEditorComponent, DocumentEditor, Print, Editor, Selection, EditorHistory, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditor.Inject(Print, Editor, Selection, EditorHistory, SfdtExport, PageSetupDialog);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
     React.useEffect(() => {
    componentDidMount()
    }, []);
  return (
    <DocumentEditorComponent
      id="container"
      height={'330px'}
      ref={scope => {
        documenteditor = scope;
      }}
      enablePrint={true}
      isReadOnly={false}
      enableSelection={true}
      enableSfdtExport={true}
      enableEditor={true}
      enableEditorHistory={true}
      enablePageSetupDialog={true}
    />
  );
  function ComponentDidMount() {
    //Open page setup dialog.
    documenteditor.showPageSetupDialog();
  }

}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import * as ReactDOM from 'react-dom';
import { DocumentEditorComponent, DocumentEditor, Print, Editor, Selection, EditorHistory, PageSetupDialog, SfdtExport } from '@syncfusion/ej2-react-documenteditor';
//Inject require modules.
DocumentEditor.Inject(Print, Editor, Selection, EditorHistory, SfdtExport, PageSetupDialog);
function App() {
    let documenteditor = new DocumentEditorComponent(undefined);
    React.useEffect(() => {
        componentDidMount();
    }, []);
    return (<DocumentEditorComponent id="container" height={'330px'} ref={scope => {
            documenteditor = scope;
        }} enablePrint={true} isReadOnly={false} enableSelection={true} enableSfdtExport={true} enableEditor={true} enableEditorHistory={true} enablePageSetupDialog={true}/>);
    function ComponentDidMount() {
        //Open page setup dialog.
        documenteditor.showPageSetupDialog();
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

By customizing margins, papers, and layouts, the layout of the document will be changed in document editor. To modify these options during print operation, serialize the document as SFDT using the  [`serialize`](https://ej2.syncfusion.com/react/documentation/api/document-editor#serialize) method in document editor instance and open the SFDT data in another instance of document editor in separate window.

The following example shows how to customize layout options only for printing.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/print-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/print-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/print-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/print-cs3" %}

## See Also

* [Feature modules](../document-editor/feature-module)
* [Page Setup dialog](../document-editor/dialog#page-setup-dialog)