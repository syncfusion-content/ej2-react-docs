---
layout: post
title: How to create a wizard using Tab in React Tab | Syncfusion
description: Build a multi-step form wizard in the Syncfusion React Tab by enabling and selecting tab items in response to user input.
control: Create wizard using tab 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create a wizard using Tab in React Tab

Tab items can be disabled dynamically by passing the index and a boolean value to the [`enableTab`](https://ej2.syncfusion.com/react/documentation/api/tab#enabletab) method. An item can be selected by passing an index or HTML element to the [`select`](https://ej2.syncfusion.com/react/documentation/api/tab#select) method.

Create the following contents for each tab in the wizard.
1. **Search tab:**
   Created with [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/data-binding) to select the source, destination, and type of ticket. A [DatePicker](https://ej2.syncfusion.com/react/documentation/datepicker/getting-started) for choosing the date of journey.
2. **Train tab:**
   Based on the selected start and end points, populates the Grid with a random list of available seats and trains. Define the columns and the row-selected event for validation. After the source and destination are chosen, update the [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid#datasource) for the Grid.
3. **Passenger tab:**
   A table with TextBox, NumericTextBox, and DropDownList for adding the passenger name, age, gender, and preferred berth/seat. Add validation on entering the passenger details to proceed.
4. **Payment tab:**
   Calculates the ticket cost based on location, passenger count, and ticket type. Generate data for the Grid with passenger details, train number, and ticket cost summary.

You can go back on each tab using the buttons available in it, and tabs are [`disabled`](https://ej2.syncfusion.com/react/documentation/api/tab/tabItem#disabled) to prevent navigation via tab header click actions. Once you end the wizard, all the data is cleared and the wizard returns to the starting tab.

The following demo is designed for a simple train reservation module that enables and disables tab items based on the sequential validation of each Tab's content.

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
{% highlight css tabtitle="index.css" %}
{% include code-snippet/tab/wizard-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/wizard-cs1" %}
