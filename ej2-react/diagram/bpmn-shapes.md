---
layout: post
title: Bpmn shapes in React Diagram component | Syncfusion
description: Learn here all about Bpmn shapes in Syncfusion React Diagram component of Syncfusion Essential JS 2 and more.
control: Bpmn shapes 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Bpmn shapes in React Diagram component

BPMN shapes are used to represent the internal business procedure in a graphical notation and enable you to communicate the procedures in a standard manner. To create a BPMN shape, in the node property shape, type should be set as “bpmn” and its shape should be set as any one of the built-in shapes. The following code example illustrates how to create a simple business process.

>Note: If you want to use BPMN shapes in React Diagram, you need to inject BpmnDiagrams in the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5bpmn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5bpmn-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5bpmn-cs1" %}

>Note : The default value for the property `shape` is “event”.

The list of BPMN shapes are as follows:

| Shape | Image |
| -------- | -------- |
| Event | ![Event Shape](images/Event.png) |
| Gateway | ![Gateway Shape](images/Gateway.png) |
| Task | ![Task Shape](images/Task.png) |
| Message | ![Message Shape](images/Message.png) |
| DataSource | ![Datasource Shape](images/Datasource.png) |
| DataObject | ![Dataobject Shape](images/Dataobject.png) |
| Group | ![Group Shape](images/Group.png) |

The BPMN shapes and its types are explained as follows.

<!-- markdownlint-disable MD033 -->

## Event

An [`event`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent) is notated with a circle and it represents an event in a business process. The type of events are as follows:

    * Start
    * End
    * Intermediate
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

