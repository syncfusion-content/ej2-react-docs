---
layout: post
title: React TreeGrid Batch Editing | Syncfusion
description: Learn how to use batch editing in React TreeGrid to edit multiple cells, perform bulk updates, and save changes efficiently.
control: Batch editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Batch Editing in React TreeGrid

In batch edit mode, double-clicking a cell switches the target cell to edit state. Changes can be saved in bulk—added, modified, and deleted records in a single request by clicking the toolbar’s **Update** button or by invoking the [batchSave](https://ej2.syncfusion.com/react/documentation/api/treegrid#batchsave) method. Enable batch editing by setting [editSettings.mode](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel#mode) to **Batch**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs1" %}