---
layout: post
title: Cell editing in React Treegrid component | Syncfusion
description: Learn here all about Cell editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Cell editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Cell editing in React Treegrid component

In Cell edit mode, when you double click on a cell, it is changed to edit state. You can change the cell value and save to the data source. To enable Cell edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) as **Cell**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs2" %}

> Cell edit mode is default mode of editing.