---
layout: post
title: Events in React Inline AI Assist | Syncfusion
description:  Checkout and learn about events with React Inline AI Assist component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Inline AI Assist component

This section describes the Inline AI Assist events that will be triggered when appropriate actions are performed. The following events are available in the Inline AI Assist component.

## created

The Inline AI Assist component triggers the [created](../api/inline-ai-assist#created) event when the component rendering is completed.

{% raw %}
```tsx
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';

function App() {

    const handleCreated = () => {
        // Your actions here
    }

    return (
        <InlineAIAssistComponent created={handleCreated}/>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

## promptRequest

The [promptRequest](../api/inline-ai-assist#promptrequest) event is triggered when the prompt request is made in the Inline AI Assist component.

{% raw %}
```tsx
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';

function App() {

    const handlePromptRequest = (args: InlinePromptRequestEventArgs) => {
        // Your actions here
    }

    return (
        <InlineAIAssistComponent promptRequest={handlePromptRequest}/>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

## open

The [open](../api/inline-ai-assist#open) event is triggered when the Inline AI Assist popup is opened.

{% raw %}
```tsx
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { OpenEventArgs } from '@syncfusion/ej2-popups';
import * as React from 'react';

function App() {

    const handlePopupOpen = (args: OpenEventArgs) => {
        // Your actions here
    }

    return (
        <InlineAIAssistComponent open={handlePopupOpen}/>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

### close

The [close](../api/inline-ai-assist#close) event is triggered when the Inline AI Assist popup is closed.

{% raw %}
```tsx
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { CloseEventArgs } from '@syncfusion/ej2-popups';
import * as React from 'react';

function App() {

    const handlePopupClose = (args: CloseEventArgs) => {
        // Your actions here
    }

    return (
        <InlineAIAssistComponent close={handlePopupClose}/>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}
