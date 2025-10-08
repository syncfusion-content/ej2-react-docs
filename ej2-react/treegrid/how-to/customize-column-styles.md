---
layout: post
title: Customize column styles in React TreeGrid | Syncfusion
description: Learn here all about Customize column styles in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Customize column styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize column styles in React TreeGrid

Customize the appearance of a specific column’s header and content using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

To customize a TreeGrid column, follow these steps:

**Step 1**:

Create a CSS class with custom styles to override the default styles for row cells and header cells.

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

Apply the custom CSS class to the target column using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

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

> Refer to the [React TreeGrid](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for highlights. Explore the [React TreeGrid example](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to learn how to present and manipulate data.