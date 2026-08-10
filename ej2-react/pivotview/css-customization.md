---
layout: post
title: CSS customization in React Pivot Table | Syncfusion
description: Learn how the React Pivot Table exposes CSS classes for styling row headers, column headers, value cells, field list, and grouping bar areas.
control: Pivot Table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# CSS customization in React Pivot Table

The React Pivot Table component provides extensive CSS customization options, allowing users to modify the visual appearance and layout of various pivot table elements. This includes styling row headers, column headers, value cells, summary cells, Field List components, and Grouping Bar areas to match application themes and design requirements.

## Hiding axis

The visibility of the row, column, value, and filter axis areas in both the Field List dialog and Grouping Bar can be controlled using custom CSS styling. Each axis area has specific CSS classes that allow precise targeting for customization.

The following code example demonstrates how to hide the column axis in both the Grouping Bar and Field List within the Pivot Table. The CSS includes necessary height and spacing adjustments to prevent layout gaps and maintain visual consistency:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs21/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs21" %}

**Note:** The CSS selectors above assume the Pivot Table component has the ID **PivotView**. Replace this with your actual component ID or use appropriate class-based selectors for your implementation.

The CSS selectors target the following Pivot Table elements:
- `.e-group-columns`: Hides the column axis in the Grouping Bar.
- `.e-group-filters`: Adjusts the height of the filter axis to compensate for the hidden column axis in the Grouping Bar.
- `.e-field-list-columns`: Hides the column axis in the Field List dialog.
- `.e-field-list-values`: Adjusts the layout of the value axis when the column section is hidden in the Field List dialog.

## Text alignment

The alignment of text inside row headers, column headers, value cells, and summary cells can be customized using CSS styling. The following example demonstrates how to center-align text in value cells (additional selectors for column headers, row headers, and summary cells are included as commented CSS in the sample):

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs22/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs22" %}

## Customize header, value, and summary cell styles

Pivot Table elements such as header cells, value cells, and summary cells can be styled using built-in CSS class names. This enables comprehensive visual customization of the component's appearance to match application themes and design requirements.

The following code sample demonstrates how to apply custom background colors to different cell types:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/background-css-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/background-css-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/background-css-cs1" %}

The CSS classes target the following Pivot Table elements:
- `.e-headercell`: Styles column header cells.
- `.e-rowsheader`: Styles row header cells.
- `.e-summary:not(.e-gtot)`: Styles subtotal summary cells (excluding grand totals).
- `.e-gtot`: Styles grand total cells.

## See Also

* [How to customize the font styles for the entire contents of a React Pivot Table?](https://support.syncfusion.com/kb/article/15551/how-to-customize-the-font-styles-for-the-entire-contents-of-a-react-pivot-table)
* [How to apply custom styles to the pivot table headers?](https://support.syncfusion.com/kb/article/14518/how-to-apply-custom-styles-to-the-pivot-table-headers)