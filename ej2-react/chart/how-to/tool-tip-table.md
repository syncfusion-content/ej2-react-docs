---
layout: post
title: How to add a table in the tooltip in React Chart | Syncfusion
description: Learn how to show a custom HTML table inside Syncfusion React Chart tooltips using the template property.
control: Tool tip table
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a table in the tooltip in React Chart

You can show the tooltip as table by using template property in tooltip.

Follow the given steps to show the table tooltip,

**Step 1**:

Initialize the tooltip template div as shown in the following html page,

```
    <div id='templateWrap'>
        <table style="width:100%;  border: 1px solid black;">
        <tr><th colspan="2" bgcolor="#00FFFF">Female</th></tr>
        <tr><td bgcolor="#00FFFF">${x}:</td><td bgcolor="#00FFFF">${y}</td></tr>
        </table>
    </div>

```

**Step 2**:

To show that tooltip template, set the element id to the `template` property in tooltip.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/chart/code-path/table-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chart/preview-sample/table-cs1" %}