---
layout: post
title: Toolbar customization in React Pdfviewer component | Syncfusion
description: Learn here all about Toolbar customization in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize toolbar in PDF Viewer component

## How to customize existing toolbar in PDF Viewer component

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by **CustomToolbarItemModel** and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/react/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %} 

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './index.css';
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  var toolItem = { 
    prefixIcon :'e-icons e-paste',
    id :'print',
    tooltipText : 'Custom toolbar item',
    align : 'left',
  }
  function toolbarClick(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    if (args.item && args.item.id === 'print') {
        viewer.printModule.print();
    }
    else if (args.item && args.item.id === 'download') {
        viewer.download();
    }
  };
return (<div>
    <div className='control-section'>
        <PdfViewerComponent 
            id="container" 
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
            toolbarSettings={{ showTooltip : true, toolbarItems: [toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
            toolbarClick={toolbarClick}
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
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
import  { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';
export function App() {
  var toolItem = { 
    prefixIcon :'e-icons e-paste',
    id :'print',
    tooltipText : 'Custom toolbar item',
    align : 'left',
  }
  function toolbarClick(args){
    var viewer = document.getElementById('container').ej2_instances[0];
    if (args.item && args.item.id === 'print') {
        viewer.printModule.print();
    }
    else if (args.item && args.item.id === 'download') {
        viewer.download();
    }
  };
return (<div>
    <div className='control-section'>
        <PdfViewerComponent 
            id="container" 
            documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
            serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer" 
            toolbarSettings={{ showTooltip : true, toolbarItems: [toolItem, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}}
            toolbarClick={toolbarClick}
            style={{ 'height': '640px' }}>
               {/* Inject the required services */}
               <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                   Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']