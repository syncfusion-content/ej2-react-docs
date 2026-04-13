---
layout: post
title: Cell selection in React Treegrid component | Syncfusion
description: Learn here all about Cell selection in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell selection in React Treegrid component

Cells can be selected using mouse drag or arrow keys (Up, Down, Left, Right).

TreeGrid provides two cell selection modes configured through [selectionSettings.cellSelectionMode](https://ej2.syncfusion.com/react/documentation/api/treegrid/selectionSettings/#cellselectionmode):


* **Flow** (default): Select range of cells between the start index and end index which includes in between cells of rows.
* **Box** - Select range of cells within the start and end column indexes which includes in between cells of rows within the range.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/selection-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treegrid/selection-cs1" %}