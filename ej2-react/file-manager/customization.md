---
layout: post
title: Customization in React File manager component | Syncfusion
description: Learn here all about Customization in Syncfusion React File manager component of Syncfusion Essential JS 2 and more.
control: Customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React File manager component

The file manager component allows customizing its functionalities like, context menu, searching, uploading, toolbar using APIs. Given below are some of the functionalities that can be customized in the File Manager,

* [Context menu customization](#context-menu-customization)
* [Details view customization](#details-view-customization)
* [Navigation pane customization](#navigation-pane-customization)
* [Show/Hide file extension](#showhide-file-extension)
* [Show/Hide hidden items](#showhide-hidden-items)
* [Show/Hide thumbnail images in large icons view](#showhide-thumbnail-images-in-large-icons-view)
* [Toolbar customization](#toolbar-customization)
* [Upload customization](#upload-customization)
* [Tooltip customization](#tooltip-customization)

## Context menu customization

The context menu settings like, items to be displayed on files, folders and layout click and visibility can be customized using [contextMenuSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#contextmenusettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/contextmenu-items-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/contextmenu-items-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/contextmenu-items-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/contextmenu-items-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-items-cs1" %}

## Details view customization

The details view settings like, column width, header text, template for each field can be customized using [detailsViewSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#detailsviewsettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/detailsview-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/detailsview-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/detailsview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/detailsview-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/detailsview-cs1" %}

## Navigation pane customization

The navigation pane settings like, minimum and maximum width and visibility can be customized using [navigationPaneSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#navigationpanesettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/navigationpane-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/navigationpane-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/navigationpane-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/navigationpane-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/navigationpane-cs1" %}

## Show/Hide file extension

The file extensions are displayed in the File Manager by default. This can be hidden by disabling the [showFileExtension](https://ej2.syncfusion.com/react/documentation/api/file-manager/#showfileextension) property.

In File Manager [fileLoad](https://ej2.syncfusion.com/react/documentation/api/file-manager/#fileload) and [fileOpen](https://ej2.syncfusion.com/react/documentation/api/file-manager/#fileopen) events are triggered before the file/folder is rendered and before the file/folder is opened respectively. These events can be utilized to perform operations before a file/folder is rendered or opened.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/fileextension-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/fileextension-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/fileextension-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/fileextension-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/fileextension-cs1" %}

## Show/Hide hidden items

The File Manager provides support to show/hide the hidden items by enabling/disabling the [showHiddenItems](https://ej2.syncfusion.com/react/documentation/api/file-manager/#showhiddenitems) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/hiddenitems-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/hiddenitems-cs1" %}

## Show/Hide thumbnail images in large icons view

The thumbnail images are displayed in the File Manager's large icons view by default. This can be hidden by disabling the [showThumbnail](https://ej2.syncfusion.com/react/documentation/api/file-manager/#showthumbnail) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/disablethumbnail-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/disablethumbnail-cs1" %}

## Toolbar customization

The toolbar settings like, items to be displayed in toolbar and visibility can be customized using [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbarsettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/toolbar-items-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/toolbar-items-cs1" %}

## Upload customization

The upload settings like, minimum and maximum file size and enabling auto upload can be customized using [uploadSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#uploadsettings) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/upload-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/upload-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/upload-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/upload-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/upload-cs1" %}

## Tooltip customization

The tooltip value can be customized by adding extra content to the title of the toolbar, navigation pane, details view and large icons of the file manager element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/tooltip-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/tooltip-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/tooltip-cs1" %}
