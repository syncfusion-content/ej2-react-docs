---
layout: post
title: Styles in React Skeleton | Syncfusion
description: Apply custom CSS classes to React Skeletons to control shimmer color, dimensions, and visibility for any design system.
control: Skeleton
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles in React Skeleton

The React Skeleton component provides flexible styling options to match your application's design requirements. Customize the visual appearance of React Skeleton placeholders to align with your brand colors, layout patterns, and component hierarchy.

## Custom styling with cssClass

Apply custom CSS styling to React Skeleton components using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/skeleton#cssclass) property. This approach enables you to modify visual properties such as shimmer wave color, background color, dimensions, and animation speed. CSS customization provides fine-grained control over React Skeleton appearance across your application.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/skeleton/styles-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/skeleton/styles-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/skeleton/styles-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/skeleton/styles-cs1" %}

## Visibility control

Control the display state of React Skeleton components using the [`visible`](https://ej2.syncfusion.com/react/documentation/api/skeleton#visible) property. Set `visible` to `true` to display the React Skeleton placeholder during loading, and change to `false` when content finishes loading and should be displayed. This property enables dynamic React Skeleton toggling based on content loading state, allowing you to seamlessly transition from placeholder to actual content without requiring component replacement.