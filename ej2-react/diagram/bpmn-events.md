---
layout: post
title: BPMN Events in React Diagram | Syncfusion®
description: Add Start, Intermediate, and End BPMN events to the React Diagram with NonInterrupting and Throwing variants to model process flow triggers.
control: Bpmn Events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Events in React Diagram

## Overview

An [`event`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent) is a common BPMN process model element that is notated with a circle. Events can occur at the beginning, middle, or end of a process flow.

The types of events are as follows:

* **Start**: Indicates where a process begins.
* **Intermediate**: Occurs during the course of a process flow.
* **NonInterruptingStart**: A start event that does not interrupt the current activity.
* **NonInterruptingIntermediate**: An intermediate event that does not interrupt the current activity.
* **ThrowingIntermediate**: An intermediate event that is thrown to trigger a corresponding catch event.
* **End**: Marks where a process terminates.
        
The `event` property of the node allows you to define the type of the event. The default value of the event property is **Start**. The following code example illustrates how to create a BPMN event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Event-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Event-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Event-cs1" %}

## BPMN Event Trigger

Event triggers are notated as icons inside the circle and represent the specific circumstances that cause the event to occur. The [`trigger`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent#trigger) property of the node allows you to set the type of trigger. By default, it is set as **none**. The following table illustrates the types of event triggers available for each event type.

| Triggers | Start | Non-Interrupting Start | Intermediate | Non-Interrupting Intermediate | Throwing Intermediate | End |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| None | ![None Trigger Start event BPMN Shape](images/None1.png)  | ![None Trigger NonInterruptingStart event BPMN Shape](images/None2.png) | ![None Trigger Intermediate event BPMN Shape](images/None3.png) | ![None Trigger NonInterruptingIntermediate BPMN Shape](images/None4.png) |![None Trigger Throwing Intermediate](images/NoTriggerthrowingInterMediate.png) | ![None Trigger End event BPMN Shape](images/None5.png) |
| Message | ![Message Trigger Start Event BPMN Shape](images/Message1.png) | ![Message Trigger NonInterrupting Event BPMN Shape](images/Message2.png) | ![Message Trigger Intermediate Event BPMN Shape](images/Message3.png) | ![Message Trigger NonInterruptingIntermediate Event BPMN Shape](images/Message4.png)|![Message Trigger ThrowingIntermediate Event BPMN Shape](images/Message5.png) | ![Message Trigger End Event BPMN Shape](images/Message6.png) |
| Timer | ![Timer Trigger Start Event BPMN Shape](images/Timer1.png) | ![Timer Trigger NonInterrupting Event BPMN Shape](images/Timer2.png) | ![Timer Trigger Intermediate Event BPMN Shape](images/Timer3.png)|![Timer Trigger NonInterruptingIntermediate Event BPMN Shape](images/Timer4.png) |  ![Timer Trigger Throwing intermediate](images/Timer5.png) | ![Timer Trigger End Event BPMN Shape](images/endTimer.png) |
| Conditional | ![Conditional Trigger Start BPMN Shape](images/Conditional1.png) | ![Conditional Trigger NonInterrupting BPMN Shape](images/Conditional2.png) | ![Conditional Trigger Intermediate BPMN Shape](images/Conditional3.png)|![Conditional Trigger NonInterruptingIntermediate BPMN Shape](images/Conditional4.png) | ![Conditional Trigger Throwing intermediate BPMN Shape](images/throwingConditional.png)  | ![Conditional Trigger End BPMN shape](images/endConditional.png) |
| Link | ![Link Trigger Start BPMN Shape](images/startLink.png) | ![Link Trigger NonInterruptingStart BPMN Shape](images/nonInterStartLink.png)| ![Link Trigger Intermediate Event BPMN Shape](images/Link1.png) | ![Link Trigger NonInterrupting intermediate BPMN Shape](images/nonInterLink.png) | ![Link Trigger ThrowingIntermediate  Event BPMN Shape](images/Link2.png) | ![Link Trigger End BPMN Shape](images/endLink.png) |
| Signal | ![Signal Trigger Start Event BPMN Shape](images/Signal1.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal2.png) | ![Signal Trigger Intermediate Event BPMN Shape](images/Signal3.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal4.png)| ![SignalThrowing Trigger Intermediate  Event BPMN Shape](images/Signal5.png) | ![Signal Trigger End Event BPMN Shape](images/Signal6.png) |
| Error | ![Error Trigger Start Event BPMN Shape](images/Error1.png) | ![Error Trigger NonInterruptingStart Event BPMN Shape](images/nonInterStartError.png) |![Error Trigger Intermediate Event BPMN Shape](images/Error2.png)  |  ![Error Trigger NonInterrupting intermediate BPMN Shape](images/nonInterError.png) | ![Error Trigger Throwing intermediate BPMN Shape](images/throwingError.png) | ![Error Trigger End Event BPMN Shape](images/Error3.png)|
| Escalation | ![Escalation Trigger Start Event BPMN Shape](images/Esclation1.png) | ![Escalation Trigger Non-Interrupting Event BPMN Shape](images/Esclation2.png) | ![Escalation Trigger Intermediate Event BPMN Shape](images/Esclation3.png)| ![Escalation Trigger Non-Interrupting Event BPMN Shape](images/Esclation4.png)| ![Escalation Trigger Throwing Intermediate Event BPMN Shape](images/Esclation5.png) | ![Escalation Trigger End Event BPMN Shape](images/Esclation6.png)|
| Termination | ![Termination Trigger Start  Event BPMN Shape](images/startTerminate.png) | ![Termination Trigger NonInterruptingStart Event BPMN Shape](images/nonInterStartTerminate.png) | ![Termination Trigger Intermediate Event BPMN Shape](images/intermediateTerminate.png) | ![Termination Trigger NonInterruptingIntermediate Event BPMN Shape](images/nonInterTerminate.png) | ![Termination Trigger Throwing intermediate Event BPMN Shape](images/throwingTerminate.png) | ![Termination Trigger End  Event BPMN Shape](images/Termination1.png)|
| Compensation |![Compensation  Trigger Start Event  BPMN Shape](images/Compensation1.png)  | ![Compensation  Trigger NonInterruptingStart Event  BPMN Shape](images/nonInterStartCompensation.png) | ![Compensation Trigger Intermediate  Event BPMN Shape](images/Compensation2.png) | ![Compensation  Trigger NonInterruptingIntermediate Event  BPMN Shape](images/noninterCompensation.png) | ![Compensation  Trigger  Throwing Intermediate Event  BPMN Shape](images/Compensation3.png)|![Compensation  Trigger End BPMN  Event Shape](images/Compensation4.png) |
| Cancel | ![Cancel Trigger Start  Event BPMN Shape](images/startCancel.png) | ![Cancel Trigger NonInterruptingStart Event BPMN Shape](images/nonInterStartCancel.png) | ![Cancel Trigger Intermediate  Event BPMN Shape](images/Cancel1.png) | ![Cancel Trigger NonInterruptingIntermediate Event BPMN Shape](images/nonInterCancel.png) | ![Cancel Trigger ThrowingIntermediate Event BPMN Shape](images/throwingCancel.png) | ![Cancel Trigger End  Event BPMN Shape](images/Cancel2.png) |
| Multiple | ![Multiple Trigger Start  Event BPMN Shape](images/Multiple1.png) | ![Multiple Trigger Non-Interrupting  Event BPMN Shape](images/Multiple2.png)  | ![Multiple Trigger Intermediate BPMN Shape](images/Multiple3.png)| ![Multiple Trigger Non-Interrupting Event BPMN Shape](images/Multiple4.png) | ![Multiple Trigger  Throwing Intermediate  Event BPMN Shape](images/Multiple5.png)  | ![Multiple Trigger End Event  BPMN Shape](images/Multiple6.png) |
| Parallel | ![Parallel Trigger Start  Event BPMN Shape](images/Parallel1.png) | ![Parallel Trigger Non-Interrupting Event  BPMN Shape](images/Parallel2.png) | ![Parallel Trigger Intermediate  Event BPMN Shape](images/Parallel3.png)| ![Parallel Trigger NonInterruptingIntermediate  Event BPMN Shape](images/Parallel4.png) | ![Parallel Trigger ThrowingIntermediate Event BPMN Shape](images/throwingParallel.png) | ![Parallel Trigger End Event BPMN Shape](images/endParallel.png) |

## See also

* [BPMN Activities](./bpmn-activities)
* [BPMN Data Object](./bpmn-dataObject)
* [BPMN Data Source](./bpmn-dataSource)