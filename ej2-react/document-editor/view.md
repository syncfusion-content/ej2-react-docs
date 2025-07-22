---
layout: post
title: View in React Document editor component | Syncfusion
description: Learn here all about View in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: View 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# View in React Document Editor Component

## Web Layout

Document Editor Container component allows you to change the view to web layout and print using the [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#layouttype) property with the supported [`LayoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType/).

```
<DocumentEditorContainerComponent id="container" layoutType={'Continuous'} enableToolbar={true}/>
```

>Note: Default value of [`layoutType`](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/#layouttype) in Document Editor Container component is [`Pages`](https://ej2.syncfusion.com/react/documentation/api/document-editor/layoutType/).

## Ruler

Using ruler we can refer to setting specific margins, tab stops, or indentations within a document to ensure consistent formatting in Document Editor.

The following example illustrates how to enable ruler in Document Editor

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/ruler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/ruler-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/ruler-cs1" %}

> The Web API hosted link `https://services.syncfusion.com/react/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Heading Navigation Pane 

Using the heading navigation pane allows users to swiftly navigate documents by heading, enhancing their ability to move through the document efficiently.

The following example demonstrates how to enable the heading navigation pane in a document editor.

```ts
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let settings =  {showNavigationPane: true};
  return (
    <DocumentEditorContainerComponent
      id="container"
      height={'590px'}
      serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/"
      enableToolbar={true}
      documentEditorSettings={settings}
    />
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

> The Web API hosted link `https://services.syncfusion.com/react/production/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
