---
layout: post
title: Create a table in tooltip in React HeatMap Chart | Syncfusion
description: Render the React HeatMap Chart tooltip as an HTML table by setting the template id in tooltipSettings to show multi-column cell data.
control: Tool tip table 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a table in tooltip in React HeatMap Chart

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