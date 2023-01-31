---
layout: post
title: Toolbar customization in React Pdfviewer component | Syncfusion
description: Learn here all about Toolbar customization in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Toolbar customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar customization in React Pdfviewer component

The PDF Viewer provides API for user interactions options provided in it's built-in toolbar. Using this we can create our own User Interface for toolbar actions in application level by hiding the default toolbar. The following steps are used to create the custom toolbar for PDF Viewer,

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Now, add an HTML div element in template to act as the custom toolbar PDF Viewer using the following code.

{% raw %}

```ts
    render() {
        function template() {
            return (
                <div ><span className='e-pv-total-page-number' id='totalPage'>of 0</span></div>
            );
        }
        function inputTemplate() {
            return (
                <div><input type='text' className='e-input-group e-pv-current-page-number' id='currentPage' /></div>
            );
        }
        return (<div>
            <div className='control-section'>
                <div>
                    <div className='e-pdf-toolbar'>
                        <ToolbarComponent ref={(scope) => { this.toolbar = scope; }} clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective>
                                <ItemDirective prefixIcon='e-pv-open-document-icon' id='file_Open' tooltipText='Open'></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-previous-page-navigation-icon" id='previous_page' tooltipText="Previous Page" align="Center"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-next-page-navigation-icon" id='next_page' tooltipText="Next Page" align="Center"></ItemDirective>
                                <ItemDirective template={inputTemplate} tooltipText="Page Number" type="Input" align="Center"></ItemDirective>
                                <ItemDirective template={template} align="Center" tooltipText="Page Number"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-print-document-icon" tooltipText="Print" id='print' align="Right"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-download-document-icon" tooltipText="Download" id='download' align="Right"></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>
                    {/* Render the PDF Viewer */}
                    <PdfViewerComponent
                        id="container"
                        ref={(scope) => { this.viewer = scope; }}
                        enableToolbar={false}
                        documentLoad={this.documentLoaded}
                        pageChange={this.onPageChange}
                        documentPath="Hive_Succinctly.pdf"
                        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
                        style={{ 'display': 'block', 'height': '640px' }}>

                                <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                                                    ThumbnailView, Print, TextSelection, TextSearch]} />
                    </PdfViewerComponent>
                    <input type="file"
                    id="fileUpload"
                    accept=".pdf"
                    onChange={this.readFile.bind(this)}
                    style={{ 'display': 'block', 'visibility': 'hidden', 'width': '0', 'height': '0' }} />
                    <div className='e-pdf-toolbar' id="magnificationToolbarItems">
                        <ToolbarComponent id="magnificationToolbar" clicked={this.clickHandler.bind(this)}>
                            <ItemsDirective >
                                <ItemDirective prefixIcon="e-pv-fit-page" id='fit_to_page' tooltipText="Fit to page" ></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-in-icon" id='zoom_in' tooltipText="Zoom in"></ItemDirective>
                                <ItemDirective prefixIcon="e-pv-zoom-out-sample" id='zoom_out' tooltipText="Zoom out" ></ItemDirective>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>

                </div>
            </div>
            <div id="action-description">
                <p>This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.</p>
            </div>
            <div id="description">
                <p>
                    This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.
                </p>
                <p>
                    In this example, you can see PDF Viewer control API in action to perform the functionalities.
                </p>
                <ul>
                    <li>Go to Previous Page - <code>viewer.navigation.goToPreviousPage()</code></li>
                    <li>Go to Next Page - <code>viewer.navigation.goToNextPage()</code></li>
                    <li>Go to Page - <code>viewer.navigation.goToPage(pageindex)</code></li>
                    <li>Print - <code>viewer.print.print()</code></li>
                    <li>Download - <code>viewer.download()</code></li>
                    <li>Fit To Page - <code>viewer.magnification.fitToPage()</code></li>
                    <li>Zoom In - <code>viewer.magnification.zoomIn()</code></li>
                    <li>Zoom Out - <code>viewer.magnification.zoomOut()</code></li>
                    <li>Load document - <code>viewer.load(fileName, password)</code></li>
                </ul>
                <p>
                    More information on the PDF Viewer instantiation can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started">
                      documentation section
                    </a>.
                </p>
            </div>
        </div>
        );
    }
```
{% endraw %}

