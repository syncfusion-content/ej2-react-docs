---
layout: post
title: React Grid - Caption Template | Syncfusion
description: React Grid caption template explains customizing group captions, templates for group headers, and formatting group display with examples.
control: Caption template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group Row Title Customization in React Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the [captionTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/groupSettings#captiontemplate) property to customize the text shown in group row titles.  This feature enhances the visual presentation of grouped data by allowing the display of grouped values, record counts, and custom HTML elements such as icons or images.

The `captionTemplate` receives a data object with properties such as `field`, `headerText`, `key`, and `count`, which can be used to dynamically render informative group captions.

The following example illustrates how to display the `headerText`, `key`, and `count` within a customized group caption.

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

The Grid supports adding custom text to group captions through the `captionTemplate` property. This feature makes group captions more informative by including grouped values, record counts, or descriptive text, and can also display custom HTML elements such as icons or image.

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

The Grid supports localization of group caption text based on the locale. This enables the display of translated or region-specific content within group captions.

Localization can be achieved using the `L10n.load()` and `setCulture()` methods from the `@syncfusion/ej2-base package`. The `L10n.load()` method defines localized strings, while `setCulture()` applies the desired locale to the Grid. The following example demonstrates customizing group caption text for the "ar" (Arabic) locale.

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

## Render custom component in group caption

The Grid supports rendering custom components within group captions using the `captionTemplate` property. This functionality enables the integration of interactive UI elements such as buttons, icons, or dropdowns directly within the group caption row, enhancing both functionality and presentation.

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