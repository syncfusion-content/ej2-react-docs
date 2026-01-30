---
layout: post
title: Clipboard in React Schedule component | Syncfusion
description: Learn here all about Context menu in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Scheduler
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in React Schedule component

The Clipboard functionality in the Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control enhances scheduling efficiency by enabling users to cut, copy, and paste appointments with ease. This feature is especially beneficial for those managing multiple appointments, as it eliminates the need for repetitive data entry and allows users to quickly adjust their schedules without hassle.
To activate the clipboard feature in the scheduler, simply set the [`allowClipboard`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowclipboard) property to **true**.

>Note: The [`allowKeyboardInteraction`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowkeyboardinteraction) property must be true for proper functionality of the clipboard feature.

## Cut, copy and paste using keyboard

The Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control supports keyboard shortcuts to streamline appointment management:

These keyboard shortcuts enable users to efficiently manage their schedules:

| Operation | Shortcut | Description                                                      |
|-----------|----------|------------------------------------------------------------------|
| Copy      | Ctrl+C   | Duplicate appointments to streamline the scheduling process.     |
| Cut       | Ctrl+X   | Move appointments to a new time slot without duplicates.         |
| Paste     | Ctrl+V   | Place copied or cut appointments into the desired time slot.     |

To use these shortcuts, click an appointment and press **Ctrl+C** to copy or **Ctrl+X** to cut. To paste, click a time slot and press **Ctrl+V**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/clipboard-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/clipboard-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/clipboard-cs1/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/clipboard-cs1/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs1" %}

>Note: For Mac users, use **Cmd** instead of **Ctrl** for copy, cut, and paste operations.

## Cut, copy, and paste using context menu

You can programmatically manage appointments by using the public methods **cut**, **copy**, and **paste**. These methods perform the same actions as keyboard shortcuts or context menu options.

Utilize these methods to manage appointments in the Syncfusion<sup style="font-size:70%">&reg;</sup> Schedule control:

| Method | Parameters                     | Description                                                                                     |
|--------|--------------------------------|-------------------------------------------------------------------------------------------------|
| [`copy`](https://ej2.syncfusion.com/react/documentation/api/schedule#copy)   | None                           | Duplicate the selected appointment for reuse.                                                   |
| [`cut`](https://ej2.syncfusion.com/react/documentation/api/schedule#cut)    | None                           | Remove the selected appointment from its current slot for moving.                               |
| [`paste`](https://ej2.syncfusion.com/react/documentation/api/schedule#paste)  | targetElement (Scheduler's work-cell) | Insert the copied or cut appointment into the specified time slot.                              |

By using these methods, you can programmatically cut, copy, and paste appointments in the scheduler, providing more control over the appointment management process.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/clipboard-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/clipboard-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/clipboard-cs2/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/clipboard-cs2/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs2" %}

## Modifying Content before pasting

You can modify the content of an appointment before pasting it by using [`beforePaste`](https://ej2.syncfusion.com/react/documentation/api/schedule#beforepaste) event accessing the appointment details and making necessary changes.

The following example demonstrates how to seamlessly copy and paste content from a grid to a scheduler. To do this, follow these steps:

1. **Select an Item**: Click on an item in the grid.
2. **Copy the Details**: Press **Ctrl + C** to copy the selected event details.
3. **Choose a Time Slot**: Click on the desired time slot in the scheduler.
4. **Paste the Details**: Press **Ctrl + V** to paste the copied appointment details into the selected time slot.

In this example, the `beforePaste` event can be utilized to intercept the event details before they are pasted. This allows you to modify the content as needed. Such modifications could include adjusting the time, adding notes, or altering other specifics of the appointment.

>Note: Ensure that the field mapping matches with the fields in the scheduler.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/clipboard-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/clipboard-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/clipboard-cs3/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/schedule/clipboard-cs3/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/schedule/clipboard-cs3" %}

>  You can refer to our [React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [React Scheduler example](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) to knows how to present and manipulate data.
