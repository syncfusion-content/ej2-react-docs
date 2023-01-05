---
layout: post
title: Enable editing in single click in React Grid component | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Enable editing in single click 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable editing in single click in React Grid component

## Normal Editing

You can make a row editable on a single click with **Normal** mode of editing in Grid, by using the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit) methods.

Bind the **mouseup** event for Grid and in the event handler call the [`startEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#startedit) and [`endEdit`](https://ej2.syncfusion.com/angular/documentation/api/grid/#endedit), based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs34/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs34/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs34/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs34/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs34" % }

### Open dropdown edit popup on single click

You can open the default dropdown edit popup with single click edit by focusing the dropdown element and calling the EJ2 dropdown list's [`showPopup`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showpopup) method in the Grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event. In this demo we have used a global flag variable in the **mouseup** event to ensure if the dropdown column is the clicked edit target.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs35/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs35/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs35/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs35/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs35" % }

## Batch Editing

You can make a cell editable on a single click with **Batch** mode of editing in Grid, by using the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#editcell) method.

Bind the **mouseup** event for Grid and in the event handler call the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#editcell) method, based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid/editing-cs36/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs36/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid/editing-cs36/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs36/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/editing-cs36" % }