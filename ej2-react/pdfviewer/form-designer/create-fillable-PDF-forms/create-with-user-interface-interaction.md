---
layout: post
title: Create with user interface interaction in React Pdfviewer component | Syncfusion
description: Learn here all about Create with user interface interaction in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Create with user interface interaction 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create with user interface interaction in React Pdfviewer component

The PDF viewer control provides the option for interaction with Form Fields such as Drag and resize. you can draw a Form Field dynamically by clicking the Form Field icon on the toolbar and draw it in the PDF document. The Form Fields type supported by the PDF Viewer Control are:

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

## Enable or Disable form designer toolbar

We should inject FormDesigner module and set enableFormDesignerToolbar as true to enable the Form designer icon on the toolbar. By default, enableFormDesignerToolbar is set as true. Use the following code to inject FormDesigner module and to enable the enableFormDesignerToolbar property.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        ref={(scope) => { pdfviewer = scope; }}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
        enableFormDesignerToolbar={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
      <PdfViewerComponent
        id="container"
        ref={(scope) => { pdfviewer = scope; }}
        documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
        serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"
        enableFormDesignerToolbar={true}
        style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
      </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Add the form field dynamically

Click the Form Field icon on the toolbar and then click on to the PDF document to draw a Form Field. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/addformfield.gif)

## Drag the form field

We provide options to drag the Form Field which is currently selected in the PDF document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/dragformfield.gif)

## Resize the form field

We provide options to resize the Form Field which is currently selected in the PDF document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/resizeformfield.gif)

## Edit or Update the form field dynamically

The properties of the Form Fields can be edited using the Form Field Properties window. It can be opened by selecting the Properties option in the context menu that appears on the right by clicking the Form Field object. Refer the below image for the properties available to customize the appearance of the Form Field.

![Alt text](../../../pdfviewer/images/generalproperties.png)

![Alt text](../../../pdfviewer/images/appearanceproperties.png)

![Alt text](../../../pdfviewer/images/dropdownproperties.png)

## Clipboard operation with form field

The PDF Viewer control supports the clipboard operations such as cut, copy and paste for Form Fields. You can right click on the Form Field object to view the context menu and select to the clipboard options that you would like to perform. Refer the below image for the options in the context menu.

![Alt text](../../../pdfviewer/images/clipboardformfield.png)

## Undo and Redo

We provided support to undo/redo the Form Field actions that are performed at runtime. Use the following code example to perform undo/redo actions.

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function undoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.undo();
  }
  function redoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.redo();
  }
  return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
    <button onClick={undoClicked}>Undo</button>
    <button onClick={redoClicked}>Redo</button>
    <PdfViewerComponent
      id="container"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
      style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
    </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="Server-Backed" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';
let pdfviewer;

function App() {
  function undoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.undo();
  }
  function redoClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.redo();
  }
  return (<div>
    <div className='control-section'>
    {/* Render the PDF Viewer */}
    <button onClick={undoClicked}>Undo</button>
    <button onClick={redoClicked}>Redo</button>
    <PdfViewerComponent
      id="container"
      ref={(scope) => { pdfviewer = scope; }}
      documentPath="https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
      serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"
      style={{ 'height': '640px' }}>

            <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                Print, TextSelection, TextSearch, FormDesigner, FormFields]} />
    </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}