---
layout: post
title: Customize context menu in | Syncfusion
description: Learn here all about Customize context menu in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

#  Customize context menu in React Pdfviewer component

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the `addCustomMenu()` method and custom action is defined using the `customContextMenuSelect()`method.

### Add Custom Option

The following code shows how to add custom option in context menu.

```js
   export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, false);
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

### Customize custom option in context menu

The PDF Viewer feature enables customization of custom options and the ability to toggle the display of the default context menu. When the addCustomMenu parameter is set to `true`, the default menu is hidden; conversely, when it is set to `false`, the default menu items are displayed.

```js
 export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, true);
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the `customContextMenuBeforeOpen()` method.

```js
export function App() {

    let menuItems = [
        {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find'
        },
        {
            text: 'Lock Annotation',
            iconCss: 'e-icons e-lock',
            id: 'lock_annotation'
        },
        {
            text: 'Unlock Annotation',
            iconCss: 'e-icons e-unlock',
            id: 'unlock_annotation'
        },
        {
            text: 'Lock Form Field',
            iconCss: 'e-icons e-lock',
            id: 'read_only_true'
        },
        {
            text: 'Unlock Form Field',
            iconCss: 'e-icons e-unlock',
            id: 'read_only_false'
        },
    ];
    function documentLoad(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.addCustomMenu(menuItems, false, false);
    }

    function customContextMenuSelect(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        switch (args.id) {
            case 'search_in_google':
                for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
                    var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
                    if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                        window.open('http://google.com/search?q=' + content);
                    }
                }
                break;
            case 'lock_annotation':
                lockAnnotations(args);
                break;
            case 'unlock_annotation':
                unlockAnnotations(args);
                break;
            case 'read_only_true':
                setReadOnlyTrue(args);
                break;
            case 'read_only_false':
                setReadOnlyFalse(args);
                break;
            default:
                break;
        }
    }

    function customContextMenuBeforeOpen(args) {
        for (var i = 0; i < args.ids.length; i++) {
            var search = document.getElementById(args.ids[i]);
            var viewer = document.getElementById('container').ej2_instances[0];
            if (search) {
                search.style.display = 'none';
                if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
                    search.style.display = 'block';
                } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                    var isLockOption = args.ids[i] === "lock_annotation";
                    for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
                        var selectedAnnotation = viewer.selectedItems.annotations[j];
                        if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                            var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                            search.style.display = shouldDisplay ? 'block' : 'none';
                        }
                    }
                } else if (args.ids[i] === "read_only_true" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'none' : 'block';
                } else if (args.ids[i] === "read_only_false" && viewer.selectedItems.formFields.length !== 0) {
                    var selectedFormField = viewer.selectedItems.formFields[0].isReadonly;
                    search.style.display = selectedFormField ? 'block' : 'none';
                } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
                    search.style.display = 'block';
                }
            }
        }
    }

    function lockAnnotations(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = true;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    }


    function unlockAnnotations(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedAnnotations = viewer.selectedItems.annotations;
        for (var i = 0; i < selectedAnnotations.length; i++) {
            var annotation = selectedAnnotations[i];
            if (annotation && annotation.annotationSettings) {
                annotation.annotationSettings.isLock = false;
                viewer.annotationModule.editAnnotation(annotation);
                args.cancel = false;
            }
        }
    }

    function setReadOnlyTrue(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: true,
                });
            }
            args.cancel = false;
        }
    }

    function setReadOnlyFalse(args) {
        var viewer = document.getElementById('container').ej2_instances[0];
        var selectedFormFields = viewer.selectedItems.formFields;
        for (var i = 0; i < selectedFormFields.length; i++) {
            var selectedFormField = selectedFormFields[i];
            if (selectedFormField) {
                viewer.formDesignerModule.updateFormField(selectedFormField, {
                    isReadOnly: false,
                });
            }
            args.cancel = false;
        }
    }

    return (
        <div>
            <div className='control-section'>
                {/* Render the PDF Viewer */}
                <PdfViewerComponent
                    id="container"
                    documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                    resourceUrl="https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib"
                    documentLoad={documentLoad}
                    customContextMenuSelect={customContextMenuSelect}
                    customContextMenuBeforeOpen={customContextMenuBeforeOpen}
                    height='640px'>
                    <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                        ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
                </PdfViewerComponent>
            </div>
        </div>);

}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
```
The following is the output of custom context menu with customization. 

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %} 
{% include code-snippet/pdfviewer/custom-context-menu/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %} 
{% include code-snippet/pdfviewer/custom-context-menu/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer**, add the following `serviceUrl` within the <div> element in either the `index.tsx` or `index.jsx` file:
**serviceUrl="https://services.syncfusion.com/react/production/api/pdfviewer"**. 

{% previewsample "page.domainurl/code-snippet/pdfviewer/custom-context-menu" %}