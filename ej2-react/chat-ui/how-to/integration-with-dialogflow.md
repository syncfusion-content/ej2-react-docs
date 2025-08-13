---
layout: post
title: Integration of Dialogflow With React Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Google Dialogflow With React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Google Dialogflow With React Chat UI component

The Syncfusion Chat UI supports integration with Google Dialogflow, enabling advanced conversational AI features in your React applications.

## Getting Started With the ChatUI Component

Before integrating Dialogflow, ensure that the Syncfusion Chat UI component is correctly rendered in your React app:
[React Getting Started Guide](../getting-started)

## Prerequisites for Google Dialogflow Integration

* `Google Account`: You need a Google account to access `Dialogflow` and `Google Cloud Console`.
* `Node.js Environment`: The backend portion requires `Node.js` and `npm`.
* `Syncfusion Chat UI for React`: Install @syncfusion/ej2-react-interactive-chat in your React project.

## Required npm Packages

Install the dependency in your backend folder:

```bash

npm install express body-parser dialogflow cors

```

Install the Chat UI dependency in your frontend:

```bash

npm install @syncfusion/ej2-react-interactive-chat --save

```

## Setup the Google Dialogflow Agent

* Dialogflow Console → Create Agent
* Add Intents with training phrases and responses (e.g. greetings, FAQ).
* Enable API Access:
  - Go to Agent settings → Google Project
  - Google Cloud Console → Service Accounts
  - Create a Service Account with the Dialogflow API Client role.
  - Download the service account JSON key.

## Build a Secure Node.js Backend

The service account key must NOT be exposed to the user’s browser, so all Dialogflow API calls are made via your own backend.

### Store Service Account Credentials

Store the credentials such as your project ID, service account email, and the private key (downloaded from the Google Cloud Console when creating a Service Account for your Dialogflow project). These credentials enable the backend to authenticate and securely access the Dialogflow service.

`backend/service-acct.json`

```json

{
  "type": "service_account",
  "project_id": "your-dialogflow-project-id",
  "private_key_id": "abc123xyz...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEv...",
  "client_email": "dialogflow-agent@your-dialogflow-project-id.iam.gserviceaccount.com",
  ...
}
```

> `Security Note`: Never expose the service account key in the frontend or version control. For production, use environment variables or a secret manager (e.g., Google Cloud Secret Manager).

### Backend

Create `backend/index.js` to set up an Express server that handles Dialogflow API requests:

```js

const express = require('express');
const { SessionsClient } = require('dialogflow');
const bodyParser = require('body-parser');
const cors = require('cors');
const serviceAccount = require('./service-acct.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const projectId = serviceAccount.project_id;
const sessionClient = new SessionsClient({ credentials: serviceAccount });

app.post('/api/message', async (req, res) => {
  const message = req.body.text;
  const sessionId = req.body.sessionId || 'default-session';

  const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ reply: result.fulfillmentText });
  } catch (err) {
    console.error('Dialogflow error:', err);
    res.status(500).json({ reply: "Error connecting to Dialogflow." });
  }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
```

> `Session Management Note`: Dialogflow sessions maintain conversation context. Use unique `sessionId` values (e.g., via UUID) for each user to preserve context across messages.

## Integrate Syncfusion ChatUI in Your React App

Use the Syncfusion Chat UI component to send and render message exchanges using the messageSend event. Each time a user sends a message, this event is invoked with details of the sent message.

### Forward Message to backend:

Upon message submission, a POST request is sent to your backend API endpoint (`/api/message`). This backend service forwards the user’s message to Dialogflow and waits for a response.

### Display Bot response:

Once the backend receives a reply from Dialogflow, it sends the response back to the frontend.

Frontend code `src/App.js`

```js

import React, { useState } from "react";
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import './App.css';

const currentUserModel = {
  id: "user1",
  user: "Albert"
};
const botUserModel = {
  id: "user2",
  user: "Bot"
};

function App() {
  const [messages, setMessages] = useState([]);

  // Handle sending of message
  const messageSend = async (args) => {
    // 1. Add user's message to the UI
    const newUserMessage = { text: args.message.text, author: currentUserModel };
    setMessages(prev => [...prev, newUserMessage]);

    // 2. Call backend API to get Dialogflow response
    try {
        const response = await fetch('http://localhost:5000/api/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: args.message.text, sessionId: currentUserModel.id })
        });
        const data = await response.json();
        // 3. Add bot's reply to the UI
        const botReply = { text: data.reply, author: botUserModel };
        setMessages(prev => [...prev, botReply]);
    } catch {
        const errorMsg = { text: "Sorry, I couldn't contact the server.", author: botUserModel };
        setMessages(prev => [...prev, errorMsg]);
    }
  };

  return (
    <div id='chat-container'>
      <ChatUIComponent user={currentUserModel} messageSend={messageSend}>
          <MessagesDirective>
              {messages.map((msg, idx) =>
                  <MessageDirective key={idx} text={msg.text} author={msg.author}></MessageDirective>
              )}
          </MessagesDirective>
      </ChatUIComponent>
    </div>
  );
}

export default App;
```

## Run and Test

### Start the backend

Navigate to your backend project folder and run the following command to start the Node.js server:

```bash

node index.js

```

### Start the React frontend:

In a separate terminal window, navigate to your React project folder and start the development server:

```bash

npm start

```
Open your app and chat with your Dialogflow-powered bot.

![ChatUI with Dialogflow](../images/dialogflow.png)

## Troubleshooting:

* `Permission Denied`: Verify service account has "Dialogflow API Client" role.
* `CORS Error`: Ensure CORS origin matches your frontend URL.
* `No Response`: Check intent training phrases and test in Dialogflow simulator.
* `Quota Exceeded`: Review Dialogflow limits in Google Cloud Console.
* `Network Issues`: Ensure backend is running and frontend points to correct URL.
