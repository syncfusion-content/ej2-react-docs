---
layout: post
title: Insert Table in React Markdown Editor component | Syncfusion
description: Learn here all about Insert Table in Syncfusion React Markdown Editor component of Syncfusion Essential JS 2 and more.
control: Insert Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Insert Table in React Markdown Editor Component

To enable the table insertion feature, add the `CreateTable` option to the toolbar items. Once added, users can click the Insert Table icon in the toolbar to insert a table into the editor.

By default, when a table is inserted, it consists of:

* 2 rows and 2 columns
* A table header row

This ensures that users can start formatting and adding content immediately.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/markdown-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/markdown-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/markdown-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/markdown-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/markdown-cs6" %}

## Changing default content 

By default, when you insert a table, it comes with predefined column headers and structure. However, you can customize the table’s default content, including the heading and column names, to match your requirements.

The following example demonstrates how to customize the table content in the Markdown Editor:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/markdown-table-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/markdown-table-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-table-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/markdown-editor/markdown-table-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/markdown-editor/markdown-table-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/markdown-editor/markdown-table-cs2" %}