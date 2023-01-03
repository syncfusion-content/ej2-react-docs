---
layout: post
title: Headers in React Grid component | Syncfusion
description: Learn here all about Headers in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Headers 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React Grid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) value.
To override the default header title by defining [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-cs29/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-cs29/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-cs29" % }

> * If both the [`field`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#field) and [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) are not defined in the column, the column renders with “empty” header text.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertemplate) property. In this demo, the custom element is rendered for both CustomerID and OrderDate column headers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/header-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/header-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/header-template-cs1" % }

## Change header text dynamically

You can change the column [`headerText`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](https://ej2.syncfusion.com/angular/documentation/api/grid/#getcolumnbyfield) method.
Then change the header Text value.

```typescript
      /** get the JSON object of the column corresponding to the field name */
      const column = grid.getColumnByField("ShipCity");
      /** assign a new header text to the column */
      column.headerText = "Changed Text";

```

**Step 2**:

To reflect the changes in the grid header, invoke the [`refreshHeader`](https://ej2.syncfusion.com/angular/documentation/api/grid/#refreshheader) method.

```typescript

      grid.refreshHeader();

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/change-headertext-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/change-headertext-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/change-headertext-cs1" % }

## Change the orientation of header text

You can change the orientation of the header text by using the [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

Ensure the following steps:

**Step 1**:

Create a css class with orientation style for grid header cell.

```css
.orientationcss .e-headercelldiv {
    transform: rotate(90deg);
}

```

**Step 2**:

Add the custom css class to particular column by using [`customAttributes`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#customattributes) property.

```typescript
    <ColumnDirective field='Freight' headerText='Freight' customAttributes={customAttributes} width='80' format="C2" textAlign="Center"/>

```

**Step 3**:

Resize the header cell height by using the following code.

```typescript
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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/header-orientation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/header-orientation-cs1" % }