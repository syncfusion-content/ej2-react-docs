---
layout: post
title: Rendering Mode in React HeatMap Chart | Syncfusion
description: Switch the React HeatMap Chart between SVG and Canvas rendering, or set renderingMode to Auto to pick based on data point count for performance.
control: Rendering mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Mode in React HeatMap Chart

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by setting the [renderingMode](https://ej2.syncfusion.com/react/documentation/api/heatmap#renderingmode) property to **Auto**.

> If the **Auto** mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a **Canvas** mode; Otherwise, the heat map will be rendered in a **SVG** mode.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/code-path/rendering-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/code-path/rendering-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/rendering-mode-cs1" %}