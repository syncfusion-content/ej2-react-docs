---
layout: post
title: Style and appearance in React Grid component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Style and appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in React Grid component

To modify the Grid appearance, you need to override the default CSS of grid. Please find the CSS structure that can be used to modify the Grid appearance. Also, you have an option to create your own custom theme for all the JavaScript controls using our [`Theme Studio`](https://ej2.syncfusion.com/themestudio/?theme=material).

## Customizing the Grid root element

Use the below CSS to customize the Grid root element.

```css

.e-grid {
      font-family: cursive;
}

```

You can modify the grid styling appearance by overriding the default CSS style of the Grid.

In the following sample, the font family of grid content is changed to **cursive**, and the background color of rows, selected rows, alternate rows, and row hovering color is modified using the below CSS styles.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/style-appearance-cs1/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/style-appearance-cs1/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/style-appearance-cs1" % }