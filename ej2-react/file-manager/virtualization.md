---
layout: post
title: Virtualization in React File Manager component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React File Manager component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React File Manager component

File Manager's UI virtualization allows you for the dynamic loading of a large number of directories and files in both the detailsView and largeIconsView without degrading its performance.

## Module Injection

In order to use UI Virtualization, you need to inject its virtualization service in the App. This modules should be injected into the File Manager using the Inject directive.

{% raw %}

```ts
import { FileManagerComponent, Inject, Virtualization } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';

function App() {
    let hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";
    return (
            // specifies the tag to render the File Manager component
            <FileManagerComponent id="filemanager" ajaxSettings={{
                    url: hostUrl + "api/FileManager/FileOperations",
                    getImageUrl: hostUrl + "api/FileManager/GetImage",
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                }} enableVirtualization={true}>
                    <Inject services={[Virtualization]}/>
                </FileManagerComponent>
        );
}
export default App;

```
{% endraw %}

## Enable Virtualization

The virtualization of the File Manager component is based on the height and width of the viewport. The items will be loaded in both [largeIconsView](https://ej2.syncfusion.com/react/documentation/api/file-manager/#view) and [detailsView](https://ej2.syncfusion.com/react/documentation/api/file-manager/detailsViewSettings/) based on the viewport size.

In order to enable `virtualization`, you must set the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/file-manager/#enablevirtualization) property to true.

In the instance below, a sizable collection of files can be found in the folders **Documents** and **Text Documents**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/virtual-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/virtual-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/virtual-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/virtual-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/virtual-cs1" %}

## Limitations for Virtualization

* Programmatic selection using the **selectAll** method is not supported with virtual scrolling.

* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.

* Selected file items are not maintained while scrolling, considering the performance of the component.
