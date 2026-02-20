---
layout: post
title: Tool tip table in React Heatmap chart component | Syncfusion
description: Learn here all about Tool tip table in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Tool tip table 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tool tip table in React Heatmap chart component

You can show a tooltip as a table using the `template` property in `tooltipSettings`.

The following steps describe how to show the table tooltip.

**Step 1**:

Initialize the tooltip template div as shown in the following html page.

```
    <script id="tooltipTemplate" type="text/x-template">
        <div id='templateWrap'>
            <table style="width:100%;  border: 1px solid black;">
            <tr><td bgcolor="#00FFFF">${xValue}:</td><td bgcolor="#00FFFF">${yValue}</td><td bgcolor="#00FFFF">${value}</td></tr>
            </table>
        </div>
    </script>

```

**Step 2**:

Set the element id to the `template` property in `tooltipSettings` to show the tooltip template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/how-to-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/how-to-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/how-to-cs2" %}