---
layout: post
title: Bpmn Events in React Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Bpmn Events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# BPMN Event in React Diagram component

## Event

An [`event`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent) is a common BPMN process model element that represents something that happens during a business process and is notated with a circle. The type of events are as follows:

    * Start
    * Intermediate
    * NonInterruptingStart
    * NonInterruptingIntermediate
    * ThrowingIntermediate
    * End
        
The [`event`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent#event-bpmnevents) property of the node allows you to define the type of the event. The default value of the event is **start**. The following code example illustrates how to create a BPMN event.


{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Event-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Event-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Event-cs1" %}

Event triggers are notated as icons inside the circle and they represent the specific details of the process. The [`trigger`](https://helpej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent/#trigger) property of the node allows you to set the type of trigger and by default, it is set as **none**. The following table illustrates the type of event triggers.

| Triggers | Start | Non-Interrupting Start | Intermediate | Non-Interrupting Intermediate | Throwing Intermediate | End |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| None | ![None Trigger Start event BPMN Shape](images/None1.png)  | ![None Trigger Interupting event BPMN Shape](images/None2.png) | ![None Trigger Intermediate event  BPMN Shape](images/None3.png) | ![None Trigger NonInteruptingIntermediate BPMNShape](images/None4.png) |![None Trigger Throwing Intermediate](images/NoTriggerthrowingInterMediate.png) | ![None Trigger End event  event  BPMNShape](images/None5.png) |
| Message | ![Message Trigger Start Event BPMN Shape](images/Message1.png) | ![Message Trigger NonInterupting Event BPMN Shape](images/Message2.png) | ![Message Trigger Intermediate Event BPMN Shape](images/Message3.png) | ![Message Trigger NonInteruptingIntermediate Event BPMN Shape](images/Message4.png)|![Message Trigger ThrowingIntermediate Event BPMNShape](images/Message5.png) | ![Message Trigger End Event BPMN EndShape](images/Message6.png) |
| Timer | ![Timer Trigger Start Event BPMNShape](images/Timer1.png) | ![Timer Trigger NonInterupting Event BPMN Shape](images/Timer2.png) | ![Timer Trigger Intermediate Event BPMN Shape](images/Timer3.png)|![Timer Trigger NonInteruptingIntermediate  Event BPMN Shape](images/Timer4.png) |  ![Timer Trigger Throwing intermediate](images/endTimer.png) | ![Timer Trigger End Event BPMN EndShape](images/endTimer.png) |
| Conditional | ![Conditional Trigger Start BPMN Shape](images/Conditional1.png) | ![Conditional Trigger NonInterupting BPMN Shape](images/Conditional2.png) | ![Conditional Trigger Intermediate BPMN Shape](images/Conditional3.png)|![Conditional Trigger NonInteruptingIntermediateBPMNShape](images/Conditional4.png) | ![Conditional Trigger Throwing intermediate BPMNShape](images/throwingConditional.png)  | ![Conditional Trigger End BPMN shape](images/endConditional.png) |
| Link | ![Link Trigger Start BPMN Shape](images/startLink.png) | ![Link Trigger NonInterruptingStart BPMN Shape](images/nonInterStartLink.png)| ![Link Trigger Intermediate Event BPMNShape](images/Link1.png) | ![Link Trigger NonInterrupting intermediate BPMN Shape](images/nonInterLink.png) | ![Link Trigger ThrowingIntermediate  Event BPMN Shape](images/Link2.png) | ![Link Trigger End BPMN Shape](images/endLink.png) |
| Signal | ![Signal Trigger Start Event BPMN Shape](images/Signal1.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal2.png) | ![Signal Trigger Intermediate Event BPMN Shape](images/Signal3.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal4.png)| ![SignalThrowing Trigger Intermediate  Event BPMN Shape](images/Signal5.png) | ![Signal Trigger End Event BPMN Shape](images/Signal6.png) |
| Error | ![Error Trigger Start Event BPMN Shape](images/Error1.png) | ![Error Trigger Start Event BPMN Shape](images/nonInterStartError.png) |![Error Trigger Intermediate Event BPMN Shape](images/Error2.png)  |  ![Error Trigger NonInterrupting intermediate BPMN Shape](images/nonInterError.png) | ![Error Trigger Throwing intermediate BPMN Shape](images/throwingError.png) | ![Error Trigger End Event BPMN Shape](images/Error3.png)|
| Escalation | ![Escalation Trigger Start Event BPMN Shape](images/Esclation1.png) | ![Escalation  Trigger  Non-Interrupting  Event BPMN Shape](images/Esclation2.png) | ![Escalation  Trigger  Intermediate  Event BPMN Shape](images/Esclation3.png)| ![Escalation  Trigger Non-Interrupting  Event BPMN Shape](images/Esclation4.png)| ![Escalation  Trigger  Throwing Intermediate Event  BPMN Shape](images/Esclation5.png) |  ![Escalation  Trigger  End Event BPMN Shape](images/Esclation6.png)|
| Termination | ![Termination Trigger Start  Event BPMN Shape](images/startTerminate.png) | ![Termination Trigger NonInterruptingStart Event BPMN Shape](images/nonInterStartTerminate.png) | ![Termination Trigger Intermediate Event BPMN Shape](images/intermediateTerminate.png) | ![Termination Trigger NonInteruptingIntermediate Event BPMN Shape](images/nonInterTerminate.png) | ![Termination Trigger Throwing intermediate Event BPMN Shape](images/throwingTerminate.png) | ![Termination Trigger End  Event BPMN Shape](images/Termination1.png)|
| Compensation |![Compensation  Trigger Start Event  BPMN Shape](images/Compensation1.png)  | ![Compensation  Trigger NonInterruptingStart Event  BPMN Shape](images/nonInterStartCompensation.png) | ![Compensation Trigger Intermediate  Event BPMN Shape](images/Compensation2.png) | ![Compensation  Trigger NonInteruptingIntermediate Event  BPMN Shape](images/noninterCompensation.png) | ![Compensation  Trigger  Throwing Intermediate Event  BPMN Shape](images/Compensation3.png)|![Compensation  Trigger End BPMN  Event Shape](images/Compensation4.png) |
| Cancel | ![Cancel Trigger Start  Event BPMN Shape](images/startCancel.png) | ![Cancel Trigger NonInterruptingStart Event BPMN Shape](images/nonInterStartCancel.png) | ![Cancel Trigger Intermediate  Event BPMN Shape](images/Cancel1.png) | ![Cancel Trigger NonInteruptingIntermediate Event BPMN Shape](images/nonInterCancel.png) | ![Cancel Trigger ThrowingIntermediate Event BPMN Shape](images/throwingCancel.png) | ![Cancel Trigger End  Event BPMN Shape](images/Cancel2.png) |
| Multiple | ![Multiple Trigger Start  Event BPMN Shape](images/Multiple1.png) | ![Multiple Trigger Non-Interrupting  Event BPMN Shape](images/Multiple2.png)  | ![Multiple Trigger Intermediate BPMN Shape](images/Multiple3.png)| ![Multiple Trigger Non-Interrupting Event BPMN Shape](images/Multiple4.png) | ![Multiple Trigger  Throwing Intermediate  Event BPMN Shape](images/Multiple5.png)  | ![Multiple Trigger End Event  BPMN Shape](images/Multiple6.png) |
| Parallel | ![Parallel Trigger Start  Event BPMN Shape](images/Parallel1.png) | ![Parallel Trigger Non-Interrupting Event  BPMN Shape](images/Parallel2.png) | ![Parallel Trigger Intermediate  Event BPMN Shape](images/Parallel3.png)| ![Parallel Trigger End Event  BPMN Shape](images/Parallel4.png) | ![Parallel Trigger ThrowingIntermediate Event BPMN Shape](images/throwingParallel.png) | ![Parallel Trigger End Event BPMN Shape](images/endParallel.png) |