**Step 3:** Import and inject the modules used for the custom toolbar,


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { ToolbarComponent, ItemsDirective, ItemDirective, ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { RouteComponentProps } from 'react-router';

```

**Step 4:** Hide the default toolbar of PDF Viewer using below code snippet,

{% raw %}

```ts

<PdfViewerComponent
    id="container"
    ref={(scope) => { this.viewer = scope; }}
    enableToolbar={false}
    documentLoad={this.documentLoaded}
    pageChange={this.onPageChange}
    documentPath="Hive_Succinctly.pdf"
    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
    style={{ 'display': 'block', 'height': '640px' }}>

            <Inject services={[ Magnification, Navigation, LinkAnnotation, BookmarkView,
                                ThumbnailView, Print, TextSelection, TextSearch]} />
</PdfViewerComponent>

```
{% endraw %}

**Step 5:** Add the following style to achieve the custom toolbar styling,

```
#magnificationToolbarItems {
    position: absolute;
    bottom: 66px;
    display: block;
    width: auto;
    transform: rotate(90deg);
    right: 7.5px;
    z-index: 1001;
}

#magnificationToolbar {
    background: transparent;
}

.e-pv-zoom-out-sample {
    transform: rotate(-90deg);
}

div#magnificationToolbar.e-toolbar .e-toolbar-items {
    background: transparent;
    padding: 2px 3px 2px 2px;
}

#magnificationToolbar.e-toolbar .e-tbar-btn {
    border-radius: 50%;
    min-height: 30px;
    min-width: 30px;
    border: 0.5px solid #c8c8c8;
}

#topToolbar {
    top: 0px;
    z-index: 1001;
}

.e-pv-current-page-number {
    width: 46px;
    height: 28px;
    text-align: center;
}

.material .e-pv-current-page-number {
    border-width: 1px;
}

.e-pv-icons {
    font-family: "e-pv-icons";
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-transform: none;
}

.e-pdf-toolbar .e-icons::before {
    font-family: 'e-pv-icons';
}

.e-pv-icon-search::before {
    font-family: 'e-pv-icons';
    font-size: 12px;
}

#topToolbar .e-pv-download-document-icon::before {
    padding-left: 4px;
    content: '\ed05';
}

#topToolbar .e-pv-print-document-icon::before {
    padding-left: 1px;
    content: '\ed08';
}

.e-pv-previous-page-navigation-icon::before {
    content: '\ed01';
}

.e-pv-next-page-navigation-icon::before {
    content: '\ed02';
}

.e-pv-zoom-out-sample::before {
    content: '\ed03';
}

.e-pv-zoom-in-icon::before {
    content: '\ed04';
}

.e-pv-fit-page::before {
    content: '\ed12';
}
.e-pv-open-document-icon::before {
    content: '\ed13';
}