Event triggers are notated as icons inside the circle and they represent the specific details of the process. The [`trigger`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent#trigger-bpmntriggers) property of the node allows you to set the type of trigger and by default, it is set as **none**. The following table illustrates the type of event triggers.

| Triggers | Start | Non-Interrupting Start | Intermediate | Non-Interrupting Intermediate | Throwing Intermediate | End |
| -------- | -------- | -------- | -------- | -------- | -------- | -------- |
| None | ![None Trigger Start event BPMN Shape](images/None1.png)  | ![None Trigger Interupting event BPMN Shape](images/None2.png) | ![None Trigger Intermediate event  BPMN Shape](images/None3.png) | ![None Trigger NonInteruptingIntermediate BPMNShape](images/None4.png) | | ![None Trigger End event  event  BPMNShape](images/None5.png) |
| Message | ![Message Trigger Start Event BPMN Shape](images/Message1.png) | ![Message Trigger NonInterupting Event BPMN Shape](images/Message2.png) | ![Message Trigger Intermediate Event BPMN Shape](images/Message3.png) | ![Message Trigger NonInteruptingIntermediate Event BPMN Shape](images/Message4.png)|![Message Trigger ThrowingIntermediate Event BPMNShape](images/Message5.png) | ![Message Trigger End Event BPMN EndShape](images/Message6.png) |
| Timer | ![Timer Trigger Start Event BPMNShape](images/Timer1.png) | ![Timer Trigger NonInterupting Event BPMN Shape](images/Timer2.png) | ![Timer Trigger Intermediate Event BPMN Shape](images/Timer3.png)|![Timer Trigger NonInteruptingIntermediate  Event BPMN Shape](images/Timer4.png) | | |
| Conditional | ![Conditional Trigger Start BPMN Shape](images/Conditional1.png) | ![Conditional Trigger NonInterupting BPMN Shape](images/Conditional2.png) | ![Conditional Trigger Intermediate BPMN Shape](images/Conditional3.png)|![Conditional Trigger NonInteruptingIntermediateBPMNShape](images/Conditional4.png) | | |
| Link | | |![Link Trigger Intermediate Event BPMNShape](images/Link1.png) | | ![Link Trigger ThrowingIntermediate  Event BPMN Shape](images/Link2.png) | |
| Signal | ![Signal Trigger Start Event BPMN Shape](images/Signal1.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal2.png) | ![Signal Trigger Intermediate Event BPMN Shape](images/Signal3.png) | ![Signal Trigger NonInterrupting Event BPMN Shape](images/Signal4.png)| ![SignalThrowing Trigger Intermediate  Event BPMN Shape](images/Signal5.png) | ![Signal Trigger End Event BPMN Shape](images/Signal6.png) |
| Error | ![Error Trigger Start Event BPMN Shape](images/Error1.png) | | ![Error Trigger Intermediate Event BPMN Shape](images/Error2.png)  | | | ![Error Trigger End Event BPMN Shape](images/Error3.png)|
| Escalation | ![Escalation Trigger Start Event BPMN Shape](images/Esclation1.png) | ![Escalation  Trigger  Non-Interrupting  Event BPMN Shape](images/Esclation2.png) | ![Escalation  Trigger  Intermediate  Event BPMN Shape](images/Esclation3.png)| ![Escalation  Trigger Non-Interrupting  Event BPMN Shape](images/Esclation4.png)| ![Escalation  Trigger  Throwing Intermediate Event  BPMN Shape](images/Esclation5.png) |  ![Escalation  Trigger  End Event BPMN Shape](images/Esclation6.png)|
| Termination | | | | | | ![Termination Trigger End  Event BPMN Shape](images/Termination1.png)|
| Compensation |![Compensation  Trigger Start Event  BPMN Shape](images/Compensation1.png)  | | ![Compensation Trigger Intermediate  Event BPMN Shape](images/Compensation2.png) | | ![Compensation  Trigger  Throwing Intermediate Event  BPMN Shape](images/Compensation3.png)|![Compensation  Trigger End BPMN  Event Shape](images/Compensation4.png) |
| Cancel | | | ![Cancel Trigger Intermediate  Event BPMN Shape](images/Cancel1.png) | | | ![Cancel Trigger End  Event BPMN Shape](images/Cancel2.png) |
| Multiple | ![Multiple Trigger Start  Event BPMN Shape](images/Multiple1.png) | ![Multiple Trigger Non-Interrupting  Event BPMN Shape](images/Multiple2.png)  | ![Multiple Trigger Intermediate BPMN Shape](images/Multiple3.png)| ![Multiple Trigger Non-Interrupting Event BPMN Shape](images/Multiple4.png) | ![Multiple Trigger  Throwing Intermediate  Event BPMN Shape](images/Multiple5.png)  | ![Multiple Trigger End Event  BPMN Shape](images/Multiple6.png) |
| Parallel | ![Parallel Trigger Start  Event BPMN Shape](images/Parallel1.png) | ![Parallel Trigger Non-Interrupting Event  BPMN Shape](images/Parallel2.png) | ![Parallel Trigger Intermediate  Event BPMN Shape](images/Parallel3.png)| ![Parallel Trigger End Event  BPMN Shape](images/Parallel4.png) | | |

## Gateway

Gateway is used to control the flow of a process and it is represented as a diamond shape. To create a gateway, the shape property of the node should be set as [`gateway`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnGateways) and the gateway property can be set with any of the appropriate gateways. The following code example illustrates how to create a BPMN Gateway.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Gateway-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Gateway-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Gateway-cs1" %}

>Note: By default, the `gateway` will be set as **none**.

There are several types of gateways as tabulated:

| Shape | Image |
| -------- | -------- |
| Exclusive | ![Exclusive GateWay BPMN Shape](images/Exclusive.png) |
| Parallel | ![Parallel GateWay BPMN Shape](images/Parallel.png) |
| Inclusive | ![Inclusive GateWay BPMN Shape](images/Inclusive.png) |
| Complex | ![Complex GateWay BPMN Shape](images/Complex.png) |
| EventBased | ![EventBased GateWay BPMNShape](images/EventBased.png) |
| ExclusiveEventBased | ![Exclusive EventBased GateWay BPMN Shape](images/EEBased.png) |
| ParallelEventBased | ![Parallel EventBased GateWay BPMN Shape](images/PEBased.png) |

## Activity

The [`activity`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnActivity#BpmnActivity) is the task that is performed in a business process. It is represented by a rounded rectangle.

There are two types of activities. They are listed as follows:

* Task: Occurs within a process and it is not broken down to a finer level of detail.
* Subprocess: Occurs within a process and it is broken down to a finer level of detail.

To create a BPMN activity, set the shape as **activity**. You also need to set the type of the BPMN activity by using the activity property of the node. By default, the type of the activity is set as **task**. The following code example illustrates how to create an activity.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Activity-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Activity-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Activity-cs1" %}

The different activities of BPMN process are listed as follows.

## Tasks

The [`task`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnTask#BpmnTask) property of the node allows you to define the type of task such as sending, receiving, user based task, etc. By
default, the type property of task is set as **none**. The following code illustrates how to create different types of
BPMN tasks.
The [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnTask#type) property of tasks allows to represent these results as an event attached to the task..

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Task-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Task-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Task-cs1" %}

The various types of BPMN tasks are tabulated as follows.

| Shape | Image |
| -------- | -------- |
| Service | ![Service Task BPMN Shape](images/Service.png) |
| Send | ![Send Task BPMN Shape](images/Send.png) |
| Receive | ![Receive Task BPMN Shape](images/Receive.png) |
| Instantiating Receive | ![Instantiating Receive Task BPMN Shape](images/InsService.png) |
| Manual |![Manual Task BPMN Shape](images/Manual.png) |
| Business Rule | ![Business Rule  Task BPMN Shape](images/Bussiness.png) |
| User | ![User Task BPMN Shape](images/User.png) |
| Script | ![Script Task BPMN Shape](images/Script.png) |

## Subprocess

A [`sub-process`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess) is a group of tasks, which is used to hide or reveal details of additional levels using the [`collapsed`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#collapsed-boolean) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Subprocess-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Subprocess-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Subprocess-cs1" %}

The different types of subprocess are as follows:

    * Event subprocess
    * Transaction

## Event subprocess

A subprocess is defined as an event subprocess, when it is triggered by an event. An event subprocess is placed within another subprocess which is not part of the normal flow of its parent process. You can set event to a subprocess with the [`event`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent##BpmnEvent) and [`trigger`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnEvent#trigger) property of the subprocess. The [`type`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#type) property of subprocess allows you to define the type of subprocess whether it should be event subprocess or transaction subprocess.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5EventSub-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5EventSub-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5EventSub-cs1" %}

## Transaction subprocess

* [`transaction`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#transaction-bpmntransactionsubprocessmodel) is a set of activities that logically belong together, in which all contained activities must complete their parts of the transaction; otherwise the process is undone. The execution result of a transaction is one of Successful Completion, Unsuccessful Completion (Cancel), and Hazard (Exception). The [`events`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#event-bpmnsubeventmodel) property of subprocess allows to represent these results as an event attached to the subprocess.

* The event object allows you to define the type of event by which the subprocess will be triggered. The name of the event can be defined to identify the event at runtime.

* The event’s offset property is used to set the fraction/ratio (relative to parent) that defines the position of the event shape.

* The trigger property defines the type of the event trigger.

* You can also use define ports and labels to subprocess events by using event’s ports and labels properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5TransitionSub-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5TransitionSub-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5TransitionSub-cs1" %}

## Process

Processes is an array collection that defines the children values for BPMN subprocess.

## Loop

[`Loop`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnTask#loop) is a task that is internally being looped. The loop property of task allows you to define the type of loop. The default value for `loop` is **none**.
You can define the loop property in subprocess BPMN shape as shown in the following code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Loop-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Loop-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Loop-cs1" %}

The following table contains various types of BPMN loops.

| Loops | Task | Subprocess |
| -------- | -------- | --------|
| Standard | ![Standard Task BPMN Shape](images/Standard1.png)  | ![Standard Subprocess BPMN Shape](images/Standard2.png) |
| SequenceMultiInstance | ![Sequence MultiInstance Task BPMN Shape](images/Sequence1.png) |  ![SequenceMultiInstance Subprocess BPMN Shape](images/Sequence2.png)|
| ParallelMultiInstance | ![ParallelMultiInstance Task BPMNShape](images/PMultiInstance1.png) | ![ParallelMultiInstance Subprocess BPMN Shape](images/PMultiInstance2.png) |

## Compensation

[`Compensation`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnTask#compensation-boolean) is triggered, when operation is partially failed and enabled it with the compensation property of the task and the subprocess.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Compensation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Compensation-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Compensation-cs1" %}

## Call

A [`call`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnTask#call-boolean) activity is a global subprocess that is reused at various points of the business flow and set it with the call property of the task.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Call-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Call-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Call-cs1" %}

## Adhoc

An adhoc subprocess is a group of tasks that are executed in any order or skipped in order to fulfill the end condition and set it with the [`adhoc`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#adhoc-boolean) property of subprocess.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Adhoc-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Adhoc-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Adhoc-cs1" %}

## Boundary

Boundary represents the type of task that is being processed. The [`boundary`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnSubProcess#boundary-bpmnboundary) property of subprocess allows you to define the type of boundary. By default, it is set as **default**.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Boundary-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Boundary-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Boundary-cs1" %}

The following table contains various types of BPMN boundaries.

| Boundary | Image |
| -------- | -------- |
| Call | ![Call Boundary BPMN Shape](images/Call.png) |
| Event | ![Event Boundary BPMN Shape](images/Eventtask.png) |
| Default | ![Default Boundary BPMN Shape](images/DefaultBoundary.png) |

## Data

A data object represents information flowing through the process, such as data placed into the process, data resulting from the process, data that needs to be collected, or data that must be stored. To define a [`data object`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnDataObject), set the shape as **DataObject** and the type property defines whether data is an input or an output. You can create multiple instances of data object with the collection property of data.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Data-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Data-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Data-cs1" %}

The following table contains various representation of BPMN data object.

| Boundary | Image |
| -------- | -------- |
| Collection Data Object | ![Collection Data BPMN Shape](images/Dataobject.png) |
| Data Input | ![Data Input BPMN Shape](images/DataInput.png) |
| Data Output | ![Data Output BPMN Shape](images/DataOutput.png) |

## Datasource

Datasource is used to store or access data associated with a business process. To create a datasource, set the shape as **datasource**. The following code example illustrates how to create a datasource.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Datasource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Datasource-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Datasource-cs1" %}

## Artifact

Artifact is used to show additional information about a process in order to make it easier to understand. There are two types of artifacts in BPMN.

* Text annotation
* Group

## Text annotation

* A BPMN object can be associated with a text annotation which does not affect the flow but gives details about objects within a flow. The annotation property of the node is used to connect an annotation element to the BPMN node.

* The annotation element can be displaced into a different position interactively by dragging the annotation to a particular position.

* The annotation element can be switched from a BPMN node to another BPMN node simply by dragging the source end of the annotation connector into the other BPMN node.

* The annotation angle property is used to set the angle between the BPMN shape and the annotation.

* The annotation direction property is used to set the direction of the text annotation.

* To set the size for text annotation, use width and height properties.

* The annotation length property is used to set the distance between the BPMN shape and the annotation.

* The annotation text property defines the additional information about the flow object in a BPMN process.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Text-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Text-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Text-cs1" %}

## Group

A group is used to frame a part of the diagram, shows that elements included in it are logically belong together and does not have any other semantics other than organizing elements. To create a group, the shape property of the node should be set as **group**. The following code example illustrates how to create a BPMN group.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Group-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Group-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Group-cs1" %}

## BPMN flows

[`BPMN Flows`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnFlow#BpmnFlow) are lines that connects BPMN flow objects.

## Association

[`BPMN Association`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnFlow#association) flow is used to link flow objects with its corresponding text or artifact. An association is represented as a dotted graphical line with opened arrow. The types of association are as follows:

* Directional
* BiDirectional
* Default

The `association` property allows you to define the type of association. The following code example illustrates how to create an association.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Association-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Association-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Association-cs1" %}

The following table demonstrates the visual representation of association flows.

| Association | Image |
| -------- | -------- |
| Default | ![Default BPMN FlowShapes](images/Default1.png) |
| Directional | ![Directional BPMN FlowShapes](images/Directional1.png) |
| BiDirectional | ![BiDirectional BPMN FlowShapes](images/BiDirectional.png) |

>Note : The default value for the property `association` is **default**.

## Sequence

A [`sequence`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnFlow#sequence) flow shows the order in which the activities are performed in a BPMN process and is represented by a solid graphical line. The types of sequence are as follows:

* Normal
* Conditional
* Default

The sequence property allows you to define the type of sequence. The following code example illustrates how to create a sequence flow.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Sequence-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Sequence-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Sequence-cs1" %}

The following table contains various representation of sequence flows.

| Sequence | Image |
| -------- | -------- |
| Default | ![Default Sequence BPMN Shpae](images/Default2.png) |
| Conditional | ![Conditional Sequence BPMN Shpae](images/Conditional.png) |
| Normal | ![Normal Sequence BPMN Shpae](images/Normal.png) |

>Note: The default value for the property `sequence` is **normal**.

## Message

A [`message`](https://ej2.syncfusion.com/react/documentation/api/diagram/bpmnFlow#message) flow shows the flow of messages between two participants and is represented by dashed line. The types of message are as follows:

* InitiatingMessage
* NonInitiatingMessage
* Default

The message property allows you to define the type of message. The following code example illustrates how to define a message flow.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Message-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/bpmnShapes/es5Message-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/bpmnShapes/es5Message-cs1" %}

The following table contains various representation of message flows.

| Message | Image |
| -------- | -------- |
| Default | ![Default Message BPMN Shape](images/Message-default.png) |
| InitiatingMessage | ![InitiatingMessage Message BPMN Shape](images/IMessage.png) |
| NonInitiatingMessage | ![NonInitiatingMessage Message BPMN Shape](images/NIMessage.png) |

>Note: The default value for the property `message` is **default**.
