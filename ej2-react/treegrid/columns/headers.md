---
layout: post
title: Headers in React Treegrid component | Syncfusion
description: Learn here all about Headers in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React Treegrid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext)value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs20" %}

> * If both the [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) and [`headerText`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) are not defined in the column, the column renders with **“empty”** header text.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertemplate)property.

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

The Syncfusion TreeGrid allows to modify the header text of a corresponding column in real-time based on events or other interactions. This feature is useful in various scenarios, such as displaying custom header text for a specific column or updating the header text dynamically based on user input. Dynamic changes to the header text provide a more flexible and customizable experience.

You can change the column [headerText](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [getColumnByField](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getcolumnbyfield) method.
Then change the header Text value.

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

By default, the text in the column headers of the Syncfusion React TreeGrid is oriented horizontally. However, in some cases, you may want to change the orientation of the header text to vertical, diagonal, or at a custom angle. This can be achieved by adding a custom CSS class to the column header cell using the [customAttributes](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#customattributes) property of the TreeGrid columns.

Follow the below steps to change the orientation of the header text in TreeGrid:

**Step 1: Create a CSS class with orientation style for TreeGrid header cell**

To rotate the header text, you can create a CSS class with the transform property that rotates the header text 90 degrees. This class will be added to the header cell using the `customAttributes` property.

```css
    .orientationcss .e-headercelldiv {
        transform: rotate(90deg);
    }
```
**Step 2: Add the custom CSS class to the TreeGrid column**

Once you have created the CSS class, you can add it to the particular column by using the `customAttributes` property. This property allows you to add any custom attribute to the TreeGrid column.

For example, to add the orientation css class to the **EndDate** column, you can use the following code:

```ts
    <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' customAttributes={this.customAttributes} textAlign='Center' />
```

**Step 3: Resize the header cell height**

After adding the custom CSS class to a column, you need to resize the header cell height in [create](https://ej2.syncfusion.com/react/documentation/api/treegrid/#create) event so that the rotated header text is fully visible. You can do this by using the following code:

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

Here’s an example of how to change orientation of header text:

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