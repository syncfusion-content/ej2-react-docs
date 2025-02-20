---
layout: post
title: Resizable Editor in React Rich Text Editor component | Syncfusion
description: Learn here all about Resizable Editor in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Resizable Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizable Editor in the React Rich Text Editor Component

The resizable editor feature allows dynamic resizing of the editor. Enable or disable this feature using the [enableResize](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor#enableresize) property in the Rich Text Editor. When `enableResize` is set to `true`, a grip appears at the bottom right corner for diagonal resizing.

> To use the Resizable feature, inject resize module using the `RichTextEditor.Inject(Resize)`.

The following sample demonstrates the resizable feature.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs56/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs56/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs56" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs57/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs57/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs57" %}

 ## Setting Editor Resize Limits

To restrict the resizable area of the Rich Text Editor, set the `min-width`, `max-width`, `min-height`, and `max-height` CSS properties for the component's wrapper element. 

By default, the control resizes up to the current viewport size. Apply these styles using the `e-richtexteditor`  CSS class in the component's wrapper.

For example, add the following to the `app.component.css` file:

```CSS

.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}

```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/resizable-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/resizable-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/resizable-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/resizable-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/resizable-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/resizable-cs2" %}

## See Also

* [Working with IFrame Editing Mode](./iframe)
* [Using the Markdown Editor](./markdown)