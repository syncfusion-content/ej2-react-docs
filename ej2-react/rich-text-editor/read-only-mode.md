---
layout: post
title: Read-only Mode in React Rich Text Editor component | Syncfusion
description: Learn here all about Read-only Mode in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Read-only Mode
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Read-only Mode in the React Rich Text Editor component

The Rich Text Editor component offers a read-only mode that prevents you from editing the content while still allowing them to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#readonly) property to `true`. 

This will allow you to view the content without making any modifications.

Please refer to the sample and code snippets below to demonstrate how to enable the read-only mode in the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/read-only-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/read-only-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs2" %}

## See Also

[How to Disable and Enable the Rich Text Editor](./disable-editor)