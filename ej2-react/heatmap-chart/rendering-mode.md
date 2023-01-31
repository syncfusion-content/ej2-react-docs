---
layout: post
title: Rendering mode in React Heatmap chart component | Syncfusion
description: Learn here all about Rendering mode in Syncfusion React Heatmap chart component of Syncfusion Essential JS 2 and more.
control: Rendering mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Rendering mode in React Heatmap chart component

Heat map can be displayed using **Canvas** or **Scalable Vector Graphics (SVG)** rendering logic to improve the initial load performance and scalability. Heat map can also be automatically switched between **Canvas** and **SVG** modes based on dataset size. You can enable this mode by setting the [renderingMode](https://ej2.syncfusion.com/react/documentation/api/heatmap/#renderingmode) property to **Auto**.

> If the **Auto** mode is enabled in the heat map and there are more than 10,000 data points, then the heat map will be rendered in a **Canvas** mode; Otherwise, the heat map will be rendered in a **SVG** mode.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/heatmap/rendering-mode-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/heatmap/rendering-mode-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/heatmap/rendering-mode-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/heatmap/rendering-mode-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/heatmap/rendering-mode-cs1" %}