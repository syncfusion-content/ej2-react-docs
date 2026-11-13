---
layout: post
title: Items in React Speed Dial | Syncfusion
description: Define Speed Dial action items via the items property. Each item supports text, icon, disabled state, and ID for click events and tooltips.
control: Items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Items in React Speed Dial

Define the action items displayed in the React Speed Dial popup using the [`items`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#items) property. Each item is a [`SpeedDialItemModel`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speeddialitemmodel) object that can include text, icons, disabled states, and custom IDs. Configure item appearance and behavior to create a functional and user-friendly action menu.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) | `string` | Defines the text content of SpeedDialItem. |
| [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) | `string` | Defines one or more CSS classes to include an icon or image in React Speed Dial item. |
| [`disabled`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#disabled) | `boolean` | Defines whether to enable or disable the SpeedDialItem. |
| [`id`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#id) | `string` | Defines a unique value for the SpeedDialItem which can be used to identify the item in event args. |
| [`title`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#title) | `string` | Defines the title of SpeedDialItem to display tooltip. |

## Icons in React Speed Dial items

You can customize the icon and text of React Speed Dial action items using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) properties.

### Icon only

Display only an icon in React Speed Dial items by setting the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) property. Add the [`title`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#title) property to show a tooltip on hover, providing users with item descriptions when text is not displayed.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs1" %}

### Text only

Display only text in React Speed Dial items by setting the [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) property without specifying icon properties. This creates a text-based menu suitable for action lists or labels.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs2" %}

### Icon with text

Display both icon and text in React Speed Dial items by setting both the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) properties. This combination provides clear visual and textual identification for each action.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs3" %}

### Disabled

Disable React Speed Dial items by setting the [`disabled`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#disabled) property to `true`. Disabled items appear grayed out and cannot be clicked by users.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs4/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs4" %}

## Animation

Animate the appearance of React Speed Dial action items when the popup opens or closes. Customize animation behavior using the [`animation`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#animation) property to control the `effect`, `delay`, and `duration`. By default, items animate with a `fade` effect. Choose from various [`speeddialanimation`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialAnimationEffect/) effects to match your design.

Below example demonstrates the React Speed Dial items with applied Zoom effect.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs5" %}

## Template

Use templates to completely customize the appearance and content of React Speed Dial action items and the popup container. The [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#itemtemplate) property customizes individual items, while [`popupTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#popuptemplate) customizes the entire popup container. For comprehensive template examples and advanced customization options, see the [Template documentation](https://ej2.syncfusion.com/react/documentation/speed-dial/template/).