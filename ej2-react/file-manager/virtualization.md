---
layout: post
title: Virtualization in React File manager component | Syncfusion
description: Learn here all about Virtualization in Syncfusion React File manager component of Syncfusion Essential JS 2 and more.
control: Virtualization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in React File Manager component

File Manager's UI virtualization allows you for the dynamic loading of a large number of directories and files in both the details and largeicons views without degrading its performance.

## Module injection

In order to use UI Virtualization, you need to inject its virtualization service in the App. This modules should be injected into the FileManager using the Inject directive.

```ts
import { FileManagerComponent, Inject, Virtualization } from '@syncfusion/ej2-react-filemanager';
....
....
return (
          // specifies the tag to render the ListView component
          <FileManagerComponent id="filemanager" ajaxSettings={{
                url: this.hostUrl + "api/FileManager/FileOperations",
                getImageUrl: this.hostUrl + "api/FileManager/GetImage",
                uploadUrl: this.hostUrl + 'api/FileManager/Upload',
                downloadUrl: this.hostUrl + 'api/FileManager/Download'
            }} enableVirtualization={true}>
                <Inject services={[Virtualization]}/>
            </FileManagerComponent>
      );
```

## Enable Virtualization

The virtualization of the File Manager component is based on the height and width of the viewport. The items will be loaded in both largeIconsViewSettings and detailsViewSettings based on the viewport size.

In order to enable `virtualization`, you must set the [enableVirtualization](https://ej2.syncfusion.com/react/documentation/api/file-manager/#enablevirtualization) property to true.

In the instance below, a sizable collection of files can be found in the folders **Documents** and **Text Documents**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/virtual-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/file-manager/virtual-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/virtual-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/file-manager/virtual-cs1" %}

## Limitations for Virtualization

* Programmatic selection using the **selectAll** method is not supported with virtual scrolling.

* The keyboard shortcut **CTRL+A** will only select the files and directories that are currently visible within the viewport, rather than selecting all files and directories in the entire directory tree.

* Selected file items are not maintained while scrolling, considering the performance of the component.