@font-face {
    font-family: "e-pv-icons";
    font-style: normal;
    font-weight: normal;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,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Y3VzdG9tLXRvb2xiYXJjdXN0b20tdG9vbGJhclZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');
}
```

>The icons are embedded in the font file used in above code snippet.

**Step 6:** Add the following scripts for performing user interaction in PDF Viewer in code behind

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, Inject
} from '@syncfusion/ej2-react-pdfviewer';
import { ToolbarComponent, ItemsDirective, ItemDirective, ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { RouteComponentProps } from 'react-router';

export class CustomToolbar extends SampleBase<{}, {}> {
    public viewer: PdfViewerComponent;
    public toolbar: ToolbarComponent;
    public currentPageNumber: string = '1';
    public fileName: string = '';
    rendereComplete() {
        this.wireEvent();
    }
    render() {
        // template code from step 2
    }
    wireEvent() {
        let inputElement: HTMLInputElement = document.getElementById('currentPage') as HTMLInputElement;
        inputElement.addEventListener('click', this.currentPageClicked.bind(this));
        inputElement.addEventListener('keypress', this.onCurrentPageBoxKeypress.bind(this));
        inputElement.value = this.currentPageNumber;
    }
    onPageChange = () => {
        this.currentPageNumber = this.viewer.currentPageNumber.toString();
        let inputElement: HTMLInputElement = document.getElementById('currentPage') as HTMLInputElement;
        inputElement.value = this.currentPageNumber;
        this.updatePageNavigation();
    }
    clickHandler(args: ClickEventArgs) {
        switch (args.item.id) {
            case 'file_Open':
                document.getElementById('fileUpload').click();
                break;
            case 'previous_page':
                this.viewer.navigation.goToPreviousPage();
                break;
            case 'next_page':
                this.viewer.navigation.goToNextPage();
                break;
            case 'print':
                this.viewer.print.print();
                break;
            case 'download':
                this.viewer.download();
                break;
            case 'fit_to_page':
                this.viewer.magnification.fitToPage();
                break;
            case 'zoom_in':
                this.viewer.magnification.zoomIn();
                break;
            case 'zoom_out':
                this.viewer.magnification.zoomOut();
                break;
        }
    }
    documentLoaded = () => {
        var pageCount = document.getElementById('totalPage');
        pageCount.textContent = 'of ' + this.viewer.pageCount;
        this.updatePageNavigation();
    }

    updatePageNavigation() {
        if (this.viewer.currentPageNumber === 1) {
            this.toolbar.enableItems(document.getElementById('previous_page').parentElement, false);
            this.toolbar.enableItems(document.getElementById('next_page').parentElement, true);
        } else if (this.viewer.currentPageNumber === this.viewer.pageCount) {
            this.toolbar.enableItems(document.getElementById('previous_page').parentElement, true);
            this.toolbar.enableItems(document.getElementById('next_page').parentElement, false);
        } else {
            this.toolbar.enableItems(document.getElementById('previous_page').parentElement, true);
            this.toolbar.enableItems(document.getElementById('next_page').parentElement, true);
        }
    }

    onCurrentPageBoxKeypress(event) {
        let currentPageBox: HTMLInputElement = document.getElementById('currentPage') as HTMLInputElement;
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {
            event.preventDefault();
            return false;
        }
        else {
            var currentPageNumber = parseInt(currentPageBox.value);
            if (event.which === 13) {
                if (currentPageNumber > 0 && currentPageNumber <= this.viewer.pageCount) {
                    this.viewer.navigation.goToPage(currentPageNumber);
                }
                else {
                    currentPageBox.value = this.viewer.currentPageNumber.toString();
                }
            }
            return true;
        }
    }
    currentPageClicked() {
        let currentPage: HTMLInputElement = document.getElementById('currentPage') as HTMLInputElement;
        currentPage.select();
    }

    readFile(evt) {
        let uploadedFiles = evt.target.files;
        let uploadedFile = uploadedFiles[0];
        this.fileName = uploadedFile.name;
        let reader = new FileReader();
        reader.readAsDataURL(uploadedFile);
        let viewer: PdfViewerComponent = this.viewer;
        let uploadedFileName: string = this.fileName;
        reader.onload = function () {
            let uploadedFileUrl: string = this.result as string;
            viewer.load(uploadedFileUrl, null);
            viewer.fileName = uploadedFileName;
            var pageCount = document.getElementById('totalPage');
            pageCount.textContent = 'of ' + viewer.pageCount;
        }
    }

}

```

Sample :
[https://ej2.syncfusion.com/react/demos/#/material/pdfviewer/custom-toolbar](https://ej2.syncfusion.com/react/demos/#/material/pdfviewer/custom-toolbar)