---
layout: post
title: Row selection in React Gantt component | Syncfusion
description: Learn here all about Row selection in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row selection in React Gantt component

The row selection in the Gantt component can be enabled or disabled using the [`allowSelection`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowselection) property. You can get the selected row object using the [`getSelectedRecords`](https://ej2.syncfusion.com/react/documentation/api/gantt/selection/#getselectedrecords) method. The following code example shows how to disable the row selection in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs5" %}

> `Row` selection is the default type of Gantt selection mode.

## Selecting a row on initial load

You can select a row at the time of loading by setting the index of the row to the [`selectedRowIndex`](https://ej2.syncfusion.com/react/documentation/api/gantt/#selectedrowindex) property. Find the following code example for details.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs6" %}

## Selecting a row dynamically

You can also select a row dynamically using the [`selectRow`](https://ej2.syncfusion.com/react/documentation/api/gantt/selection/#selectrow) method. The following code demonstrates how to select a row dynamically by clicking the custom button.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs7" %}

## Multiple row selection

You can select multiple rows by setting the [`selectionSettings.type`](https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettings/#type) property to `multiple`. You can select more than one row by holding down the CTRL key while selecting multiple rows. The following code example explains how to enable multiple selection in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs8" %}

## Selecting multiple rows dynamically

You can also select rows dynamically using the [`selectRows`](https://ej2.syncfusion.com/react/documentation/api/gantt/selection/#selectrows) method. The following code demonstrates how to select rows dynamically by clicking the custom button.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs9" %}

## Customize row selection action

While selecting a row in Gantt, the [`rowSelecting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselecting) and [`rowSelected`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselected) events will be triggered. The the [`rowSelecting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselecting) event will be triggered on initialization of row selection, and you can get the previously selected row and current selecting row’s information, which is used to prevent selection of a particular row. The [`rowSelected`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselected) event will be triggered on completion of row selection action, and you can get the current selected row’s information through this event. The following code example demonstrates how to prevent the selection of a row using the [`rowSelecting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselecting) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/selection-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/selection-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/selection-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/selection-cs10" %}

In the Gantt component, when you click an already selected row, selection will be cleared. While deselecting a row in Gantt, the [`rowDeselecting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdeselecting) and [`rowDeselected`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselected) events will occur. The [`rowDeselecting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowdeselecting) event will occur on initialization of deselecting row, and you can get the current deselecting row’s information to prevent the deselection of particular row. The [`rowDeselected`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowselected) event will occur on completion of row deselection action, and you can get the current deselected row’s information.