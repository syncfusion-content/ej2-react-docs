---
layout: post
title: Module Injection in React Scheduler | Syncfusion
description: Learn how to import and inject modules in the Syncfusion React Scheduler to enable specific views, features, and editor options.
control: Scheduler
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Module Injection in React Scheduler

A crucial step to creating a Scheduler with required views is to import and inject the required modules into your application. Module injection enables only the necessary functionalities, optimizing the application's bundle size and performance. The Scheduler provides multiple specialized modules for different view types and features.

> **Important:** Only the modules you explicitly inject will be loaded. Attempting to use a view without injecting its corresponding module will result in a script error and the Scheduler will not render.

## Available modules

| Module | View Types | Purpose |
|--------|-----------|---------|
| `Day` | Day | Display single day with hourly time slots |
| `Week` | Week | Display 7-day week view with hourly slots |
| `WorkWeek` | Work Week | Display 5-day work week (Mon-Fri) view |
| `Month` | Month | Display calendar month view |
| `Year` | Year | Display entire year in month grid layout |
| `Agenda` | Agenda | Display list view of upcoming appointments |
| `MonthAgenda` | Month Agenda | Display month calendar with agenda list below |
| `TimelineViews` | Timeline Day, Week, Work Week | Display horizontal timeline views with resources |
| `TimelineMonth` | Timeline Month | Display month with horizontal timeline format |
| `TimelineYear` | Timeline Year | Display year with horizontal timeline format |
| `DragAndDrop` | All Views | Enable drag and drop functionality for appointments |
| `Resize` | All Views | Enable resize functionality for appointments |

> **Tip:** Use `TimelineViews` module to support all three timeline view options (Day, Week, Work Week). Module injection is modular—inject only the modules your application requires.

## Importing modules

First, import the required modules from the `@syncfusion/ej2-react-schedule` package in your component file:

```ts
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, Inject } from '@syncfusion/ej2-react-schedule';
```

## Module injection

The required modules should be injected into the Scheduler using the `Inject` component within your React component. Only the injected module functionalities will be loaded and can be worked with the Scheduler.

**Example - Basic View Modules:**

```tsx
<ScheduleComponent currentView='Week'>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda]} />
</ScheduleComponent>
```

**Example - Timeline Views with Interaction Modules:**

```tsx
<ScheduleComponent currentView='TimelineDay'>
    <Inject services={[TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
</ScheduleComponent>
```

> **Important:** If a Scheduler [`currentView`](https://ej2.syncfusion.com/react/documentation/api/schedule#currentview) is set to any view without injecting that respective view module, a script error will occur and the Scheduler will not render. Always ensure the module for your `currentView` is included in the `Inject` services array.

## Common module combinations

**Standard Views (Most Common):**
```tsx
<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
```

**Timeline-Based Applications:**
```tsx
<Inject services={[TimelineViews, TimelineMonth, TimelineYear, DragAndDrop, Resize]} />
```

**Full-Featured Application:**
```tsx
<Inject services={[Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, DragAndDrop, Resize]} />
```

## See also

* [Syncfusion React Scheduler](https://www.syncfusion.com/react-components/react-scheduler) - Component homepage
* [Scheduler Views Documentation](./views.md) - View types and configuration
* [Scheduler API Reference](https://ej2.syncfusion.com/react/documentation/api/schedule) - Complete module API reference
* [Drag and Drop Interactions](./scheduler-interactions.md#drag-and-drop) - Enable drag and drop functionality
* [Getting Started Guide](./getting-started.md) - Scheduler setup and initialization
* [React Scheduler Live Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview) - Interactive examples with different modules
* [Essential JS 2 Documentation](https://ej2.syncfusion.com/react/documentation/introduction) - Framework documentation
