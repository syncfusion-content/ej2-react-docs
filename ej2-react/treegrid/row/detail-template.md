---
layout: post
title: Detail template in React TreeGrid component | Syncfusion
description: Learn here all about Detail template in Syncfusion React TreeGrid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in React TreeGrid 

The detail template displays additional information for a row. When a parent row is expanded, its child rows expand along with their detail templates. The [detailTemplate](https://ej2.syncfusion.com/react/documentation/api/treegrid/#detailtemplate) property accepts either a template string or an HTML element ID.

To enable the detail template, inject the **DetailRow** module into the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/detailtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/detailtemplate-cs1" %}