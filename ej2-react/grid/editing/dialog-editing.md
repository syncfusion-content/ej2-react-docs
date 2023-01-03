---
layout: post
title: Dialog editing in React Grid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Dialog editing 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in React Grid component

In Dialog edit mode, when you start editing the currently selected row data will be shown on a dialog.
You can change the cell values and save edited data to the data source.
To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/editing-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/editing-cs8/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs8" % }

## Customize edit dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event based on [`requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/dialogEditEventArgs/#requesttype) as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local/) list for more localization.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/customizedialog-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/customizedialog-cs1" % }

> The Grid add or edit dialog element has the max-height property, which is calculated based on the available window height. So, in the normal window (1920 x 1080), it is possible to set the dialog's height up to 658px.

## Show or hide columns in dialog editing

The Grid has the option to show hidden columns or hide visible columns while editing in the dialog edit mode by using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event of the Grid.

In the `actionBegin` event, when the `requestType` is `beginEdit` or add, the column will be shown or hidden using the `column.visible` property. When the `requestType` is `save`, the properties will be reset to their original state.

In the following example, the CustomerID column is rendered as a hidden column, and the ShipCountry column is rendered as a visible column. In the edit mode, the CustomerID column will be changed to a visible state and the ShipCountry column will be changed to a hidden state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/customizedialog-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/customizedialog-cs2" % }

## Use wizard like dialog editing

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog** and [`editSetting.template`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as a REACT Component.

The following example demonstrate the wizard like editing in the grid with the obtrusive Validation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/wizardediting-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/wizardediting-cs1" % }
