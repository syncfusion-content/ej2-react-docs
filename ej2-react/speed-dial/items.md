---
layout: post
title: Items in React Speed dial component | Syncfusion
description: Learn here all about Items in Syncfusion React SpeedDial component of Syncfusion Essential JS 2 and more.
control: Items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Items in React Speed dial component

The React Speed Dial action items can be added by using [`items`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#items) property.

| Fields | Type | Description |
|------|------|-------------|
| [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) | `string` | Defines the text content of SpeedDialItem. |
| [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) | `string` | Defines one or more CSS classes to include an icon or image in Speed Dial item. |
| [`disabled`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#disabled) | `boolean` | Defines whether to enable or disable the SpeedDialItem. |
| [`id`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#id) | `string` | Defines a unique value for the SpeedDialItem which can be used to identify the item in event args. |
| [`title`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#title) | `string` | Defines the title of SpeedDialItem to display tooltip. |

## Icons in Speed Dial items

You can customize the icon and text of Speed Dial action items using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) properties.

### Icon only

You can show icon only in Speed Dial items by setting [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) property. You can show tooltip on hover to show additional details to end-user by setting [`title`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#title) property.

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

You can show only text in Speed Dial items by setting [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) property.

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

You can show icon along with text in Speed Dial items by setting [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#iconcss) and [`text`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/speedDialItemModel/#text) properties.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/items-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/items-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/items-cs3" %}

## Template

The Speed Dial supports to customize the action items and entire pop-up container by setting [`itemTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#itemtemplate) and [`popupTemplate`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#popuptemplate) properties. For more details about templates, check out the link [here](https://ej2.syncfusion.com/react/documentation/speed-dial/template/).