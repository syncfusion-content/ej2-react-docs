---
layout: post
title: Customize the edit dialog in React Treegrid component | Syncfusion
description: Learn here all about Customize the edit dialog in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Customize the edit dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the edit dialog in React Treegrid component

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the below example, we have changed the dialog's header text for editing and adding records.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/bootstrap5/treegrid/treegrid-overview) to knows how to present and manipulate data.