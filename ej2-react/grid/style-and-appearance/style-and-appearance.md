---
layout: post
title: Style and appearance in React Grid component | Syncfusion
description: Learn here all about Style and appearance in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Style and appearance 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Grid Component

The Grid component offers various ways to customize its appearance using both default CSS and custom themes. Common approaches:

**Default CSS override:**

Custom CSS can override the default styles of the Grid component. This allows changes to colors, fonts, paddings, and more. Inspect the generated HTML of the grid using browser developer tools to identify the relevant CSS classes and styles.

A basic example demonstrates how to override the header background color of the grid:

```css
/* In the component's CSS file */
.e-grid .e-headercell {
    background-color: #333; /* Override the header background color */
    color: #fff;
}
```

![Change header background](../images/header-background.png)

**Using Theme Studio:**

Syncfusion's Theme Studio tool allows creation of custom themes for all controls, including the grid. This advanced approach defines a comprehensive set of styles to achieve a consistent look and feel across an application.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select the grid control from the left panel.
3. Customize various aspects of the control's appearance, such as colors, typography, and spacing.
4. Download the generated CSS file and include it in the React project.

## Customizing the grid root element

The `.e-grid` class is used to style the root element of the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.

```css
.e-grid {
    font-family: cursive;
}
```

![grid root element](../images/whole-grid.png)

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/style-appearance-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/style-appearance-cs1" %}

## See also

[Footer template styling in React Grid](https://ej2.syncfusion.com/react/documentation/grid/style-and-appearance/aggregate#customizing-the-aggregate-cell-elements)