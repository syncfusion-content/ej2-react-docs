---
layout: post
title: Customize shortcut keys in React Rich text editor component | Syncfusion
description: Learn here all about Customize shortcut keys in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Customize shortcut keys 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize shortcut keys in React Rich text editor component

It can be achieved by using [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter) property. We need to create `customformatterModel` to configure the `keyConfig` using `IHtmlFormatterModel` class and assign the same to the formatter property. Here, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs20" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs21/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs21" %}

> We need to import `IHtmlFormatterModel` and `HTMLFormatter` to configure the shortcut key.
