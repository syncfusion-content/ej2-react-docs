---
layout: post
title: Detail template in React Treegrid component | Syncfusion
description: Learn here all about Detail template in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in React Treegrid component

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#detailtemplate) property accepts either the template string or HTML element ID.

To use detail template, inject the DetailRow module in the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/detailtemplate-cs1" %}