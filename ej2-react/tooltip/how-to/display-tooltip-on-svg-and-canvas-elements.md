---
layout: post
title: Display Tooltip on svg and canvas elements in React Tooltip component | Syncfusion
description: Learn here all about Display Tooltip on svg and canvas elements in Syncfusion React Tooltip component of Syncfusion Essential JS 2 and more.
control: Display Tooltip on svg and canvas elements 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display Tooltip on svg and canvas elements in React Tooltip component

Tooltips can be displayed on both SVG and Canvas elements. Tooltips can be attached directly to `<svg>` or `<canvas>` elements to display them on data visualization elements.

## SVG

To render a Tooltip on an SVG square, first create the SVG square element, then use the following code snippet.

```ts
  <TooltipComponent content='SVG Square' cssClass='e-tooltip-css' target= '#square'>
  </TooltipComponent>
```

## Canvas

To render a Tooltip on a Canvas circle, first create the canvas circle element, then use the following code snippet.

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
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/tooltip/svg-canvas-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/tooltip/svg-canvas-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tooltip/svg-canvas-cs2" %}
