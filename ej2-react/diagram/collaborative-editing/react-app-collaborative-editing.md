---
layout: post
title: Collaborative Editing Configuration in React Diagram | Syncfusion
description: Checkout and learn to configure SignalR and Redis for real-time collaborative editing in Syncfusion React Diagram.
control: Diagram
documentation: ug
platform: ej2-react
domainurl: ##DomainURL##
---

# SignalR hub configuration in React application

## Overview

This guide explains how to configure SignalR Hub in a React application for real-time collaborative diagram editing.

## Prerequisites

* [System requirements for React components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## How to create React sample

To create a React application, follow the steps outlined in the React [Getting Started](https://ej2.syncfusion.com/react/documentation/diagram/getting-started) documentation.

## How to add packages in the React application

Open the terminal and install the following packages using npm.

* @microsoft/signalr
* @syncfusion/ej2-react-diagrams

## Configure SignalR service in React application

To enable real-time collaboration, configure SignalR HubConnection in your React component as follows:

* Initialize the `HubConnection` within a `useEffect` hook and start it by calling `start()`.
* Connect to the `/diagramHub` endpoint with WebSocket transport `skipNegotiation: true` and enable automatic reconnect to handle transient network issues.
* Subscribe to the `OnConnectedAsync` callback to receive the unique connection ID, confirming a successful handshake with the server.
* Join a SignalR group by calling `JoinDiagram(roomName)` after connecting. This ensures updates are shared only with users in the same diagram session.
* Refer to Create React [Simple Diagram](https://ej2.syncfusion.com/react/documentation/diagram/getting-started)

```typescript
import React, { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const DiagramComponent = () => {
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const [roomName] = useState('Syncfusion');

  useEffect(() => {
    const initializeSignalRConnection = () => {
      if (connectionRef.current === null) {
        // Create connection
        const connection = new signalR.HubConnectionBuilder()
          .withUrl('<<Your ServiceURL>>', {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
          })
          .withAutomaticReconnect()
          .build();

        // Triggered when the connection to the SignalR Hub is successfully established
        connection.on('OnConnectedAsync', (id: string) => {
          onConnectedAsync(id);
        });

        // Start the connection
        connection.start()
          .then(() => {
            console.log('Connected to SignalR Hub');
            setIsConnected(true);
            connectionRef.current = connection;
          })
          .catch((error: Error) => {
            console.error('Connection failed:', error);
          });
      }
    };

    initializeSignalRConnection();

    return () => {
      if (connectionRef.current && connectionRef.current.state === signalR.HubConnectionState.Connected) {
        connectionRef.current.stop();
      }
    };
  }, []);

  const onConnectedAsync = (id: string) => {
    if (id && id.length > 0) {
      console.log('Connection ID:', id);
      // Join the room after connection is established
      connectionRef.current?.invoke('JoinDiagram', roomName)
        .catch((error: Error) => {
          console.error('JoinDiagram failed:', error);
        });
    }
  };

  return (
    <div>
      {/* Diagram component will be added here */}
    </div>
  );
};

export default DiagramComponent;
```

>**Notes:**
>* Use a unique `roomName` per diagram (e.g., a diagram ID) to isolate sessions.
>* If `WebSockets` may be unavailable, remove `SkipNegotiation` so SignalR can fall back to SSE or Long Polling.
>* Consider handling reconnecting/disconnected states in the UI and securing the connection with authentication, if required.


## Sending and applying real-time diagram changes

* The React Diagram component triggers the [historyChange](https://ej2.syncfusion.com/react/documentation/api/diagram/index-default#historychange) event whenever the diagram is modified (e.g., add, delete, move, resize, or edit nodes/connectors).
* Use `getDiagramUpdates` to produce a compact set of incremental updates (JSON-formatted changes) representing just the changes, not the entire diagram.
* Send these changes to the hub method `BroadcastToOtherUsers`, which relays them to all users joined to the same SignalR group (room).
* Each remote user listens for ReceiveData and applies the incoming changes with `setDiagramUpdates`, keeping their view synchronized without reloading the full diagram.
* Enable the `enableCollaborativeEditing` property on the diagram to treat multi-step edits (like drag/resize sequences or batch changes) as a single operation.

```typescript
import React, { useEffect, useRef, useState } from 'react';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
import * as signalR from '@microsoft/signalr';

const DiagramCollaborativeComponent = () => {
  const diagramRef = useRef<DiagramComponent>(null);
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const [roomName] = useState('Syncfusion');
  const [diagramId] = useState('diagram');

  useEffect(() => {
    // Initialize SignalR connection 
    const initializeConnection = async () => {
      if (connectionRef.current === null) {
        const connection = new signalR.HubConnectionBuilder()
          .withUrl('<<Your ServiceURL>>', {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
          })
          .withAutomaticReconnect()
          .build();

        // Listen for remote changes from other users
        connection.on('ReceiveData', (diagramChanges: string[]) => {
          if (diagramChanges && diagramChanges.length > 0) {
            if (diagramRef.current && diagramRef.current.setDiagramUpdates) {
              diagramRef.current.setDiagramUpdates(diagramChanges);
            }
          }
        });

        await connection.start()
          .then(() => {
            console.log('Connected to SignalR Hub');
            connectionRef.current = connection;
          })
          .catch((error: Error) => {
            console.error('Connection failed:', error);
          });
      }
    };

    initializeConnection();

    return () => {
      if (connectionRef.current && connectionRef.current.state === signalR.HubConnectionState.Connected) {
        connectionRef.current.stop();
      }
    };
  }, []);

  const onHistoryChange = async (args: any) => {
    if (args && diagramRef.current && diagramRef.current.getDiagramUpdates) {
      // Get diagram updates (incremental changes) and send to hub
      const diagramChanges = diagramRef.current.getDiagramUpdates(args);
      
      // When enableCollaborativeEditing is enabled, retrieve diagramChanges only after the group action completes.
      if (diagramChanges && diagramChanges.length > 0) {
        // Send changes to the SignalR Hub for broadcasting
        if (connectionRef.current && connectionRef.current.state === signalR.HubConnectionState.Connected) {
          connectionRef.current.invoke('BroadcastToOtherUsers', diagramChanges, roomName)
            .catch((err: Error) => {
              console.error('Send failed:', err);
            });
        }
      }
    }
  };

  return (
    <DiagramComponent
      ref={diagramRef}
      id={diagramId}
      width="100%"
      height="700px"
      nodes={[]}
      connectors={[]}
      enableCollaborativeEditing={true}
      historyChange={onHistoryChange}
    >
    </DiagramComponent>
  );
};

export default DiagramCollaborativeComponent;
```

## Conflict policy (optimistic concurrency) in React application

To maintain consistency during collaborative editing, each user applies incoming changes using `setDiagramUpdates`. After applying changes, the React sample synchronizes its `userVersion` with the `serverVersion` through the `UpdateVersion` event. This version-based approach ensures conflicts are resolved without locking, allowing real-time responsiveness while preserving data integrity.

Add the following code in the React sample application:
```typescript
import React, { useState, useRef, useEffect } from 'react';
import { DiagramComponent } from '@syncfusion/ej2-react-diagrams';
import * as signalR from '@microsoft/signalr';

const DiagramConflictResolution = () => {
  const [userVersion, setUserVersion] = useState<number>(0);
  const diagramRef = useRef<DiagramComponent>(null);
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const [roomName] = useState('Syncfusion');

  useEffect(() => {
    // Initialize SignalR connection
    const initializeConnection = async () => {
      if (connectionRef.current === null) {
        const connection = new signalR.HubConnectionBuilder()
          .withUrl('<<Your ServiceURL>>', {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets
          })
          .withAutomaticReconnect()
          .build();

        // Listen for remote changes with version tracking
        connection.on('ReceiveData', (diagramChanges: string[], serverVersion: number) => {
          applyRemoteDiagramChanges(diagramChanges, serverVersion);
        });

        // Listen for conflict notifications
        connection.on('ShowConflict', () => {
          showConflict();
        });

        // Listen for explicit version updates
        connection.on('UpdateVersion', (serverVersion: number) => {
          updateVersion(serverVersion);
        });

        await connection.start()
          .then(() => {
            console.log('Connected to SignalR Hub');
            connectionRef.current = connection;
          })
          .catch((error: Error) => {
            console.error('Connection failed:', error);
          });
      }
    };

    initializeConnection();

    return () => {
      if (connectionRef.current && connectionRef.current.state === signalR.HubConnectionState.Connected) {
        connectionRef.current.stop();
      }
    };
  }, []);

  const applyRemoteDiagramChanges = (diagramChanges: string[], serverVersion: number) => {
    // Sets diagram updates to current diagram
    if (diagramRef.current && diagramRef.current.setDiagramUpdates) {
      diagramRef.current.setDiagramUpdates(diagramChanges);
    }
    // Update user version to server version after applying changes
    setUserVersion(serverVersion);
  };

  // Capture local changes and send with version and edited IDs
  const onHistoryChange = async (args: any) => {
    if (!diagramRef.current) {
      return;
    }

    const diagramChanges = diagramRef.current.getDiagramUpdates(args);
    if (diagramChanges && diagramChanges.length > 0) {
      const editedElements = getEditedElements(args);
      // Send changes with version and edited element IDs
      if (connectionRef.current && connectionRef.current.state === signalR.HubConnectionState.Connected) {
        connectionRef.current.invoke('BroadcastToOtherUsers', diagramChanges, userVersion, editedElements, roomName)
          .catch((err: Error) => {
            console.error('Send failed:', err);
          });
      }
    }
  };

  const getEditedElements = (args: any): string[] => {
    // Extract and return IDs of affected nodes/connectors from args
    // TODO: implement extraction logic based on historyChange event args
    return [];
  };

  const updateVersion = (serverVersion: number) => {
    setUserVersion(serverVersion);
  };

  const showConflict = () => {
    // Show notification to inform user their update was rejected due to conflict
    const message = "Your changes conflicted with another user's updates and were not applied. Please refresh to see the latest version.";
    alert(message);
  };

  return (
    <div>
      <DiagramComponent
        ref={diagramRef}
        width="100%"
        height="700px"
        enableCollaborativeEditing={true}
        nodes={[]}
        connectors={[]}
        historyChange={onHistoryChange}
      >
      </DiagramComponent>
    </div>
  );
};

export default DiagramConflictResolution;
```