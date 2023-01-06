---
layout: post
title: Batch editing in React Grid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Batch editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in React Grid component

In Batch edit mode, when you double-click on the grid cell, then the target cell changed to edit state.
You can bulk save (added, changed and deleted data in the single request) to data source by click on the toolbar's **Update** button or by externally invoking the [`batchSave`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#batchsave) method.
To enable Batch edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Batch**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs2" % }

> If a column's [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowediting) property is set to false, then the focus can be skipped in that non-editable column by clicking the tab or shift-tab key while in batch edit mode.

## Automatically update the column based on another column edited value in batch mode

You can update the column value based on another column edited value in Batch mode by using the Cell Edit Template feature.

In the below demo, we have update the `TotalCost` column value based on the `UnitPrice` and `UnitInStock` column value while editing.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs3" % }

## Cancel edit based on condition in batch mode

You can prevent the CRUD operations of the Batch edit Grid by using condition in the [`cellEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#cellEdit), [`beforeBatchAdd`](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeBatchAdd) and [`beforeBatchDelete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#beforeBatchDelete) events for Edit, Add and Delete actions respectively.

In the below demo, we prevent the CRUD operation based on the `Role` column value. If the Role Column is `Employee`, we are unable to edit/delete that row.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs4" % }

## Confirmation dialog

By default, grid will show the confirm dialog when saving or cancelling or performing any actions like filtering, sorting, etc.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs5" % }

> * [`editSettings.showConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showconfirmdialog)
requires the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) to be **Batch**.
> * If [`editSettings.showConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#showconfirmdialog)
set to **false**, then confirmation dialog does not display in batch editing.