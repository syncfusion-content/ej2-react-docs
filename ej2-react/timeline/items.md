---
layout: post
title: Items in React Timeline component | Syncfusion
description:  Checkout and learn about Items with Syncfusion React Timeline component of Syncfusion Essential JS 2 and more.
control: Timeline
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Items in React Timeline component

The Timeline items can be configured by using the `ItemDirective` tag. Each item supports multiple configuration options including `content`, `oppositeContent`, `dotCss`, `disabled`, and `cssClass` properties to create rich, interactive timeline experiences.

## Adding content

Define the primary content for Timeline items using the [content](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#content) property. This property supports both string values and templated content for flexible content presentation.

### String content

Define simple text content for Timeline items using string values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/content/string-based/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/content/string-based/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/content/string-based/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/string-based/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/string-based" %}

### Templated content

Create rich, dynamic content for Timeline items by specifying template selectors that reference HTML elements with custom markup and styling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/content/template-based/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/content/template-based/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/content/template-based/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/content/template-based/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/content/template-based" %}

## Adding opposite content

Enhance Timeline items with supplementary information using the [oppositeContent](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#oppositecontent) property. This content appears on the opposite side of the timeline from the main content, providing additional context such as dates, metadata, or secondary details. Like the content property, oppositeContent accepts both string and template values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/opposite-content/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/opposite-content/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/opposite-content/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/opposite-content/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/opposite-content" %}

## Customizing dot appearance

Personalize the visual appearance of Timeline item dots using the [dotCss](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#dotcss) property. This property accepts CSS class names that enable custom styling including icons, background images, colors, and text content.

### Adding icons

Apply CSS classes containing icon fonts or icon libraries to display meaningful icons that represent each timeline event or milestone.

### Adding images

Incorporate custom images as dot backgrounds by defining CSS classes with `background-image` properties, perfect for displaying avatars, logos, or event-specific imagery.

### Adding text

Display short text labels within dots using CSS classes that define [`content`](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#content) properties, useful for showing abbreviations, numbers, or status indicators.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/dot-item/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/dot-item/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/dot-item/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/dot-item/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/dot-item" %}

## Disabling items

Control item interactivity using the [disabled](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#disabled) property. When set to `true`, the item appears in a disabled state with reduced opacity and becomes non-interactive. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/timeline/items/disabled/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/timeline/items/disabled/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/timeline/items/disabled/index.css %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/timeline/items/disabled/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/timeline/items/disabled" %}

## CSS class customization

Apply custom styling to individual Timeline items using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/timeline/timelineItem/#cssclass) property. This property accepts CSS class names that enable comprehensive visual customization including colors, fonts, spacing, and layout modifications.
