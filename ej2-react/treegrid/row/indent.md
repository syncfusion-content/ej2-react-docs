---
layout: post
title: React TreeGrid Indent and Outdent | Syncfusion
description: Learn how to indent and outdent rows in React TreeGrid to modify hierarchical relationships and manage parent-child records.
control: Indent 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Indent and Outdent in React TreeGrid

The indent and outdent feature changes the hierarchy level of rows in the TreeGrid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling of its parent row.

To use the indent and outdent feature, inject the `RowDD` module into the TreeGrid. The TreeGrid toolbar includes built-in items to execute indent and outdent actions. Configure these with the toolbar property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/indent-outdent-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/indent-outdent-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/indent-outdent-cs1" %}

## Indent/Outdent a row programmatically

Change the hierarchy level of a record programmatically using the `indent` and `outdent` methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent-cs1" %}