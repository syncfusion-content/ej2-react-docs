---
layout: post
title: Chart based on pivot table selection in React | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Chart based on pivot table selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in React Pivotview component

The cell selection support is enabled using the [`allowSelection`](https://ej2.syncfusion.com/react/documentation/api/pivotview/gridSettings/#allowselection) property and its type and mode are configured using the [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/pivotSelectionSettings/) property. The [`cellSelected`](https://ej2.syncfusion.com/react/documentation/api/pivotview/#cellselected) event gets fired on every selection operation performed in the pivot table. This event returns the selected cell informations, like row header name, column header name, measure name, and value. Based on this information, the [`chart`](https://ej2.syncfusion.com/react/documentation/chart/getting-started/) control will be plotted.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/pivot-table/default-cs157/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/pivot-table/default-cs157/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs157/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs157/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/pivot-table/default-cs157" %}