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
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs32/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs32/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs32/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs32" %}

### Open dropdown edit popup on single click

You can open the default dropdown edit popup with single click edit by focusing the dropdown element and calling the EJ2 dropdown list's [`showPopup`](https://ej2.syncfusion.com/angular/documentation/api/drop-down-list/#showpopup) method in the Grid's [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event. In this demo we have used a global flag variable in the **mouseup** event to ensure if the dropdown column is the clicked edit target.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs33/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs33/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs33/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs33/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs33" %}

## Batch Editing

You can make a cell editable on a single click with **Batch** mode of editing in Grid, by using the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#editcell) method.

Bind the **mouseup** event for Grid and in the event handler call the [`editCell`](https://ej2.syncfusion.com/angular/documentation/api/grid/edit/#editcell) method, based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/editing-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/editing-cs34/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/editing-cs34/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/editing-cs34/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/editing-cs34" %}