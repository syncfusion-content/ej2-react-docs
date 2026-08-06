---
layout: post
title: Editor Window Customization in React Scheduler | Syncfusion
description: Learn how to customize the editor window and quick pop-up in the Syncfusion React Scheduler to match your data and design needs.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Editor Window Customization in React Scheduler

The Scheduler uses popups and dialogs to display notifications and provides a detailed event editor window to simplify appointment creation and editing. You can customize this editor window, its fields, and apply validations as needed.

## Event editor

The editor window usually opens on the Scheduler, when a cell or event is double clicked. When a cell is double clicked, the detailed editor window opens in "Add new" mode, whereas when an event is double clicked, the same is opened in an "Edit" mode.

In mobile devices, you can open the detailed editor window in edit mode by clicking the edit icon on the popup, that opens on single tapping an event. You can also open it in add mode by single tapping a cell, which will display a `+` indication, clicking on it again will open the editor window.

> **Note:** You can prevent the editor window from opening by rendering the Scheduler in [`readonly`](https://ej2.syncfusion.com/react/documentation/api/schedule#readonly) mode or by implementing code customization within the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event.

### How to change the editor window header title and text of footer buttons

You can customize the header title and footer button text by updating the corresponding localized strings in the Scheduler.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs8" %}

### How to change the label text of default editor fields

To change the default labels such as Subject, Location and other field names in the editor window, make use of the `title` property available within the field option of [`eventSettings`](https://ej2.syncfusion.com/react/documentation/api/schedule/eventSettings).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs9" %}

### Field validation

To ensure data quality, you can validate required fields in the editor window on the client-side before submission by adding validation rules to each field.

> **Important:** The appointment fields accept both `string` and `object` type values. To perform validations, specify `object` values for the event fields instead of simple strings.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/local-data-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/local-data-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/local-data-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/local-data-cs10" %}

> **Tip:** For a comprehensive list of available validation rules, refer to the [Form Validation](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules) documentation.

### Add additional fields to the default editor

To extend the default event editor with custom fields, use the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event, which triggers before the editor opens on the Scheduler.

**Key Requirements:**
- The additional field (any form element) must have the class name `e-field` to enable automatic processing
- This ensures the custom field data is handled along with the default event object
- In the following example, an `Event Type` field has been added and its value is processed with the event data

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs1" %}

### Customizing the default time duration in editor window

By default, the start and end time duration in the event editor are based on the `interval` value set in the [`timeScale`](https://ej2.syncfusion.com/react/documentation/api/schedule#timescale) property.

> **Note:** The default [`interval`](https://ej2.syncfusion.com/react/documentation/api/schedule/timeScale#interval) value is `30` minutes. To customize this duration, modify the [`duration`](https://ej2.syncfusion.com/react/documentation/api/schedule/popupOpenEventArgs#duration) option in the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs2" %}

### How to prevent the display of editor and quick popups

To prevent the editor or quick info popup from appearing, set the `cancel` property to `true` in the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs3" %}

To prevent only specific popups, check the `type` property in the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule/popupOpenEventArgs) event arguments. The available popup types are:

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

### Customizing timezone collection in the editor window

By default, the timezone collections in the editor window have been loaded with built-in timezone collections. Now we can be able to customize the timezone collections using the [`timezoneDataSource`](https://ej2.syncfusion.com/react/documentation/api/schedule#timezonedatasource) property with the collection of [`TimezoneFields`](https://helpej2.syncfusion.com/react/documentation/api/schedule/timezoneFields) data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/event-template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/event-template-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/event-template-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/event-template-cs2" %}

## Customizing event editor using template

The event editor window can be fully customized using the [`editorTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editortemplate) option. This allows you to design a custom editor with required fields using script templates of type **text/x-template**.

**Template Requirements:**
- Each field must have the **e-field** class for internal processing
- Assign the template ID to the [`editorTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editortemplate) option
- Custom fields will replace the default editor window

> **Note:** The **e-field** class is applicable only for **DropDownList**, **DateTimePicker**, **MultiSelect**, **DatePicker**, **CheckBox**, and **TextBox** components. These components have built-in field processing support.

> **Important:** When using Syncfusion<sup style="font-size:70%">&reg;</sup> sub-components in custom templates, configure them as required Syncfusion<sup style="font-size:70%">&reg;</sup> components (e.g., **DropDownList**, **DateTimePicker**) within the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event. This step can be skipped if using standard HTML form elements.

Learn how to customize the event editor window using templates from this video:

{% youtube "https://www.youtube.com/watch?v=r24VBNlUmGg" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs4" %}

### How to customize header and footer using template

The editor window's header and footer can be enhanced with custom designs using the [`editorHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editorheadertemplate) and [`editorFooterTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editorfootertemplate) options. To achieve this, create a script template that includes the necessary fields. Ensure that the template type is set to **text/x-template**.

In this demo, we tailor the editor's header according to the appointment's subject field using the [`editorHeaderTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editorheadertemplate). Furthermore, we make use of the [`editorFooterTemplate`](https://ej2.syncfusion.com/react/documentation/api/schedule#editorfootertemplate) to handle the functionality of validating specific fields before proceeding with the save action or canceling it if validation requirements are not met.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-header-footer-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-header-footer-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-header-footer-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-header-footer-cs1" %}

### How to add resource options within editor template

You can include a resource field with multiple selection support using a MultiSelect control in the editor template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs5" %}

### How to add recurrence options within editor template

The following example demonstrates how to include recurrence options in the editor template by importing and using the `RecurrenceEditor` component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs6" %}

### Apply validations on editor template fields

The following example applies validation to the status field in a custom editor template.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs7" %}

### How to save the customized event editor using template

When custom fields in your template do not have the **e-field** class, you must handle field values externally using the [`popupClose`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupclose) event.

> **Important:** Data can only be retrieved when users click `save` or `delete`. Data is not retrieved when they click `close` or `cancel` in the editor window. Plan your custom field handling accordingly.

The following code example shows how to save the customized event editor using a template by the [`popupClose`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupclose) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs8" %}

In case, if you need to prevent only specific popups on Scheduler, then you can check the condition based on the popup type. The types of the popup that can be checked within the [`popupClose`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupclose) event are as follows.

| Type | Description |
|------|-------------|
| Editor | For Detailed editor window.|
| QuickInfo | For Quick popup which opens on cell click.|
| EditEventInfo |For  Quick popup which opens on event click.|
| ViewEventInfo | For Quick popup which opens on responsive mode.|
| EventContainer | For more event indicator popup.|
| RecurrenceAlert | For edit recurrence event alert popup.|
| DeleteAlert | For delete confirmation popup.|
| ValidationAlert | For validation alert popup.|
| RecurrenceValidationAlert | For recurrence validation alert popup.|

## Quick popups

Quick info popups appear when users single-click a cell or event on desktop mode. They provide a lightweight way to:
- Add a quick event by providing a subject and saving it (on cell click)
- View event overview information (on event click)
- Edit or delete events through available options

To disable quick info popups, set [`showQuickInfo`](https://ej2.syncfusion.com/react/documentation/api/schedule#showquickinfo) to `false`.

> **Note:** Quick popups on cell single-click are not supported on mobile devices. Mobile users must use the detailed editor window instead.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs9" %}

### How to open QuickInfo popup on multiple cell selection

By default, the `QuickInfo` popup opens on single cell click. To open it after multiple cell selection:

1. Select the desired cells
2. Press `Enter` key

Alternatively, you can automatically open the quick info popup immediately after multiple cell selection by setting [`quickInfoOnSelectionEnd`](https://ej2.syncfusion.com/react/documentation/api/schedule#quickinfoonselectionend) to `true` (default is `false`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs10" %}

### How to change the watermark text of quick popup subject

By default, `Add Title` text is displayed on the subject field of quick popup. To change the default watermark text, change the value of the appropriate localized word collection used in the Scheduler.

```ts
L10n.load({
    'en-US': {
        'schedule': {
          'addTitle' : 'New Title'
        }
    }
});
```

### Customizing quick popups

The appearance and behavior of quick popup windows can be customized using the [`quickInfoTemplates`](https://ej2.syncfusion.com/react/documentation/api/schedule/quickInfoTemplates) property of the Scheduler.

> **Tip:** The `quickInfoTemplates` property provides multiple sub-options to customize quick popups for different scenarios (cell click, event click, responsive view). Refer to the API documentation for all available template options.

* header - Accepts the template design that customizes the header part of the quick popup.
* content - Accepts the template design that customizes the content part of the quick popup.
* footer - Accepts the template design that customizes the footer part of the quick popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/quick-info-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/quick-info-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/quick-info-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/quick-info-cs1" %}

> The quick popup in adaptive mode can also be customized using [`quickInfoTemplates`](https://ej2.syncfusion.com/react/documentation/api/schedule#quickinfotemplates)  using `e-device` class.

## More events indicator and popup

When the number of appointments count that lies on a particular time range * default appointment height exceeds the default height of a cell in month view and all other timeline views, a `+ more` text indicator will be displayed at the bottom of those cells. This indicator denotes that the cell contains few more appointments in it and clicking on that will display a popup displaying all the appointments present on that day.

> To disable this option of showing popup with all hidden appointments, while clicking on the text indicator, you can do code customization within the [`popupOpen`](https://ej2.syncfusion.com/react/documentation/api/schedule#popupopen) event.

The same indicator is displayed on all-day row in calendar views such as day, week and work week views alone, when the number of appointment count present in a cell exceeds three. Clicking on the text indicator here will not open a popup, but will allow the expand/collapse option for viewing the remaining appointments present in the all-day row.

The following code example shows how to disable the display of such popups while clicking on the more text indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs11/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs11/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs11" %}

### How to customize the popup that opens on more indicator

The following code example shows you how to customize the default more indicator popup in which number of events rendered count on the day has been shown in the header.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs12/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs12/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs12" %}

### How to prevent the display of popup when clicking on the more text indicator

It is possible to prevent the display of popup window by passing the value `true` to `cancel` option within the [`MoreEventsClick`](https://ej2.syncfusion.com/react/documentation/api/schedule#moreeventsclick) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs13/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs13/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs13" %}

### How to navigate Day view when clicking on more text indicator

The following code example shows you how to customize the [`MoreEventsClick`](https://ej2.syncfusion.com/react/documentation/api/schedule#moreeventsclick) property to navigate to the Day view when clicking on the more text indicator.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs14/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs14/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs14" %}

### How to close the editor window manually

You can close the editor window by using [closeEditor](https://ej2.syncfusion.com/react/documentation/api/schedule#closeeditor) method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs15/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs15/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs15" %}

### How to open the quick info popup manually

You can open the quick info popup in scheduler by using the [openQuickInfoPopup](https://ej2.syncfusion.com/react/documentation/api/schedule#openquickinfopopup) public method. To open the cell quick info popup, you can pass the cell data as an argument to the method. To open the event quick info popup, you should pass the event data object as an argument to the method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs16/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs16/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs16" %}

### How to close the quick info popup manually

You can close the quick info popup in scheduler by using the [closeQuickInfoPopup](https://ej2.syncfusion.com/react/documentation/api/schedule#closequickinfopopup) public method. The following code example demonstrates the how to close quick info popup manually.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-cs17/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-cs17/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-cs17" %}

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler)
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule)
* [Event Templates](https://ej2.syncfusion.com/react/documentation/schedule/editor-template)
* [Quick Info Templates](https://ej2.syncfusion.com/react/documentation/api/schedule/quickInfoTemplates)
* [CRUD Actions Guide](https://ej2.syncfusion.com/react/documentation/schedule/crud-actions)
* [Form Validation Documentation](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules)
* [Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview)
