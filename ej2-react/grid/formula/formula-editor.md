---
layout: post
title: React Grid Formula Editor | Syncfusion
description: Learn how the default formula editor works in React Data Grid and how to allow or prevent editing in formula-enabled columns.
control: Formula Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Formula Editor in React Data Grid

The formula editor is used for editing values in formula-enabled columns. Opening a formula cell for editing through this default editor reveals the underlying expression, converted into column-letter and row-number notation, while the calculated value is displayed when editing is complete.

## Enabling default editor

To enable formula editing, register the `EditModule`, set [editSettings.allowEditing](https://ej2.syncfusion.com/react/documentation/api/grid/editSettingsModel#allowediting) to `true`, enable formulas through set [allowFormula](https://ej2.syncfusion.com/react/documentation/api/grid/column#allowFormula) to `true` for the required columns.

The default editor is automatically available for formula-enabled columns in an editable grid. Opening a formula-enabled cell for editing displays the formula expression in column-letter and row-number notation, such as **=D1*E1**.

Cells and ranges referenced by the formula are highlighted while editing. Selecting another cell inserts or updates a reference in the expression. The highlights are removed when editing ends.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/formula-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/formula-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/formula-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/formula-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/formula-cs2" %}

## Preventing formula cell editor

Editing can be disabled for a formula-enabled column by setting `allowEditing` to `false` on that column. The column still evaluates formulas and displays calculated results, but the user cannot directly edit the formula value from the grid UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/formula-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/formula-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/formula-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/formula-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/formula-cs5" %}

## See also

- [Formulas](./formula)
- [Formula reference](./formula-reference)
- [Custom formula functions](./custom-formula)
- [Editing](../editing/cell-editing)