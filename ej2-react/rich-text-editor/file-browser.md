---
layout: post
title: File browser in React Rich Text Editor component | Syncfusion
description: Learn here all about File browser in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: File browser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# File browser in React Rich text editor component

Rich Text Editor allows to browse and insert images in the edit panel using the file browser. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required additional dependency

The following list of additional dependencies are required to use the file browser feature in the Rich Text Editor.

```js

|-- @syncfusion/ej2-react-richtexteditor
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager

```

## Additional CSS Reference

Additionally add the below styles in the `[src/App.css]` file.

```css
  @import "../../node_modules/@syncfusion/ej2-layouts/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-filemanager/styles/material.css";
```

The following example explains about how to configure the file browser within the Rich Text Editor component.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set [`enable`](/rich-text-editor/api-fileManagerSettings.html#enable) property as `true` on [`fileManagerSettings`](/rich-text-editor/api-fileManagerSettings.html) property to make the file browser in the Rich Text Editor to appear on the `FileManager` toolbar click action.

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