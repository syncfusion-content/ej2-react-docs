---
layout: post
title: Display tooltip on svg and canvas elements in React Tooltip component | Syncfusion
description: Learn here all about Display tooltip on svg and canvas elements in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Display tooltip on svg and canvas elements 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display tooltip on svg and canvas elements in React Tooltip component

Tooltip can be displayed on both SVG and Canvas elements. You can directly attach the `<svg>` or `<canvas>` elements to show tooltips on data visualization elements.

## SVG

Create the SVG square element and refer to the following code snippet to render the tooltip on SVG square.

```ts
  <TooltipComponent content='SVG Square' cssClass='e-tooltip-css' target= '#square'>
  </TooltipComponent>
```

## Canvas

Create the canvas circle element and refer to the following code snippet to render the tooltip on Canvas circle.

```ts
<TooltipComponent content='Canvas Circle' cssClass='e-tooltip-css' target= '#circle'>
  </TooltipComponent>
```

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/tooltip/svg-canvas-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/tooltip/svg-canvas-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tooltip/svg-canvas-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tooltip/svg-canvas-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs2" %}
