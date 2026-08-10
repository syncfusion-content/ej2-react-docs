---
layout: post
title: Tooltip in React Smithchart | Syncfusion
description: Enable tooltips on the React Smithchart by setting tooltip visible to true and injecting the TooltipRender module into services.
control: Smithchart tooltip 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in React Smithchart

The tooltip is useful when you cannot display information by using the data labels due to space constraints. You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/smithchart/seriestooltipmodel#visible) property as `true` in [`tooltip`](https://ej2.syncfusion.com/react/documentation/api/smithchart/smithchartseriesmodel#tooltip) object and by injecting the `TooltipRender` module into the `services`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/smithchart/code-path/getting-started-cs7/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/smithchart/getting-started-cs7" %}
