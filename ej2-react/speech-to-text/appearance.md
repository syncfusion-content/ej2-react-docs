---
layout: post
title: Appearance in React SpeechToText component | Syncfusion
description: Checkout and learn about Appearance with React SpeechToText component of Syncfusion Essential JS 2 and more details.
control: SpeechToText
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in ##Platform_Name## SpeechToText component

## Customizing the button

You can use the [buttonSettings](../api/speech-to-text/#buttonSettings) property to customize the appearance of the start and stop buttons in the speech to text conversion.

### Setting start content

You can use the [content](../api/speech-to-text/buttonSettingsModel/#content) property to define text content for the listening start state in the SpeechToText button.

### Setting stop content

You can use the [stopContent](../api/speech-to-text/buttonSettingsModel/#stopContent) property to define text content for the listening stop state in the SpeechToText button.

### Setting iconcss

You can use the [iconCss](../api/speech-to-text/buttonSettingsModel/#iconCss) property to apply a CSS class to customize the icon appearance for the listening start state.

### Setting stop iconcss

You can use the [stopIconCss](../api/speech-to-text/buttonSettingsModel/#stopIconCss) property to apply a CSS class to customize the icon appearance for the listening stop state.

### Positioning the button icon

The [iconPosition](../api/speech-to-text/buttonSettingsModel/#iconPosition) property controls the icon's placement, allowing it to be displayed on the top, bottom, left, or right side of the button's text.

### Configuring the primary button

The [isPrimary](../api/speech-to-text/buttonSettingsModel/#isPrimary) property configures the button's appearance to indicate a primary action. Setting this to `true` makes the button more prominent. This is a convenient alternative to manually adding the `e-primary` style via the `cssClass` property.

The following code sample demonstrates how to configure these button properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/appearance/button-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/appearance/button-settings/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/button-settings/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/appearance/button-settings/index" %}

## Customizing the Tooltip Display

The [tooltipSettings](../api/speech-to-text/#tooltipSettings) property allows customization of the tooltip's content and position.

### Setting start content

You can use the [content](../api/speech-to-text/tooltipSettingsModel/#content) property to customize the content to be displayed in the tooltip when the speech recognition begins.

### Setting stop content

You can use the [stopContent](../api/speech-to-text/tooltipSettingsModel/#stopContent) property to customize the stop button tooltip text which is displayed on-hover.

### Positioning the tooltip

The [position](../api/speech-to-text/tooltipSettingsModel/#position) property determines the placement of the tooltip relative to the button.

The following example shows how to configure the tooltip settings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/tooltip-settings/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/appearance/tooltip-settings/index" %}

## Applying Custom Styles with cssClass

The [cssClass](../api/speech-to-text/#cssClass) property provides a way to apply custom styling to the Speech-to-Text component. This property can be used to add custom user-defined classes or apply predefined styles. You can customize by adding the cssClass property with the below defined class. 

|---|---|
| `e-primary` | Represents a primary action. |
| `e-outline` | Renders the button with an outline style. |
| `e-info` | Indicates an informative action. |
| `e-success` | Indicates a positive action. |
| `e-warning` | Warns the user of a potential issue. |
| `e-danger` | Indicates a destructive or negative action. |

## Setting cssclass

You can use the [cssClass](../api/speech-to-text/#cssClass) property to customize the appearance of the SpeechToText component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/speech-to-text/appearance/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/speech-to-text/appearance/cssClass/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/speech-to-text/appearance/cssClass/styles.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speech-to-text/appearance/cssClass/index" %}
