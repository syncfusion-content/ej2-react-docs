---
layout: post
title: Create wizard using tab in React Tab component | Syncfusion
description: Learn here all about Create wizard using tab in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Create wizard using tab 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create wizard using tab in React Tab component

Tab items can be disabled dynamically by passing the index and boolean value with the [`enableTab`](https://ej2.syncfusion.com/react/documentation/api/tab#enabletab) method and also passing index or HTML element to select an item from the tab using [`select`](https://ej2.syncfusion.com/react/documentation/api/tab#select) method.

Create the following contents for each tab in the wizard.
1. **Search tab:**
   Created with [DropDownList](../../../drop-down-list/data-binding) to select the source, destination and type of ticket. A [DatePicker](../../../datepicker/getting-started/) for choosing the date of journey.
2. **Train tab:**
   Based on the selected start and end point, populated Grid with random list of available seats and train list. Initially define the columns and row selected event for validating, after the source and destination chosen update the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) for the Grid.
3. **Passenger tab:**
   A table with Textbox, Numeric, DropDownList for adding passenger name, age, gender and preferred berth/seat. Add validation on entering passenger details to proceed.
4. **Payment tab:**
   Calculate the ticket cost based on location, passenger count and ticket type. Generate data for Grid with passenger details, train number and ticket cost summary.

You can go back on each tab using buttons available in it and tabs are [`disabled`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#disabled) to navigate through tab header click actions. Once you end the wizard all the data get cleared and wizard goes back to starting tab.

In the below demo, designed for simple train reservation module that enable/disable tab items based on sequential validation of each Tab content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/wizard-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/wizard-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/wizard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/wizard-cs1" %}
