---
layout: post
title: Title and Subtitle in React Sankey Chart component | Syncfusion
description: Learn here all about Title and Subtitle in Syncfusion React Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Title and Subtitle
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Title and Subtitle in React Sankey Chart component

The Sankey Chart supports adding descriptive titles and subtitles to provide context and information about your data visualization. These text elements help users quickly understand the purpose and content of the diagram. You can fully customize the text, styling, alignment, and appearance using dedicated properties.

This guide covers title and subtitle configuration, styling options, and best practices for effective diagram labeling.

## Title and Subtitle Properties

| Property | Type | Description |
|----------|------|-------------|
| title | string | The main title text displayed at the top of the chart. |
| subTitle | string | The subtitle text displayed below the main title. |
| titleStyle | object | Styling options for the title text. |
| subTitleStyle | object | Styling options for the subtitle text. |

## Title/Subtitle Style Properties

Both `titleStyle` and `subTitleStyle` support the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | string | null | Font size for the text. |
| fontWeight | string | null | Font weight (e.g., '400', '700'). |
| fontFamily | string | null | Font family name. |
| color | string | null | Text color. |
| fontStyle | string | 'normal' | Font style ('normal' or 'italic'). |
| opacity | number | 1 | Text opacity (0 to 1). |
| textAlignment | string | 'Center' | Text alignment ('Left', 'Center', 'Right'). |

## Basic Title and Subtitle

Add a main title and descriptive subtitle to your Sankey Chart to provide context about the data visualization:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/title-subtitle/basic-cs1" %}

## Customized Title and Subtitle Styling

Apply custom styling to both the title and subtitle including font properties, colors, alignment, and opacity to match your design requirements:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/title-subtitle/customization-cs1" %}

## Title Only (Without Subtitle)

Add only a title to the Sankey Chart when a subtitle is not needed. This provides a clean, minimal header for your visualization:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/title-only-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/title-only-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/title-subtitle/title-only-cs1" %}

## Title with Different Alignments

Control the alignment of title and subtitle text:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/alignment-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/title-subtitle/alignment-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/title-subtitle/alignment-cs1" %}

## Title Best Practices

- **Descriptive**: Use clear, descriptive titles that explain what the chart shows
- **Concise**: Keep titles brief and to the point
- **Hierarchy**: Make the title larger and bolder than the subtitle for visual hierarchy
- **Readability**: Ensure sufficient contrast between text color and background
- **Font Choice**: Use readable fonts like Segoe UI, Arial, or Verdana
