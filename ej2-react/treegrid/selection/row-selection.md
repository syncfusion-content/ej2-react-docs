---
layout: post
title: Row selection in React Treegrid component | Syncfusion
description: Learn here all about Row selection in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in React Treegrid component

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectedrowindex) value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs4" %}

## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrowindexes) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs5/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs5" %}

## Multiple selection based on condition

You can select multiple treegrid rows based on condition by using the [`selectRows`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrows) method.

In the following code, the rows which contains *taskID* value as *3* and *5* are selected at initial rendering.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs6/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs6/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs6" %}

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell. To enable toggle selection, set [`enableToggle`](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#enable toggle) property of the selectionSettings as true. If you click on the selected row or cell then it will be unselected and vice versa.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/selection-cs7" %}

>If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.