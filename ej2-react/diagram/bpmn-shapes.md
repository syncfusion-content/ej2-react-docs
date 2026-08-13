---
layout: post
title: BPMN Shapes in React Diagram | Syncfusion®
description: Activate the BpmnDiagrams module in the React Diagram to render standardized BPMN event, activity, gateway, data, and flow shapes in business process models.
control: Bpmn shapes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Shapes in React Diagram

BPMN (Business Process Model and Notation) shapes are standardized graphical elements used to represent business processes in a visual workflow. These shapes enable teams to communicate business procedures clearly and consistently across organizations. The React Diagram component provides comprehensive support for creating BPMN diagrams with all standard shape types.

To create a BPMN shape, set the node's `shape.type` property to **Bpmn** and specify the `shape.shape` property as one of the available built-in shapes. Each BPMN shape serves a specific purpose in modeling business processes, from representing events and activities to showing data flow and decision points.

> **Important**: To use BPMN shapes in the diagram, inject the BpmnDiagrams module into the diagram component. This module provides the necessary functionality for rendering and managing BPMN-specific features.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5bpmn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5bpmn-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5bpmn-cs1" %}

N> The default value for the property `shape` is **Event**.

## Available BPMN Shapes

The React Diagram component supports the following standard BPMN shapes:

| Shape | Image |
| -------- | -------- |
| Event | ![Event Shape](images/Event.png) |
| Gateway | ![Gateway Shape](images/Gateway.png) |
| Task | ![Task Shape](images/Task.png) |
| Message | ![Message Shape](images/Message.png) |
| DataSource | ![DataSource Shape](images/Datasource.png) |
| DataObject | ![Dataobject Shape](images/Dataobject.png) |
| Group | ![Group Shape](images/Group.png) |

## BPMN Shape Types and Configuration

Each BPMN shape category includes multiple subtypes that can be configured to represent specific business process elements. The shapes can be customized with various properties to match specific modeling requirements and visual preferences.

### Events
Events represent specific occurrences that trigger, interrupt, or conclude process flows. They include start events, intermediate events, and end events, each serving different purposes in process modeling. For detailed configuration, see [BPMN Events](./bpmn-events).

### Gateways
Gateways control the sequence flow within a process by determining how paths converge and diverge. They include exclusive, inclusive, parallel, and complex gateway types for different decision-making scenarios. For detailed configuration, see [BPMN Gateways](./bpmn-gateway).

### Tasks
Tasks represent atomic work activities that cannot be broken down further. They can be configured as user tasks, service tasks, manual tasks, or other specialized task types depending on the nature of the work. For detailed configuration, see [BPMN Activities](./bpmn-activities).

### Data Elements
Data objects and data sources represent information that flows through or supports the business process, helping to model how data is created, used, and stored throughout the workflow. For detailed configuration, see [BPMN Data Object](./bpmn-dataObject) and [BPMN Data Source](./bpmn-dataSource).

### Message
Message shapes represent the content of a communication between process participants. They can be attached to events or activities to indicate sending or receiving messages during the process flow.

### Group
Group shapes are used to organize related elements within a diagram without affecting the process flow. They provide a visual grouping mechanism for organizing related activities. For detailed configuration, see [BPMN Groups](./bpmn-groups).

## Best Practices

- Use consistent shape sizing and positioning to maintain visual clarity.
- Apply appropriate shape subtypes to accurately represent business logic.
- Ensure proper sequence flow connections between shapes.
- Group related elements using the Group shape for better organization.
- Follow BPMN 2.0 standards for shape usage and process flow modeling.