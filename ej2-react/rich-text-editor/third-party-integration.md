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

## At.js Integration

Rich Text Editor can easily be integrated with At.js library. To display the autocomplete list, type `@`.

Include At.JS style.

   ``` javascript
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/at.js/1.4.0/css/jquery.atwho.min.css">
  ```

Include At.JS javascript.

   ``` javascript
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/at.js/1.4.0/js/jquery.atwho.min.js"></script>
   ```

Define the At.js configuration.

   ```ts
    var config = {
        at: "@",
        data: [email id of employees list],
        displayTpl: '<li>${name} <small>${email}</small></li>',
        limit: 200
      }
  ```

Populate the employee’s email id from local or remote data and set the result to the data of At.js configuration.

## Embed.ly Integration

Rich Text Editor easily integrate with embed.ly which is probably the best service when it comes to embed the rich content such as Twitter, Facebook, Instagram, and lots of other publishing platform embeds.

   ``` javascript
     <script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
   ```

In the following sample, the Embed.ly class `embedly-card` has been added to `a` tag in the [actionComplete](/rich-text-editor/api-richTextEditor.html#actioncomplete) event.