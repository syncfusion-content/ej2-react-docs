---
layout: post
title: Clear annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Clear annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Clear annotation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clear annotation in React Pdfviewer component

To clear all the annotations in a PDF document using the Syncfusion PDF Viewer, you can use the **deleteAnnotations()** method. This method is used to clear all the annotations present in the currently loaded document.

Here is an example of how you can clear all the annotations present in the currently loaded document:

```
<button onclick="deleteAnnotations()">Delete Annotations</button>

<script>
// clear Annotations.
function deleteAnnotations() {
    var viewer = document.getElementById("container").ej2_instances[0];
    viewer.deleteAnnotations();
}
</script>
```

We can also delete specific annotation with the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

Here is an example of how you can delete specific annotation with the **deleteAnnotationById()** method:

```
<button onclick="deleteAnnotationbyId()">Delete Annotation by ID</button>

<script>
// Delete Annotation by ID.
function deleteAnnotationbyId() {
    var viewer = document.getElementById("container").ej2_instances[0];
    viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
}
</script>
```

Find the sample [how to clear annotations using deleteAnnotations](https://stackblitz.com/edit/react-6bwfsn-tp4cnb?file=index.html)