---
layout: post
title: Disable editing in React Treegrid Component | Syncfusion
description: Learn here all about disable editing for particular row cell in Syncfusion Essential React Treegrid component, it's elements and more.
control: Disable editing for particular row cell 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Disable editing for particular row cell in React Treegrid Component

You can disable the editing for a particular row by using the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event of Grid based on **requestType** as **beginEdit**.

In the below demo, the rows which are having the value for *Priority* column as *Breaker* is prevented from editing.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs2" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.