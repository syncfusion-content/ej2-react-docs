---
layout: post
title: Chip Customization in React MultiSelect Dropdown | Syncfusion
description: Style individual selected-value chips in the React MultiSelect Dropdown by handling the tagging event and applying custom CSS classes through the setClass method.
control: Chip customization 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Chip Customization in React MultiSelect Dropdown

The MultiSelect provides chip customization through the [`tagging`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#tagging) event. Within this event, apply custom CSS classes to chip elements using the `setClass` method provided in the event arguments.

The following sample demonstrates chip-customization with the MultiSelect component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/chip-customization-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/chip-customization-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/chip-customization-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/chip-customization-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/chip-customization-cs2" %}