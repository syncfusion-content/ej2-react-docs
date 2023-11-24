---
layout: post
title: Check box selection in React Treegrid component | Syncfusion
description: Learn here all about Check box selection in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Check box selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check box selection in React Treegrid component

Checkbox Selection provides an option to select multiple TreeGrid records with help of checkbox in each row.

To render checkbox in each treegrid row, you need to use checkbox column with type as **CheckBox** using column [`type`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#type) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs2" %}

> By default selection is allowed by clicking a treegrid row or checkbox in that row. To allow Selection only through checkbox, you can set
[`selectionSettings.checkboxOnly`](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#checkboxonly) property to **true**.
> Selection can be persisted on all the operations
using [`selectionSettings.persistSelection`](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#persistselection) property.
For persisting selection on the TreeGrid, any one of the column should be defined as a primary key using [`columns.isPrimaryKey`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#isprimarykey) property.

## Checkbox selection mode

In checkbox selection, selection can also be done by clicking on rows. This selection provides two types of Checkbox Selection mode which can be set by using the following API, [`selectionSettings.checkboxMode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#checkboxmode). The modes are;

* **Default**: This is the default value of the checkboxMode. In this mode, user can select multiple rows by clicking rows one by one.
* **ResetOnRowClick**: In ResetOnRowClick mode, when user clicks on a row it will reset previously selected row. Also you can perform multiple-selection in this mode by press and hold CTRL key and click the desired rows. To select range of rows, press and hold the SHIFT key and click the rows.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs3" %}

 > Checkbox Selection feature is intended for row selection only; it is not compatible with cell selection mode.