---
layout: post
title: Links in React Sankey Chart component | Syncfusion
description: Learn here all about Links in Syncfusion React Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Links
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Links in React Sankey Chart component

Links are the connecting paths that visualize flow between nodes in a Sankey Chart. Each link connects a source node to a target node and carries a quantitative value that determines its visual thickness. The Sankey Chart provides comprehensive customization options for link styling, colors, curvature, and interactions.

This guide covers link customization including appearance properties, color blending, curvature control, and dynamic rendering events.

## Link Style Properties

The `linkStyle` property allows you to customize the visual appearance of all links in the Sankey Chart. These properties control opacity, highlighting behavior, curvature, and color blending.

### Link Style Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| opacity | number | 0.35 | Opacity of the link (0 to 1). |
| highlightOpacity | number | 1 | Opacity of link when highlighted or hovered. |
| inactiveOpacity | number | 0.3 | Opacity of link when not interacting (when other links are hovered). |
| curvature | number | 0.55 | Curvature factor of the link path (0 = straight line, 1 = fully curved). |
| colorType | string | 'Blend' | Color blending type: 'Source', 'Target', or 'Blend'. |

## Basic Link Customization

Customize the appearance of all links using the `linkStyle` property to set global opacity levels, curvature, and color blending behavior:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/customization-cs1/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/customization-cs1/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/links/customization-cs1" %}

## Link Curvature

The `curvature` property controls the bend of the links, affecting the visual flow representation:

- **Value 0**: Creates straight lines between nodes
- **Value 0.5-0.7**: Creates moderate curves (often preferred for readability)
- **Value 1.0**: Creates maximum curvature with smooth paths

Choose curvature values based on your data density and aesthetic preferences:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/curvature-cs1/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/curvature-cs1/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/links/curvature-cs1" %}

## Link Color Type

The `colorType` property determines how links are colored, providing flexibility in visual representation:

- **'Source'**: Links inherit the color of their source node (useful for tracking origin)
- **'Target'**: Links inherit the color of their target node (useful for tracking destination)
- **'Blend'**: Links display a smooth gradient blend of source and target node colors (default - recommended for most cases)

The color type you choose affects how users perceive flow relationships in the diagram:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/colortype-cs1/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/colortype-cs1/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/links/colortype-cs1" %}

## Link Value and Thickness

The link thickness is determined by the `value` property in the link data. This quantitative value is automatically mapped to the visual thickness of the link:

- **Larger values**: Create thicker links (proportional to the value)
- **Smaller values**: Create thinner links
- **Equal values**: Create links of equal thickness

The thickness visualization makes it easy to understand relative flow quantities at a glance:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/thickness-cs1/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/thickness-cs1/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/links/thickness-cs1" %}

## Advanced Link Configuration

### Dynamic Link Customization

Use the `linkRendering` event to customize link appearance dynamically during the render process. This event is triggered for each link before rendering, allowing you to apply conditional styling based on flow values, source-target combinations, or other data attributes:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/rendering-event-cs1/app/index.jsx %}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% raw %}
{% include code-snippet/sankey/code-path/links/rendering-event-cs1/app/index.tsx %}
{% endraw %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/sankey/preview-sample/links/rendering-event-cs1" %}