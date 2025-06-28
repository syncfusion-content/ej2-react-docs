---
layout: post
title: Show and Hide Annotations in React Pdfviewer component | Syncfusion
description: Learn here all about how to show and hide annotations in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Pdfviewer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show and Hide Annotations in PDF Viewer

### Overview

This guide demonstrates how to toggle the visibility of annotations in the Syncfusion PDF Viewer component for React. This functionality is useful when you need to temporarily hide annotations for a cleaner view or show them again for collaborative review.

### How to Show and Hide Annotations

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Set Up Your React Component with Annotation Toggle Functionality

Create a React component that includes the Syncfusion PDF Viewer and a button to toggle the visibility of annotations. Use the `exportAnnotationsAsObject` and `importAnnotations` methods to manage the annotations. Here is a sample implementation:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %} 

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { 
    PdfViewerComponent, 
    Toolbar, 
    Magnification, 
    Navigation, 
    LinkAnnotation, 
    BookmarkView, 
    ThumbnailView, 
    Print, 
    TextSelection, 
    Annotation, 
    TextSearch, 
    FormFields, 
    FormDesigner, 
    Inject 
} from '@syncfusion/ej2-react-pdfviewer';

export function App() {
    const viewerRef = React.useRef(null);
    const [annotationsVisible, setAnnotationsVisible] = React.useState(true);
    const [exportObject, setExportObject] = React.useState(null);
    
    const toggleAnnotations = () => {
        if (!viewerRef.current) return;
        
        const viewer = viewerRef.current;
        
        if (annotationsVisible) {
            // Hide annotations by exporting and deleting them
            viewer.exportAnnotationsAsObject().then((value) => {
                setExportObject(value);
                const count = viewer.annotationCollection.length;
                for (let i = 0; i < count; i++) {
                    // Always delete the first item as the collection shrinks
                    viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
                }
                setAnnotationsVisible(false);
            });
        } else {
            // Restore annotations
            if (exportObject) {
                let exportAnnotObject = JSON.parse(exportObject);
                viewer.importAnnotation(exportAnnotObject);
            }
            setAnnotationsVisible(true);
        }
    };

    return (
        <div>
            <div className='control-section'>
                <button 
                    id="toggleBtn" 
                    onClick={toggleAnnotations}
                    style={{ margin: '10px 0' }}
                >
                    {annotationsVisible ? 'Hide Annotations' : 'Show Annotations'}
                </button>
                <PdfViewerComponent 
                    id="container" 
                    ref={viewerRef}
                    serviceUrl='https://localhost:44309/pdfviewer'
                    documentPath='Annotations.pdf'
                    style={{ 'height': '680px' }}
                >
                    <Inject services={[
                        Toolbar, 
                        Magnification, 
                        Navigation, 
                        Annotation, 
                        LinkAnnotation, 
                        BookmarkView, 
                        ThumbnailView,
                        Print, 
                        TextSelection, 
                        TextSearch, 
                        FormFields, 
                        FormDesigner
                    ]} />
                </PdfViewerComponent>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}
{% endhighlight %}
{% endtabs %}

### Conclusion

The ability to show and hide annotations provides users with a more flexible viewing experience. By implementing this functionality, you can allow users to focus on the document content without distractions when needed, and bring back annotations for collaborative review.

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to)