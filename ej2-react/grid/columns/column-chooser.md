---
layout: post
title: Column chooser in React Grid component | Syncfusion
description: Learn here all about Column chooser in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column chooser 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column chooser in React Grid component

The column chooser feature in the Syncfusion React Grid component allows you to dynamically show or hide columns. This feature can be enabled by defining the [showColumnChooser](https://ej2.syncfusion.com/react/documentation/api/grid/#showcolumnchooser) property as **true**.

To use the column chooser, you need to inject the **ColumnChooser** module.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs5" %}

> The column chooser dialog displays the header text of each column by default. If the header text is not defined for a column, the corresponding column field name is displayed instead.

## Hide column in column chooser dialog

You can hide the column names in column chooser by defining the [showInColumnChooser](https://ej2.syncfusion.com/react/documentation/api/grid/column/#showincolumnchooser) as **false**. This feature is useful when working with a large number of columns or when you want to limit the number of columns that are available for selection in the column chooser dialog.

In this example, the `showInColumnChooser` property is set to false for the **Order ID** column. As a result, the **Order ID** column will not be displayed in the column chooser dialog.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-chooser-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-chooser-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-chooser-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-chooser-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-chooser-cs1" %}

> The `showInColumnChooser` property is applied to each <ColumnDirective> element individually. By setting it to false, you can hide specific columns from the column chooser dialog.

## Open column chooser by externally

The Syncfusion React Grid provides the flexibility to open the column chooser dialog on a web page using an external button. By default, the column chooser button is displayed in the right corner of the grid component, and clicking the button opens the column chooser dialog below it. However, you can programmatically open the column chooser dialog at specific **X** and **Y** axis positions by using the [openColumnChooser](https://ej2.syncfusion.com/react/documentation/api/grid/columnChooser/#opencolumnchooser) method.

Here's an example of how to open the column chooser in the Grid using an external button:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-cs6/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-cs6" %}

## Customize column chooser dialog size
	
The column chooser dialog in Syncfusion React Grid comes with default size, but you can modify its height and width as per your specific needs using CSS styles.
To customize the column chooser dialog size, you can use the following CSS styles:

```css
.e-grid .e-dialog.e-ccdlg {
    height: 500px;
    width: 200px;
}
.e-grid .e-ccdlg .e-cc-contentdiv {
    height: 200px;
    width: 230px;
}
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-chooser-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-chooser-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-chooser-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-chooser-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-chooser-cs2" %}

## Change default search operator of the column chooser 

The column chooser dialog in the Syncfusion React Grid provides a search box that allows you to search for column names. By default, the search functionality uses the "startsWith" operator to match columns and display the results in the column chooser dialog. However, there might be cases where you need to change the default search operator to achieve more precise data matching.

To change the default search operator of the column chooser in Syncfusion Grid, you need to use the [operator](https://ej2.syncfusion.com/react/documentation/api/grid/columnChooserSettings/#operator) property of the columnChooserSettings.

Here's an example of how to change the default search operator of the column chooser to **contains** in the React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-chooser-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-chooser-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-chooser-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-chooser-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-chooser-cs3" %}

## Diacritics searching in column chooser

By default, the grid ignores diacritic characters when performing a search in the column chooser. However, in some cases, you may want to include diacritic characters in the search. To enable this behavior, you can set the [columnchoosersettings.ignoreAccent](https://ej2.syncfusion.com/react/documentation/api/grid/columnChooserSettings/#ignoreaccent) property to **true**.

Here is an example that demonstrates the usage of the `ignoreAccent` property to include diacritic characters for searching in the column chooser:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-chooser-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-chooser-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-chooser-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-chooser-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-chooser-cs4" %}