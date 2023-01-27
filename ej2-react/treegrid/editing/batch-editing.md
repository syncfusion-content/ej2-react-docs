---
layout: post
title: Batch editing in React Treegrid component | Syncfusion
description: Learn here all about Batch editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Batch editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Batch editing in React Treegrid component

In Batch edit mode, when you double-click on the treegrid cell, the target cell goes into edit state. You can bulk save (added, changed and deleted data in the single request) to data source by clicking on the toolbar's **Update** button or by externally invoking the [`batchSave`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#batchsave) method. To enable Batch edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettingsModel/#mode) as **Batch**.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/editing-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/editing-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/editing-cs1" %}