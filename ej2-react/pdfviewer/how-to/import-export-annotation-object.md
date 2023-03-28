---
layout: post
title: Import export annotation object in React Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation object in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Import export annotation object 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation object in React Pdfviewer component

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotation as object.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

   ```
    <button onclick="exportAnnotation()">Export Annotation</button>
    <button onclick="importAnnotation()">Import Annotation</button>

    <script>
    var exportObject;
    // Export annotation as object.
  function exportAnnotation(){
  var viewer = document.getElementById('container').ej2_instances[0];
  viewer.exportAnnotationsAsObject().then(function(value) {
  exportObject = value;
   });
  }

  // Import annotation that are exported as object.
  function importAnnotation() {
   var viewer = document.getElementById('container').ej2_instances[0];
   viewer.importAnnotation(JSON.parse(exportObject));
  }
  </script>
 ```

Find the Sample, [how to import and export annotation as object](https://stackblitz.com/edit/react-dtuvxn?devtoolsheight=33&file=index.html)

## Import and export annotations programmatically

The PDF Viewer library allows you to import annotations via code behind by using the [`importAnnotation()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#importannotation) method.

The following steps are used to import and export annotation programmatically.

   {% raw %}

    ```javascript
     {/* Render the PDF Viewer */}
     <PdfViewerComponent
     id="container"
     documentPath="PDF_Succinctly.pdf"
     documentLoad={this.documentLoad}
     serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
    style={{ height: '640px' }}>
    </PdfViewerComponent>

   //Event triggers while loading document into PdfViewer.
   documentLoad(event) {
    var viewer = document.getElementById('container').ej2_instances[0];
    //API to add annotation programmatically for initial loading.
    viewer.importAnnotation({
      pdfAnnotation: {
       0: {
         shapeAnnotation: [
          {
            ShapeAnnotationType: 'Square',
            Author: 'Guest',
            AnnotationSelectorSettings: {
              selectionBorderColor: '',
              resizerBorderColor: 'black',
              resizerFillColor: '#FF4081',
              resizerSize: 8,
              selectionBorderThickness: 1,
              resizerShape: 'Square',
              selectorLineDashArray: [],
              resizerLocation: 3,
              resizerCursorType: null,
            },
            ModifiedDate: '4/22/2021, 10:33:04 AM',
            Subject: 'Rectangle',
           Note: '',
            IsCommentLock: false,
            StrokeColor: 'rgba(255,0,0,1)',
            FillColor: 'rgba(255,255,255,0)',
            Opacity: 1,
            Bounds: {
              X: 124,
              Y: 76,
              Width: 202,
              Height: 154,
              Location: { X: 124, Y: 76 },
              Size: { IsEmpty: false, Width: 202, Height: 154 },
              Left: 124,
              Top: 76,
              Right: 326,
              Bottom: 230,
            },
            Thickness: 2,
            BorderStyle: 'Solid',
            BorderDashArray: 0,
            RotateAngle: 'RotateAngle0',
            IsCloudShape: false,
            CloudIntensity: 0,
            RectangleDifference: null,
            VertexPoints: null,
            LineHeadStart: null,
            LineHeadEnd: null,
            IsLocked: false,
            AnnotName: 'e9a14dbe-5d09-4226-329e-c6edab201284',
            Comments: null,
            State: '',
            StateModel: '',
            AnnotType: 'shape',
            EnableShapeLabel: false,
            LabelContent: null,
            LabelFillColor: null,
            LabelBorderColor: null,
            FontColor: null,
            FontSize: 0,
            CustomData: null,
            LabelBounds: {
              X: 0,
              Y: 0,
              Width: 0,
              Height: 0,
              Location: { X: 0, Y: 0 },
              Size: { IsEmpty: true, Width: 0, Height: 0 },
              Left: 0,
              Top: 0,
              Right: 0,
              Bottom: 0,
            },
            LabelSettings: null,
            AnnotationSettings: {
              minWidth: 0,
              maxWidth: 0,
              minHeight: 0,
              maxHeight: 0,
              isLock: false,
              isPrint: true,
            },
            AllowedInteractions: ['None'],
            IsPrint: true,
            ExistingCustomData: null,
          },
         ],
       },
      },
    });
   }
 ```
  {% endraw %}

The following code example represents how to export annotation in a button click.

  ```
   <button onclick="exportAnnotation()">ExportAnnotation</button>
   <script>
    //Event triggers when you click the ExportAnnotation button.
    function exportAnnotation() {
      var viewer = document.getElementById('container').ej2_instances[0];
      //API to export annotation.
      viewer.exportAnnotation();
    }
   </script>
  ```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Annotations/Import%20and%20export%20annotations).