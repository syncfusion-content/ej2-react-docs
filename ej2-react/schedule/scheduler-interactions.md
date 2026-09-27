---
layout: post
title: Scheduler Interactions in React Scheduler | Syncfusion
description: Learn about mouse and touch interactions in the Syncfusion React Scheduler, including cell selection, event selection, and date navigation.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Interactions in React Scheduler

The following table summarizes common Scheduler actions and how they work with mouse and touch interactions.

| Actions | Mouse interaction | Touch interaction |
|-------|---------| --------------- |
| Single click or tap on cells | Single click a cell to select it. | Single tapping a cell displays a `+` icon on the cell. Tapping it again opens the new event editor window. |
| Multiple cell selection | Single click a cell and drag the selection across other cells to enable multiple cell selection. | Multiple cell selection is not available with touch gestures. |
| Event selection | Single click an event to select it. | Tap and hold an event to select it and open a popup with edit and delete options. The popup also displays the selected event subject. |
| Multiple event selection and deletion | Press `Ctrl` and click multiple events one after another to enable multiple event selection. Press `Delete` after selection to delete all selected events. | Tap and hold an event to select it, then tap other events to enable multiple selection. The popup remains open and shows the count of selected events. Use the `Delete` option from the popup to remove them. |
| Date navigation | Click the previous or next date navigation icons in the header bar to move between dates. | Swipe the Scheduler viewport left or right to navigate between dates on touch devices. You can disable this behavior by setting the [`allowSwiping`](https://ej2.syncfusion.com/react/documentation/api/schedule#allowswiping) property to `false`. Swipe navigation does not work when a horizontal scroller is present in the Scheduler. You can also use the previous and next navigation icons in the header bar. |
| View navigation | Use the view options in the header bar to switch between views. | Use the popup options at the top-right corner of the header bar to choose a view. |
| Drag and drop | Click an event and drag it within the Scheduler to move it. | Tap and hold an event, then drag it within the Scheduler to move it. |
| Event resizing | Hover over the edges of an event until the resize cursor appears, then drag to adjust the time range. | Touch the edges of an event and drag to resize it directly. |
| Tooltip | Hover over events or the resource header to display the tooltip. | Tap and hold events to open the tooltip. |
| Open editor window | Double-click a cell or event to open the editor window. | Tap a cell to display a `+` icon, then tap it again to open the new event editor window. To edit an event, tap it and then select the edit icon. |
| Open quick info popup | Single-click a cell to open a quick popup for creating a new event. Single-click an event to open a popup with event information, edit, and delete options. | Quick info popup is not available for single taps on cells. Single tapping an event opens a popup with event information. |

> **Tip:** Touch interactions typically use tap and hold for selection, editing, and tooltip actions.

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
