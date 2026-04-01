---
layout: post
title: Commands configuration in React Inline AI Assist | Syncfusion
description:  Checkout and learn about command items with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Commands configuration in React Inline AI Assist component

You can render and use the command action popup by using the `commands` property in the [commandSettings](../api/inline-ai-assist#commandsettings) property. This property helps to supply commands, component popup dimensions, and customize behavior.

## Configure command items

You can use the [commandSettings](../api/inline-ai-assist#commandsettings) property to add commands that populate the command popup. Each command item can perform a quick request based on the configured `prompt`.

Each command item object can include the following properties:

| Property    | Type    | Default | Description                                                  |
|-------------|---------|---------|--------------------------------------------------------------|
| label       | string  | ''      | Specifies the display label of the command item.             |
| prompt      | string  | ''      | Specifies the prompt text executed when the item is selected.|
| iconCss     | string  | ''      | Specifies the CSS class for the item's icon.                 |
| disabled    | boolean | false   | Specifies whether the command is disabled and unselectable.  |
| groupBy     | string  | ''      | Specifies the group category for organizing related commands.|
| id          | string  | ''      | Specifies a unique identifier for the command item.          |
| tooltip     | string  | ''      | Specifies the tooltip text displayed on hover.               |

## Command interactions

The [itemSelect](../api/inline-ai-assist/commandSettingsModel#itemselect) event is triggered when a command item is selected from the command popup in the Inline AI Assist component. This event allows developers to handle custom actions based on user selections.

## Customization of AI commands popup 

### Setting popup width

Configure the popup width using the `popupWidth` property in the commandSettings. This property accepts CSS values such as '300px', '50%', or numeric values in pixels.

### Setting popup height

Configure the popup height using the `popupHeight` property in the commandSettings. Use fixed height values to enable vertical scrolling when displaying large command lists.

## Code Example

Below sample demonstrates the usage of command settings in the Inline AI Assist component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/command-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/command-settings/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/command-settings/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/command-settings" %}

## See Also

- [Response Settings](./response-settings.md)
- [Inline Toolbar](./inline-toolbar.md)
- [Events Documentation](./events.md)
