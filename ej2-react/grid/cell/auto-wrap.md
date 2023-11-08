---
layout: post
title: Auto wrap in React Grid Component | Syncfusion
description: Learn here all about Auto wrap in Syncfusion React Grid Component of Syncfusion Essential JS 2 and more.
control: Auto wrap 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Auto wrap in React Grid Component

The auto wrap allows the cell content of the grid to wrap to the next line when it exceeds the boundary of the cell width. The Cell Content wrapping works based on the position of white space between words.
To enable auto wrap, set the [allowTextWrap](https://ej2.syncfusion.com/react/documentation/api/grid/#allowtextwrap) property to **true**.
You can configure the auto wrap mode by setting the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings/#wrapmode) property.

There are three types of [wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings/#wrapmode). They are

* **Both** - It is the default value. Auto wrap will be enabled for both content and Header.
* **Header** - Auto wrap will be enabled only for header.
* **Content** - Auto wrap will be enabled only for content.

> When a column width is not specified, then auto wrap of columns will be adjusted with respect to the Grid's width.

In the below example, the [textWrapSettings.wrapMode](https://ej2.syncfusion.com/react/documentation/api/grid/textWrapSettings/#wrapmode) is set as **Content**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/autowrap-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/autowrap-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/autowrap-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/autowrap-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/autowrap-cs1" %}