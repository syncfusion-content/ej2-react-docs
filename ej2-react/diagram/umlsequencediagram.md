---
layout: post
title: UmlSequenceDiagram in React Diagram Component | Syncfusion®
description: Learn how to create and customize UML sequence diagrams in Syncfusion® React Diagram Component with participants, messages, activation boxes, and fragments.
control: UmlSequenceDiagram 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# UML Sequence Diagram in React Diagram Component
A UML sequence diagram is a type of interaction diagram that visualizes how objects communicate with each other over time. These diagrams show the sequence of messages exchanged between participants, making them essential for understanding system interactions, API workflows, and process flows.

The Syncfusion® React Diagram component provides comprehensive support for creating and visualizing UML sequence diagrams through the [`UmlSequenceDiagramModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceDiagramModel). This specialized model enables the creation of sequence diagrams with proper UML notation and automated layout capabilities.

## UML Sequence Diagram Elements

A sequence diagram includes several key elements, such as participants, messages, activation boxes, and fragments. The sections below demonstrate how to define and configure these components using the Diagram control.

### Participants

[`UmlSequenceParticipantModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceParticipantModel) represents an entity that interacts with other entities in a sequence diagram. Participants appear at the top of the diagram, with lifelines extending vertically downward.

#### UmlSequenceParticipantModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the participant. |
| content | string | The display text of the participant. |
| showDestructionMarker | boolean | Indicates whether a destruction marker (X) is shown at the end of the participant lifeline. |
| activationBoxes | UmlSequenceActivationBoxModel[] | A collection of activation boxes associated with the participant. |
| stereotype | UmlSequenceParticipantStereotype | The visual stereotype used to render the participant header, such as Actor, Boundary, Control, Entity, or Database. |

#### Participant Stereotypes

