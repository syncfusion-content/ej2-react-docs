---
layout: post
title: Resizing in React MultiSelect Dropdown | Syncfusion
description: Enable dynamic popup resizing in the React MultiSelect Dropdown with the allowResize property, with the resized dimensions persisting across browser sessions.
control: Resizing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Resizing in React MultiSelect Dropdown

Enable popup resizing in the React MultiSelect component using the [allowResize](https://ej2.syncfusion.com/react/documentation/api/multi-select/#allowresize) property. When enabled, users can dynamically adjust the popup size in both horizontal and vertical directions to improve visibility. Resized dimensions persist across sessions, providing a consistent user experience.

```tsx
<MultiSelectComponent
  allowResize={true}
  dataSource={data}
  fields={{ text: 'Name', value: 'Id' }}
/>
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs36/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/multiselect/basic-cs37/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/multiselect/basic-cs37/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

![Resizing in React MultiSelect Component](../images/multiselect-resize.gif)

*The popup can be resized in both horizontal and vertical directions.*
