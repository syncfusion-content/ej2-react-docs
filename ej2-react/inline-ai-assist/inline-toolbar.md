---
layout: post
title: Inline toolbar configurations in React Inline AI Assist | Syncfusion
description:  Checkout and learn about inline toolbar with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar configuration in React Inline AI Assist component

The inline toolbar provides a customizable interface for users to interact with the Inline AI Assist component. You can render inline toolbar items by using the `items` property in the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property.

## Configure the toolbar and positioning

You can use the [toolbarPosition](../api/inline-ai-assist/inlineToolbarSettingsModel#toolbarPosition) property to customize footer toolbar position. It has two modes such as `Inline`, and `Bottom`. By default, the toolbarPosition is `Inline`.

By settings toolbarPosition as `Bottom`, footer items will be rendered at the bottom with a dedicated footer area.

Below sample demonstrates the usage of toolbar settings in Inline Assist component

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/toolbar-position/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/toolbar-position" %}

## Built-in toolbar items

By default, the inline toolbar renders the `send` item which allows users to send the prompt text.

## Adding custom toolbar items

You can use the [inlineToolbarSettings](../api/inline-ai-assist#inlinetoolbarsettings) property to add custom items for the inline toolbar in the Inline AI Assist. The custom items will be added along with the existing built-in items in the inline toolbar.

Each toolbar item object can include the following properties:

| Property    | Type    | Default  | Description                                                        |
|-------------|---------|----------|--------------------------------------------------------------------|
| `iconCss`   | string  | ''       | Specifies the CSS class for the item's icon.                       |
| `type`      | string  | 'Button' | Supports three types of items: `Button`, `Separator`, and `Input`. |
| `text`      | string  | ''       | Specifies the text label for the toolbar item.                     |
| `template`  | string  | ''       | Specifies a custom template for the toolbar item.                  |
| `visible`   | boolean | true     | Specifies whether to show or hide the toolbar item.                |
| `id`        | string  | ''       | Specifies a unique identifier for the toolbar item.                |
| `disabled`  | boolean | false    | Specifies whether the toolbar item is disabled and unselectable.   |
| `tooltip`   | string  | ''       | Specifies the tooltip text displayed on hover.                     |
| `cssClass`  | string  | ''       | Specifies custom CSS classes for styling the toolbar item.         |
| `align`     | string  | 'Left'   | Specifies the alignment of the toolbar item (Left, Center, Right). |
| `tabIndex`  | number  | -1       | Specifies the tab order for keyboard navigation.                   | 

Below sample demonstrates the usage of custom toolbar items in Inline Assist component

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/props/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/inline-toolbar/props" %}

## Toolbar itemClick event

The [itemClick](../api/inline-ai-assist/inlineToolbarSettingsModel#itemclick) event is triggered when the inline toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/inline-toolbar/itemClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}