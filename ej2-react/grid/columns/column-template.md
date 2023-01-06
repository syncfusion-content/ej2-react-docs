---
layout: post
title: Column template in React Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column template in React Grid component

## Render image in a column

The column [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs1" % }

## Render other components in a column

You can use [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event to render the React component inside Grid cells.
In the following sample, the DropDownList is rendered in the **ShipCountry** column

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/dropdown-component-cs1" % }

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on **Discontinued** field value.

```typescript
  const gridTemplate = (props: any): any => {
    if(props.Discontinued){
   return (<div className="template_checkbox">
            <input type="checkbox" checked={true}/>
        </div>);
    }else{
         return (<div className="template_checkbox">
            <input type="checkbox"/>
        </div>);
    }
  }
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs2" % }

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/column-template-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-template-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/column-template-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-template-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs3" % }

### Improve performance while rendering templates

By default, you can access the column template elements via grid events such as queryCellInfo and headerCellInfo during initial rendering, through which you can customize the template elements. It affects the rendering performance of React Grid while binding a large number of template columns in the grid.

Grid has an option to improve the rendering performance by setting the `requireTemplateRef` argument to false in the [load](https://ej2.syncfusion.com/angular/documentation/api/grid/#load) event of the Grid. When requireTemplateRef is set to false, the template element is not accessible via queryCellInfo, headerCellInfo, and so on. So if you need to do any customization for those template elements, use the conditional rendering template concept instead of accessing them via grid events.

```typescript
public load(args: LoadEventArgs) {
    args.requireTemplateRef = false;
}
```