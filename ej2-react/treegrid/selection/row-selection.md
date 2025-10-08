---
layout: post
title: Row selection in React TreeGrid component | Syncfusion
description: Learn here all about Row selection in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in React TreeGrid

## Select row at initial rendering

Select a row during initial render by setting the [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectedrowindex) property.

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

Retrieve the selected row indexes using the [getSelectedRowIndexes](https://ej2.syncfusion.com/react/documentation/api/treegrid/#getselectedrowindexes) method.

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

Select multiple TreeGrid rows based on a condition using the [selectRows](https://ej2.syncfusion.com/react/documentation/api/treegrid/#selectrows) method.

In the following example, rows with a *taskID* value of *3* and *5* are selected during initial render.

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

Toggle selection enables selecting and unselecting a specific row or cell. Enable this behavior by setting [selectionSettings.enableToggle](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#enabletoggle) to true. Clicking an already selected row or cell will unselect it, and clicking an unselected target will select it.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs7/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs7" %}

> When multiple selection is enabled, clicking any selected row (without holding Ctrl key) clears the current selection. Clicking the same row again toggles its selection state off.