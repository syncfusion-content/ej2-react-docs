---
layout: post
title: Iframe in React Rich Text Editor component | Syncfusion
description: Learn here all about Iframe in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Iframe 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# IFrame Editing Mode in React Rich Text Editor Component

The iframe editor in the Rich Text Editor component provides an isolated environment for content editing. It uses an iframe element to create a separate document, ensuring better compatibility and separation from the parent page's styles and scripts. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe Editor

To enable the iframe editor, you can use the [iframeSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

Here's an example of how to enable the iframe editor:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs26/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs26" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs27/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs27" %}

## Customizing IFrame Attributes

You can add custom attributes to the body tag of the iframe using the attributes field of the [`iframeSettings`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs28/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs28/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs28" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs29/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs29" %}

## Integrating External CSS and Scripts

The Rich Text Editor allows you to apply an external CSS file to style the iframe element. This can be done using the [`styles`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#iframesettings) field in the iframeSettings property. By including an external CSS file, you can easily change the appearance of the editor’s content to meet your specific requirements.

Likewise, add the external script file to the `< iframe >` element using the [`scripts`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#iframesettings) field of iframeSettings to provide the additional functionalities to the RichTextEditor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-resources-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/iframe-resources-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/iframe-resources-cs2" %}

> You can also explore our [iframe in React Rich Text Editor example](https://ej2.syncfusion.com/react/demos/#/material/rich-text-editor/iframe) that shows how to render the iframe in React Rich Text Editor.

## See also

* [Using the Markdown Editor](https://ej2.syncfusion.com/react/documentation/rich-text-editor/markdown)
