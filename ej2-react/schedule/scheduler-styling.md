---
layout: post
title: Style and Appearance in React Scheduler | Syncfusion
description: Learn how to style the Syncfusion React Scheduler by overriding default CSS classes and creating custom themes with Theme Studio.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Scheduler

To customize the Scheduler's appearance, override its default CSS. You can also create a custom theme with [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=tailwind3). The following table lists common Scheduler CSS classes used for styling different views and elements.

> **Tip:** Start with the view-specific CSS class and add more specific selectors only when necessary.

| CSS class | Purpose |
|-------|---------|
| .e-schedule .e-vertical-view .e-work-cells | Work cells in vertical views of the Scheduler |
| .e-schedule .e-month-view .e-work-cells | Work cells in month view of the Scheduler |
| .e-schedule .e-month-view .e-other-month | Work cells from other months in month view |
| .e-schedule .e-timeline-view .e-work-cells | Work cells in timeline views of the Scheduler |
| .e-schedule .e-timeline-month-view .e-work-cells | Work cells in timeline month view |
| .e-schedule .e-timeline-year-view .e-work-cells | Work cells in timeline year view |
| .e-schedule .e-timeline-year-view .e-work-cells.e-other-month | Work cells from other months in timeline year view |
| .e-schedule .e-month-agenda-view .e-work-cells | Work cells in month agenda view |
| .e-schedule .e-month-agenda-view .e-other-month | Work cells from other months in month agenda view |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-other-month | Work cells from other months in year view |
| .e-schedule .e-vertical-view .e-all-day-cells | All-day cells in vertical views |
| .e-schedule .e-vertical-view .e-work-hours | Work-hour cells in vertical views |
| .e-schedule .e-month-view .e-work-days | Work-day cells in month view |
| .e-schedule .e-month-agenda-view .e-work-days | Work-day cells in month agenda view |
| .e-schedule .e-timeline-view .e-work-hours | Work-hour cells in timeline views |
| .e-schedule .e-timeline-month-view .e-work-days | Work-day cells in timeline month view |
| .e-schedule .e-timeline-year-view .e-work-cells.e-work-days | Work-day cells in timeline year view |
| .e-schedule .e-vertical-view .e-day-wrapper .e-appointment | Appointments in vertical views |
| .e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment | All-day appointments in vertical views |
| .e-schedule .e-month-view .e-appointment | Appointments in month view |
| .e-schedule .e-timeline-view .e-appointment | Appointments in timeline views |
| .e-schedule .e-timeline-month-view .e-appointment | Appointments in timeline month view |
| .e-schedule .e-timeline-year-view .e-event-table .e-appointment | Appointments in timeline year view |
| .e-schedule .e-year-view .e-calendar-wrapper .e-month-calendar.e-calendar .e-appointment | Appointments in year view |
| .e-schedule .e-agenda-view .e-appointment | Appointments in agenda view |
| .e-schedule .e-month-agenda-view .e-appointment-indicator | Appointment indicators in month agenda view |
| .e-schedule .e-block-appointment | Blocked appointments |
| .e-schedule .e-read-only | Read-only appointments |
| .e-appointment-border | Selected appointments |
| .e-selected-cells | Selected work cells |
| .e-header-cells | Header cells |
| .e-schedule .e-vertical-view .e-resource-cells | Resource cells in vertical views |
| .e-schedule .e-month-view .e-resource-cells | Resource cells in month view |
| .e-schedule .e-timeline-view .e-resource-cells | Resource cells in timeline views |
| .e-schedule .e-timeline-month-view .e-resource-cells | Resource cells in timeline month view |
| .e-parent-node | Parent resource cells in timeline views |
| .e-child-node | Child resource cells in timeline views |

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete API documentation
* [Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive Scheduler demos
