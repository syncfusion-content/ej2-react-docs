---
layout: post
title: Change orientation of header text in React Treegrid component | Syncfusion
description: Learn here all about Change orientation of header text in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Change orientation of header text 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change orientation of header text in React Treegrid component

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a css class with orientation style for treegrid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property.

```ts
    <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' customAttributes={this.customAttributes} textAlign='Center' />

```

**Step 3**:

Resize the header cell height in [`create`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#create) event by using the following code.

```ts
  const setHeaderHeight = () => {
    /** Obtain the width of the headerText content */
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell */
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }

```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight css tabtitle="custom.css" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/custom.css %}
{% endhighlight %}
{% highlight js tabtitle="custom.jsx" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/custom.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/header-orientation-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/header-orientation-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.