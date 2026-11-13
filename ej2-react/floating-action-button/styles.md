---
layout: post
title: Styles in React Floating Action Button | Syncfusion
description: Apply predefined React Floating Action Button styles via cssClass. Use primary, outline, info, success, warning, or danger for semantic actions.
control: Styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styles in React Floating Action Button

This section explains the different styles of React Floating Action Button.

## FAB styles

Apply predefined styles to the React Floating Action Button using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/React Floating Action Button/#cssclass) property. These semantic styles provide visual indicators for different action types and priorities.

| cssClass | Description | Use Case |
| -------- | ----------- | -------- |
| e-primary | Primary action styling (default). | Use for main user actions. |
| e-outline | Button with outline appearance. | Use for secondary actions. |
| e-info | Informative action styling. | Use for help or information actions. |
| e-success | Positive action styling. | Use for confirm or success actions. |
| e-warning | Cautionary action styling. | Use for warning or alert actions. |
| e-danger | Negative action styling. | Use for delete or destructive actions. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/styles-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/styles-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/styles-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/styles-cs1" %}

> Predefined styles are visual indicators only. Use the [`content`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#content) property to define semantic meaning for assistive technologies like screen readers, ensuring accessibility for all users.

## Styles customization

Customize the React Floating Action Button appearance by overriding default CSS classes. Create your own theme using our [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=fluent) or apply targeted CSS overrides.

| CSS Class | Purpose of Class |
|-----------|------------------|
| .e-fab | Container for the React Floating Action Button component |
| .e-fab.e-btn | Base React Floating Action Button button styling |
| .e-fab.e-btn:hover | React Floating Action Button styling on mouse hover |
| .e-fab.e-btn:focus | React Floating Action Button styling when focused via keyboard |
| .e-fab.e-btn:active | React Floating Action Button styling when pressed or active |
| .e-fab.e-btn-icon | Icon styling within the React Floating Action Button |
| .e-fab.e-btn-content | Text/content styling within the React Floating Action Button |
| .e-fab.e-primary | Primary style variant |
| .e-fab.e-outline | Outline style variant |
| .e-fab.e-info | Info style variant |
| .e-fab.e-success | Success style variant |
| .e-fab.e-warning | Warning style variant |
| .e-fab.e-danger | Danger style variant |
| .e-fab:disabled | Styling for disabled React Floating Action Button state |
| .e-fab-overlay | Overlay styling when React Floating Action Button has focus |

## Show text on hover

By using [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass), you can customize the React Floating Action Button to show text on hover with applied transition effect. For detailed information, refer `index.css` file below.

The content will behave the same , when the `enableHtmlSanitizer` is enabled. Since we are adding only the valid tags in content, sanitizing the content will not affect it.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/styles-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/styles-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/styles-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/styles-cs2" %}

## Outline customization

By using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/floating-action-button/fab/#cssclass) property, you can customize the outline color of the React Floating Action Button. Refer the `index.css` file below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/floating-action-button/styles-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/floating-action-button/styles-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/floating-action-button/styles-cs3/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/floating-action-button/styles-cs3" %}