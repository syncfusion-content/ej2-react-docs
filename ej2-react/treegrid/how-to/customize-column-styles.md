---
layout: post
title: Customize column styles in React Treegrid component | Syncfusion
description: Learn here all about Customize column styles in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Customize column styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize column styles in React Treegrid component

You can customise the appearance of header and content of the particular column using the [`customAttributes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

To customize the treegrid column, follow the given steps:

**Step 1**:

Create a css class with custom style to override the default style for rowcell and headercell.

```css

.e-treegrid .e-rowcell.customcss{
    background-color: #ecedee;
    font-family: 'Bell MT';
    color: 'red';
    font-size: '20px';
}

.e-treegrid .e-headercell.customcss{
    background-color: #2382c3;
    color: white;
    font-family: 'Bell MT';
    font-size: '20px';
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

```ts
<ColumnDirective field='TaskName' headerText='Task Name' width='100' customAttributes={customAttributes}></ColumnDirective>

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/custom-column-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/custom-column-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/custom-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/custom-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/custom-column-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.