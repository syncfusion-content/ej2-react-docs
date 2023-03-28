---
layout: post
title: Indent in React Treegrid component | Syncfusion
description: Learn here all about Indent in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Indent 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Indent in React Treegrid component

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

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

You can change the hierarchy level of record programmatically using `indent` and `outdent` methods.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/programmatic-indent-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/programmatic-indent-cs1" %}