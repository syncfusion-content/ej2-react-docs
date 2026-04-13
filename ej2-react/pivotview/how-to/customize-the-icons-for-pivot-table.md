---
layout: post
title: Customize the icons for pivot table in React | Syncfusion
description: Learn here all about Customize the icons for pivot table in Syncfusion React Pivotview component of Syncfusion Essential JS 2 and more.
control: Customize the icons for pivot table 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icons within the React Pivot Table component

The React Pivot Table component supports the customization of various icons across its interface. This includes icons for the field list, expand/collapse actions, and other interactive elements. You can customize these icons by overriding the default CSS classes with custom Unicode values.

## Customizing Field List Icon

To customize the field list icon, override the corresponding CSS class with a custom `content` property. The example below demonstrates how to change the default field list icon:

```css
#PivotView_PivotFieldList .e-icons.e-toggle-field-list::before {
    content: '\e337';
}
```

The Unicode value `'\e337'` represents a specific icon from the [Syncfusion icons](https://ej2.syncfusion.com/react/documentation/appearance/icons) library. Different Unicode values will display different icons.

## Implementation Steps

1. Add the CSS rule to your component's stylesheet or global styles.
2. Ensure the selector targets the correct pivot table instance using the appropriate ID.
3. Use valid Unicode values for the desired icons.
4. Test the customization to verify the icon displays correctly.

## Code Example

The following sample demonstrates a pivot table rendered with customized field list icon:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/icon-customization-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/icon-customization-cs1" %}