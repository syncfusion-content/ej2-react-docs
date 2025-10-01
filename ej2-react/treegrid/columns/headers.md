---
layout: post
title: Headers in React TreeGrid component | Syncfusion
description: Learn here all about Headers in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React TreeGrid

## Header text

By default, the column header title is derived from the column [field](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) value. To override the default title, set the [headerText](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs20" %}

> If both [field](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) and [headerText](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) are not defined, the column renders with an empty header.

## Header template

Customize the header element using the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertemplate) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs21/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs21" %}

## Change header text dynamically

The TreeGrid allows modifying a column’s header text at runtime based on events or other interactions. This feature is useful in various scenarios, such as displaying custom header text for a specific column or updating the header text dynamically based on input. Dynamic changes to the header text provide a more flexible and customizable experience.

Change the column [headerText](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) dynamically using an external button.

Follow these steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name using the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getcolumnbyfield) method, then update the header text value.

```ts
      /** Get the JSON object of the column corresponding to the field name **/
      const column = treegrid.getColumnByField("Duration");
      /** Assign a new header text to the column **/
      column.headerText = "Changed Text";
```

**Step 2**:

To reflect the changes in the TreeGrid header, invoke the [refreshColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/#refreshcolumns) method.

```ts
      treegrid.refreshColumns();
```
Here is an example of how to change the header text of a column using the `getColumnByField` method:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/change-headertext-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/change-headertext-cs1" %}

## Change orientation of header text

By default, TreeGrid column headers are oriented horizontally. To display header text vertically, diagonally, or at a custom angle, apply a custom CSS class to the header cell using the [customAttribute`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property of the TreeGrid columns.


Follow the steps below to change the orientation of the header text:

**Step 1: Create a CSS class with the desired orientation for the header cell**

Create a CSS class that applies a transform to rotate the header text. This class will be added to the header cell via `customAttributes`.

```css
    .orientationcss .e-headercelldiv {
        transform: rotate(90deg);
    }
```
**Step 2: Add the custom CSS class to the TreeGrid column**

Add the CSS class to the target column by using the `customAttributes` property. This property allows to add any custom attribute to the TreeGrid column.

For example, to apply the orientation class to the **EndDate** column:

```ts
    <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' customAttributes={this.customAttributes} textAlign='Center' />
```

**Step 3: Resize the header cell height**

After applying the custom class, adjust the header cell height in the [create](https://ej2.syncfusion.com/react/documentation/api/treegrid/#create) event so the rotated text is fully visible.

```ts
  const setHeaderHeight = () => {
    /** Obtain the width of the headerText content **/
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for(let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell **/
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }
```

Here’s an example of how to change the orientation of header text:

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