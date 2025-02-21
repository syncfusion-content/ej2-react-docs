---
layout: post
title: Third party integration in React Rich text editor component | Syncfusion
description: Learn here all about Third party integration in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Third party integration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Third party integration in React Rich text editor component

The Rich Text Editor can be integrated with third-party to suite the application scenario.

## CodeMirror Integration

Rich Text Editor comes with a basic HTML source editor through the view-source property. CodeMirror plugin can be used to highlight the syntax of HTML. CodeMirror plugin for Rich Text Editor makes editing of HTML source code with a pleasant experience.

Import necessary CSS and JS files of CodeMirror to the HTML page.

Required JS files of code mirror.

  ``` javascript
    <script src="scripts/CodeMirror/codemirror.js" type="text/javascript"></script>
    <script src="scripts/CodeMirror/javascript.js" type="text/javascript"></script>
    <script src="scripts/CodeMirror/css.js" type="text/javascript"></script>
    <script src="scripts/CodeMirror/htmlmixed.js" type="text/javascript"></script>
  ```

Required CSS file of code mirror.
 
   ``` javascript
    <link href="scripts/CodeMirror/codemirror.min.css" rel="stylesheet" />
   ```

Add a custom icon for HTML source editor in the toolbar of Rich Text Editor using the template option of ToolbarSettings, define the code mirror plugins, and then pass the Rich Text Editor content as argument in the [actionComplete](/api/rich-text-editor/#actioncomplete) event.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-mirror-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-mirror-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-mirror-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-mirror-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

## Embedly Integration

This can be achieved by binding the [actionComplete](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#actioncomplete) event to the toolbar items in the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#toolbarsettings) property. In the event handler, create an element and add the appropriate class. The below script is have to add in the sample to embed the content,

Include `embedly` javascript.

```ts

<script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

```

The above script is added to the page.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/embedly-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/embedly-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/embedly-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/embedly-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/embedly-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/embedly-cs2" %}
