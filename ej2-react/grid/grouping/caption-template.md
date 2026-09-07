---
layout: post
title: React Grid Caption Template | Syncfusion
description: Learn how to customize group captions in React Data Grid using Caption Template, apply custom content, formatting, and display group information effectively.
control: Caption template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Caption Template in React Data Grid

The [Data Grid](https://www.syncfusion.com/react-components/react-data-grid) provides the [captionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#captiontemplate) property to customize the content displayed in group caption rows. This capability enhances the presentation of grouped data by enabling the display of grouped values, record counts, and custom elements such as icons and images.

The `captionTemplate` property supports dynamic content through the `data` parameter, which exposes properties such as `field`, `headerText`, `key`, and `count`. These values can be used to display grouped values, record counts, custom text, localized content, and custom UI elements within group caption rows.

The following example illustrates displaying the `headerText`, `key`, and `count` within a customized group caption.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs1" %}

## Adding custom text in group caption

The Data Grid supports adding custom text to group captions through the `captionTemplate` property. This feature makes group captions more informative by including grouped values, record counts, or descriptive text, and the template can also display custom HTML elements such as icons or images.

In the example below, the data parameter is used to display the `key`, `count`, and `headerText` of the grouped column, along with custom text within the caption.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs17/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs17/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs17/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs17/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs17" %}

## Customize group caption text using locale

The Data Grid supports localization of group caption text, enabling the display of translated or region-specific content within group captions.

Localization can be achieved using the `L10n.load()` and `setCulture()` methods from the `@syncfusion/ej2-base` package. The `L10n.load()` method defines localized strings, while `setCulture()` applies the desired locale to the Data Grid. The following example demonstrates customizing group caption text for the "ar" (Arabic) locale.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs18/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs18/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs18/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs18/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs18" %}

## Render custom components in group captions

The Data Grid supports rendering custom components within group captions using the `captionTemplate` property. This functionality enables the integration of interactive UI elements, such as buttons, icons, or dropdowns, directly within the group caption row, enhancing both functionality and presentation.

In the example below, the [Chips](https://ej2.syncfusion.com/react/documentation/chips/getting-started) component is rendered through the caption template, with its text value dynamically assigned based on the group key.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/group-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/group-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/group-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/group-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/group-cs19" %}

## See also
- [Grouping overview](./grouping)
- [GroupSettings API](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#captiontemplate)
- [Style group captions](../style-and-appearance/grouping#customize-the-group-caption-row)