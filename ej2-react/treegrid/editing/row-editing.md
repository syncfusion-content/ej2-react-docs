---
layout: post
title: Row editing in React Treegrid component | Syncfusion
description: Learn here all about Row editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row editing in React Treegrid component

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state. You can change the cell values of the row and save edited data to the data source. To enable Row edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) as **Row**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs14/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs14" %}