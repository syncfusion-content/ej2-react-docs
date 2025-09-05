---
layout: post
title: File Browser in React Rich Text Editor component | Syncfusion
description: Learn how to use the File Browser in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: File Browser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File Browser in React Rich Text Editor

The File Browser in the Rich Text Editor enables browsing and inserting files, such as images, in the edit panel. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required additional dependency

The following list of additional dependencies are required to use the file browser feature in the Rich Text Editor.

```js

|-- @syncfusion/ej2-react-richtexteditor
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager

```

## Additional CSS reference

Additionally add the below styles in the `[src/App.css]` file.

```css
  @import "../../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
  @import "../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";
```

The following example explains about how to configure the file browser within the Rich Text Editor component.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set `enable` property as `true` on [fileManagerSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#filemanagersettings) property to make the file browser in the Rich Text Editor to appear on the `FileManager` toolbar click action.

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, inject the `FileManager` module using services.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/file-browser-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/file-browser-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/file-browser-cs2" %}