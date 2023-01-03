---
layout: post
title: Column template in React Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column template 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Column template in React Grid component

## Render image in a column

The column [`template`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#template) has options to display custom element instead of a field value in the column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs1" % }

## Render other components in a column

You can use [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/grid/#querycellinfo) event to render the React component inside Grid cells.
In the following sample, the DropDownList is rendered in the **ShipCountry** column

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/dropdown-component-cs1/app/index.tsx %}
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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs2" % }

## How to get the row object by clicking on the template element

You can get the row object without selecting the row and achieve it using the column template feature and the `getRowObjectFromUID` method of the Grid.

In the following sample, the button element is rendered in the Employee Data column. By clicking the button, you can get the row object using the `getRowObjectFromUID` method of the Grid and display it in the console.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/column-template-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/column-template-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/column-template-cs3" % }