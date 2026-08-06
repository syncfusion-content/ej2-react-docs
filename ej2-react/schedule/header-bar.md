---
layout: post
title: Header Customization in React Scheduler | Syncfusion
description: Learn how to show or hide the header bar and customize date and view navigation in the Syncfusion React Scheduler.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Header Customization in React Scheduler

The header part of the Scheduler can be customized easily with the built-in options available. This section covers hiding the header bar, adding custom toolbar items, configuring adaptive UI, and customizing date header cells.

## Show or hide header bar

By default, the header bar holds the date and view navigation options, through which the user can switch between dates and various views. This header bar can be hidden from the UI by setting `false` to the [`showHeaderBar`](https://ej2.syncfusion.com/react/documentation/api/schedule#showheaderbar) property. Its default value is `true`.

> **Note:** When the header bar is hidden, programmatic view navigation is still available through the Scheduler's public methods like `selectedDate` and the `currentView` properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/timescale-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/timescale-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/timescale-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/timescale-cs1" %}

## Customizing header bar using template

Apart from the default date navigation and view options on the header bar, you can add custom items into the Scheduler header bar by making use of the [`toolbarItems`](https://ej2.syncfusion.com/react/documentation/api/schedule#toolbaritems) property. To display the default items, it's Essential<sup style="font-size:70%">&reg;</sup> to assign a [`name`](https://ej2.syncfusion.com/react/documentation/api/schedule/toolbarItem#name) field to each item. The names of the default items are `Previous`, `Next`, `Today`, `DateRangeText`, `NewEvent`, and `Views`. For custom items you can give the name as `Custom` to the `name` field.

**Default toolbar items and their functions:**

| Item Name | Description |
|-----------|-------------|
| `Previous` | Navigates to the previous date range |
| `Next` | Navigates to the next date range |
| `Today` | Navigates to the current date |
| `DateRangeText` | Displays the current date range |
| `NewEvent` | Opens the event editor to create a new event |
| `Views` | Displays view navigation options |
| `Custom` | User-defined custom toolbar item |

The following example uses the default items `Previous`, `Next`, `DateRangeText`, and `Today` along with a `DropdownList` as a custom item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/header-bar-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/header-bar-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-bar-cs3/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.jsx" %}
{% include code-snippet/schedule/header-bar-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight html tabtitle="datasource.tsx" %}
{% include code-snippet/schedule/header-bar-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs1" %}

## Customizing header bar using event

Apart from the default date navigation and view options available on the header bar, you can add custom items into the Scheduler header bar by making use of the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/schedule#actionbegin) event. Here, an employee image is added to the header bar. Clicking on this image will open a popup showing that person's short profile information.

> **Tip:** The `actionBegin` event fires before any toolbar action is processed. Use this event to inject custom UI elements dynamically when the toolbar is rendered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/header-bar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/header-bar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs1" %}

## How to display the view options within the header bar popup

By default, the header bar holds the view navigation options, through which the user can switch between various views. You can move these view options to the header bar popup by setting `true` to the [`enableAdaptiveUI`](https://ej2.syncfusion.com/react/documentation/api/schedule#enableadaptiveui) property.

> **Note:** When `enableAdaptiveUI` is `true`, the view options appear in a popup menu accessible from the header bar. This is particularly useful for compact layouts or when the Scheduler is rendered in a smaller container.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/header-bar-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/header-bar-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-bar-cs2" %}

> Refer [here](./resources#adaptive-ui-in-desktop) to know more about adaptive UI in resources scheduler.

> **Tip:** Adaptive UI automatically adjusts the Scheduler's layout based on the available screen space, providing a better user experience on smaller devices.

## Date header customization

The Scheduler UI that displays the date text on all views are considered as the date header cells. You can customize the date header cells of the Scheduler either using [`dateHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#dateheadertemplate) or [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event.

**Available customization approaches:**

| Approach | Applicable Views | Use Case |
|----------|------------------|----------|
| `dateHeaderTemplate` | Day, Week, Work Week, Timeline | Template-based customization with full HTML control |
| `renderCell` event | All views including Month | Programmatic customization based on cell data |

### Using date header template

The [`dateHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#dateheadertemplate) option is used to customize the date header cells of day, week, work-week and timeline views.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/date-header-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/date-header-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/date-header-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/date-header-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/date-header-cs1" %}

### Using renderCell event

In month view, the date header template is not applicable and therefore the same customization can be added beside the date text in month cells by making use of the [`renderCell`](https://ej2.syncfusion.com/react/documentation/api/schedule#rendercell) event.

> **Note:** The `renderCell` event provides access to cell details such as the date, current view, and element type, allowing dynamic customization based on context.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/date-header-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/date-header-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/date-header-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/date-header-cs2/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/date-header-cs2" %}

## Customizing the date range text

The [`dateRangeTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#daterangetemplate) option allows you to customize the text content of the date range displayed in the scheduler. By default, the date range text is determined by the scheduler view being used. However, you can use the [`dateRangeTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#daterangetemplate) option to override the default text and specify your own custom text to be displayed.

The [`dateRangeTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#daterangetemplate) property includes the following options for customizing the date range text:

* **startDate**: The start date of the current view range
* **endDate**: The end date of the current view range
* **currentView**: The currently active view (Day, Week, Month, etc.)

> **Tip:** Use these template parameters to format the date range text according to your application's locale or business requirements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/date-header-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/date-header-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/date-header-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/date-header-cs3/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/date-header-cs3" %}

## Customizing header indent cells

It is possible to customize the header indent cells using the [`headerIndentTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#headerindenttemplate) option and change the look and appearance in both the vertical and timeline views. In vertical views, you can customize the header indent cells at the hierarchy level and you can customize the resource header left indent cell in timeline views using the template option.

**Header indent customization by view type:**

| View Type | Customization Area | Purpose |
|-----------|-------------------|---------|
| Vertical views (Day, Week, Month) | Hierarchy-level indent cells | Display resource hierarchy information |
| Timeline views | Resource header left indent cell | Show resource group labels |

**Example:** To customize the header left indent cell to display resources text, refer to the below code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/header-indent-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/header-indent-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/header-indent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/header-indent-cs1" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Views Configuration](./views.md)
* [Resources](./resources.md)
* [Scheduler Styling](./scheduler-styling.md)
* [Cell Customization](./cell-customization.md)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
