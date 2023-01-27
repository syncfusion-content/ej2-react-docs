---
layout: post
title: Auto wrap in React Treegrid component | Syncfusion
description: Learn here all about Auto wrap in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Auto wrap 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Auto wrap in React Treegrid component

The auto wrap allows the cell content of the treegrid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words. To enable auto wrap, set the [`allowTextWrap`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowtextwrap) property to **true**. You can configure the auto wrap mode by setting the [`textWrapSettings.wrapMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#textwrapsettings) property.

There are three types of **wrapMode**. They are:

* **Both**: This value is set by default. Auto wrap will be enabled for both the content and the header.
* **Header**: Auto wrap will be enabled only for the header.
* **Content**: Auto wrap will be enabled only for the content.

Note: When a column width is not specified, then auto wrap of columns will be adjusted with respect to the treegrid's width.

In the following example, the **textWrapSettings.wrapMode** is set to *Content*.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/cell-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/cell-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/cell-cs1" %}