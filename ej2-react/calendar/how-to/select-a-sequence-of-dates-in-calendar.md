---
layout: post
title: How to select sequence of dates in React Calendar | Syncfusion
description: Select a full week of dates in the React Calendar by combining isMultiSelection with Moment.js to compute the week range.
control: Select a sequence of dates in calendar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to select sequence of dates in React Calendar

The following example demonstrates how to select a contiguous week of dates that contains a user-chosen date. The Calendar populates the [`values`](https://ej2.syncfusion.com/react/documentation/api/calendar#values) property with the start-of-week and end-of-week dates when [`isMultiSelection`](https://ej2.syncfusion.com/react/documentation/api/calendar#ismultiselection) is enabled. Moment.js is used in this sample to compute the start and end of the week for the selected date.

> This sample uses Moment.js to parse, format, and manipulate date values. Install it with the following command:

```bash
npm install moment --save
```

> Import Moment in your component file before using the helper: `import moment from 'moment';`

The following example also relies on the [`change`](https://ej2.syncfusion.com/react/documentation/api/calendar#change) event to react whenever the user picks a date.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/howto-multi-selection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/howto-multi-selection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/howto-multi-selection-cs1" %}