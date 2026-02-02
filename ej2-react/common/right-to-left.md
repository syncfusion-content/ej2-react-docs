---
layout: post
title: Right to Left (RTL) in React Common control | Syncfusion
description: Learn how to enable Right-to-Left (RTL) support in Syncfusion React components for languages like Arabic and Hebrew.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Right-To-Left Support in Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Right-to-Left (RTL) support is essential for applications serving users who read and write in languages that flow from right to left, such as Arabic, Hebrew, and Persian. RTL rendering ensures that UI elements, text alignment, and navigation patterns align with the natural reading direction of these languages, providing an intuitive and culturally appropriate user experience.

Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components provide built-in RTL support through the `enableRtl` property. When set to `true`, this property applies the `e-rtl` CSS class to the component, automatically rendering all internal elements and layout structures in a right-to-left direction. This transformation affects text alignment, icon positioning, navigation flow, and component-specific layouts without requiring manual CSS adjustments.

## Enable RTL for all components

To enable RTL support globally across all Syncfusion<sup style="font-size:70%">&reg;</sup> components in the application, set the `enableRtl` property to `true` using the `L10n.load()` method or by configuring it at the application root level. This approach ensures consistent RTL behavior throughout the application and is recommended when the entire application targets RTL language users. The following example demonstrates global RTL enablement using the ListView component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/right-to-left-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/right-to-left-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/right-to-left-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/right-to-left-cs1" %}

## Enable RTL for an individual component

To enable RTL support for specific components while maintaining left-to-right rendering for the rest of the application, set the `enableRtl` property directly on individual component instances. This selective approach is useful in mixed-language interfaces or when only certain sections of the application require RTL rendering. The following example demonstrates individual RTL enablement using the ListView component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/common/individual-rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/common/individual-rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/common/individual-rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/common/individual-rtl-cs1" %}