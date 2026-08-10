---
layout: post
title: Custom Value in React MultiSelect Dropdown | Syncfusion
description: Let users add new options not present in the original React MultiSelect Dropdown dataset by enabling allowCustomValue and handling the customValueSelection event.
control: Custom value 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Value in React MultiSelect Dropdown

The MultiSelect enables users to add new custom options not present in the original dataset when [`allowCustomValue`](https://ej2.syncfusion.com/react/documentation/api/multi-select/#allowcustomvalue) is enabled. When a custom value is selected, the `customValueSelection` event is triggered.

The following sample demonstrates configuration of custom value support with the MultiSelect component.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/multiselect/basic-cs4" %}