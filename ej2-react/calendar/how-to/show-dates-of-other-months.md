---
layout: post
title: How to show other months in React Calendar | Syncfusion
description: Display dates from other months in the React Calendar by overriding the .e-other-month and .e-month-hide CSS classes.
control: Show dates of other months 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to show other months in React Calendar

By default, leading or trailing days that belong to the previous or next month are visually hidden inside the Calendar grid. The following example demonstrates how to make those other-month dates visible (and pointer-interactive) by overriding their default styles.

The styles below force other-month rows and day cells to display and accept user input.

```css
.e-calendar .e-content tr.e-month-hide,
.e-calendar .e-content td.e-other-month>span.e-day {
    display: block;
}

.e-calendar .e-content td.e-month-hide,
.e-calendar .e-content td.e-other-month {
    pointer-events: auto;
    touch-action: auto;
}
```

> Make sure these rules are loaded **after** the Calendar's default theme styles so that the higher specificity of your overrides takes effect. You can place them in a global stylesheet imported in `index.tsx`/`index.jsx`, or in a local CSS module.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/other-month-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/other-month-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/other-month-cs1" %}