The [`UmlSequenceParticipantStereotype`](https://ej2.syncfusion.com/react/documentation/api/diagram/umlSequenceParticipantStereotype) enum defines the visual style of a participant. A stereotype helps show the role of a participant in the interaction.

| Stereotype | Description | Shape |
|---|---|---|
| Default | Standard object participant displayed as a labeled rectangle. | ![Default stereotype](./images/umlSequenceDiagram-images/Default.png) |
| Actor | External person or system that interacts with the process. | ![Actor stereotype](./images/umlSequenceDiagram-images/Actor.png) |
| Boundary | Interface or entry point, such as a UI, API gateway, or external system. | ![Boundary stereotype](./images/umlSequenceDiagram-images/Boundary.png) |
| Control | Object that manages the flow, such as a controller or coordinator. | ![Control stereotype](./images/umlSequenceDiagram-images/Control.png) |
| Entity | Object that represents data, domain objects, or stored information. | ![Entity stereotype](./images/umlSequenceDiagram-images/Entity.png) |
| Database | Database or persistent storage system, displayed using a cylindrical shape. | ![Database stereotype](./images/umlSequenceDiagram-images/Database.png) |

#### Creating Participants

The following code example demonstrates how to create different types of participants:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umlsequencediagram/umlsequencediagram-1" %}

### Messages

[`UmlSequenceMessageModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceMessageModel) represents communication between participants . Messages are displayed as arrows connecting lifelines and indicate the flow of information or requests between system components.

#### Message Types and Usage

Different message types serve specific purposes in sequence diagrams:

| Message Type | Description | Example |
|---|---|---|
| Synchronous | The sender waits for a response | ![Synchronous Message](./images/umlSequenceDiagram-images/Synchronous.png) |
| Asynchronous | The sender continues without waiting | ![Asynchronous Message](./images/umlSequenceDiagram-images/Asynchronous.png) |
| Reply | A response to a previous message | ![Reply Message](./images/umlSequenceDiagram-images/Reply.png) |
| Create | Creates a new participant | ![Create Message](./images/umlSequenceDiagram-images/Create.png) |
| Delete | Terminates a participant | ![Delete Message](./images/umlSequenceDiagram-images/Delete.png) |
| Self | A message from a participant to itself | ![Self Message](./images/umlSequenceDiagram-images/Self.png) |

#### UmlSequenceMessageModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the message. |
| content | string | The display text for the message. |
| fromParticipantID | string \| number | ID of the participant sending the message.. |
| toParticipantID | string \| number | ID of the participant receiving the message |
| type | UmlSequenceMessageType | Type of the message (Synchronous, Asynchronous, Reply, Create, Delete, Self). |

#### Creating Messages

The following example shows how to create different types of messages between participants:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umlsequencediagram/umlsequencediagram-2" %}
 
### Activation Boxes

[`UmlSequenceActivationBoxModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceActivationBoxModel) represents periods when a participant is actively processing or executing operations. Activation boxes appear as thin rectangles overlaid on participant lifelines, indicating the duration of active processing between specific messages.

#### UmlSequenceActivationBoxModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the activation box. |
| startMessageID | string \| number | ID of the message that initiates the activation.. |
| endMessageID | string \| number | ID of the message that terminates the activation. |

#### Creating Activation Boxes

The following example demonstrates how to create activation boxes that span specific message sequences:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umlsequencediagram/umlsequencediagram-3" %}

### Fragments

[`UmlSequenceFragmentModel`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceFragmentModel) represents logical groupings of messages based on specific conditions or control structures. Fragments appear as rectangular enclosures that visually organize conditional logic, loops, and alternative execution paths within sequence diagrams.

#### Fragment Applications

Fragments are essential for modeling:
- Conditional logic (if-then-else statements).
- Iterative processes (loops and repetitions).
- Optional operations that may or may not execute.
- Error handling and exception flows.
- Parallel processing scenarios.

#### Fragment Types

The [`UmlSequenceFragmentType`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceFragmentType) enum defines the following fragment types:

| Fragment Type  | Description  | Example  |  
|---------------|-------------|--------|  
| Optional  | Represents a sequence that is executed only if a specified condition is met; otherwise, it is skipped. | ![Optional Fragment](./images/umlSequenceDiagram-images/OptFragment.png) |  
| Alternative | Represents multiple conditional paths (if-else structure), where only one path executes based on the condition. | ![Alternative Fragment](./images/umlSequenceDiagram-images/AltFragment.png) |  
| Loop | Represents a repeating sequence of interactions that continues based on a loop condition. | ![Loop Fragment](./images/umlSequenceDiagram-images/LoopFragment.png) |  

#### UmlSequenceFragmentModel Properties

| Property | Type | Description |
|---|---|---|
| id | string \| number | A unique identifier for the fragment. |
| type | UmlSequenceFragmentType | Type of the fragment (Optional, Loop, Alternative). |
| conditions | UmlSequenceFragmentConditionModel[] | Collection of conditions for the fragment. |

#### UmlSequenceFragmentConditionModel Properties

| Property | Type | Description |
|---|---|---|
| content | string | Text describing the condition or parameter. |
| messageIds | (string \| number)[] | Collection of message IDs included in this condition section. |
| fragmentIds | string[] | Collection of nested fragments ids (for complex structures). |

#### Creating Fragments

The following example illustrates how to create fragments with different condition types:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/umlsequencediagram/umlsequencediagram-4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/umlsequencediagram/umlsequencediagram-4" %}

## Customization Options

### Adjusting Participant Spacing

The [`spaceBetweenParticipants`](https://ej2.syncfusion.com/react/documentation/api/diagram/UmlSequenceDiagramModel#spaceBetweenParticipants) property controls the horizontal spacing between participants in the sequence diagram. Adjust this value to accommodate longer message labels or improve diagram readability.

```javascript
// Define the UML Sequence Diagram model
const model = {
  // Define the space between participants
  spaceBetweenParticipants: 300,
  participants: participants,    // collection of participants in the sequence diagram  
  messages: messages,            // collection of messages exchanged between participants  
  fragments: fragments           // collection of sequence diagram fragments (opt, alt, loop) 
}
```