---
layout: post
title: Row template in React Treegrid component | Syncfusion
description: Learn here all about Row template in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row template in React Treegrid component

The [`rowTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) has an option to customise the look and behavior of the treegrid rows. The [`rowTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rowtemplate-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rowtemplate-cs1" %}

The [`rowTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/rowtemplateformat-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/rowtemplateformat-cs1" %}

## Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence