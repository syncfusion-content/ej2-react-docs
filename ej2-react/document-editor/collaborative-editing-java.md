---
layout: post
title: Collaborative Editing in React Document editor control | Syncfusion
description: Learn how to enable collaborative editing in Syncfusion React Document editor control of Syncfusion Essential JS 2 and more.
control: Collaborative Editing Java
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Collaborative Editing 

Allows multiple users to work on the same document simultaneously. This can be done in real-time, so that collaborators can see the changes as they are made. Collaborative editing can be a great way to improve efficiency, as it allows team members to work together on a document without having to wait for others to finish their changes.

## Prerequisites

The following are needed to enable collaborative editing in Document Editor.

- Socket JS
- PostgreSQL database

## How to enable collaborative editing in client side

### Step 1: Enable collaborative editing in Document Editor

To enable collaborative editing, inject `CollaborativeEditingHandler` and set the property `enableCollaborativeEditing` to true in the Document Editor, like in the code snippet below.

```typescript
import { DocumentEditorContainerComponent, Toolbar, CollaborativeEditingHandler, ContainerContentChangeEventArgs, Operation, Inject, ToolbarItem } from '@syncfusion/ej2-react-documenteditor';

// Inject collaborative editing module.
DocumentEditor.Inject(CollaborativeEditingHandler);


public collaborativeEditingHandler?: CollaborativeEditingHandler;

public componentDidMount(): void {
    window.onbeforeunload = function () {
        return 'Want to save your changes?';
    }
    if (this.container) {
        this.container.documentEditor.enableCollaborativeEditing = true;
    }
}

render() {
    return (<div className='control-pane'>
    <div id="toast_type"></div>
        <div style={{ "height": "93vh" }}>
            <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
            <DocumentEditorContainerComponent id="container" ref={(scope: DocumentEditorContainerComponent) => { this.container = scope; }} style={{ 'display': 'block' }}
                height={'100%'} currentUser={this.currentUser} toolbarItems={this.toolbarItems} serviceUrl={this.serviceUrl + 'api/wordeditor'} enableToolbar={true} locale='en-US' >
                <Inject services={[Toolbar]} />
            </DocumentEditorContainerComponent>``
        </div>
    </div>);
}
```

### Step 2: Configure SocketJS to send and receive changes

To broadcast the changes made and receive changes from remote users, configure SocketJS like below.

```typescript
import * as SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

public currentRoomName: string = ''
webSocketEndPoint: string = 'http://localhost:8024/ws';
public stompClient!: CompatClient;
//Initialize SockJS
public initializeSockJs = (): void => {
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
        _this.onConnected();
    });
}
// Subscribe to the topic.
public onConnected() {
    if (this.stompClient.connected) {
        // Subscribe to the specific topic            
        this.stompClient.subscribe('/topic/public/' + this.currentRoomName, this.onDataRecived.bind(this));
        this.connectToRoom(this.currentRoomName);
    }
}
//Receive the remote action and apply to currenty document.
public onDataRecived(data: any) {
    if (this.collaborativeEditingHandler) {
        var content = JSON.parse(data.body);
        var action = content.headers['action'];
        if (content.payload.operations != null) {
            this.container.documentEditor.collaborativeEditingHandlerModule.applyRemoteAction("action", content.payload);
        }
    }
}
```

### Step 3: Subscribe to specific topic while opening the document

When opening a document, we need to generate a unique ID for each document. These unique IDs are then used to create rooms using SocketJS, which facilitates sending and receiving data from the server.

```typescript
public openDocument(responseText: string, roomName: string): void {
    let data = JSON.parse(responseText);
    if (this.container) {
        //Update the room and version information to collaborative editing handler.
        this.collaborativeEditingHandler.updateRoomInfo(roomName, data.version, this.serviceUrl + 'api/collaborativeediting/');
        //Open the document
        this.container.documentEditor.open(data.sfdt);
        setTimeout(() => {
            // connect to server using ScketJS
            this.connectToRoom({ action: 'connect', roomName: roomName, currentUser: this.container.currentUser });
        });
    }
}
//Send the user information to the other users that I have joined.
public connectToRoom(data: any) {
    var userInfo = {
        currentUser: this.currentUser,
        clientVersion: 0,
        roomName: this.currentRoomName,
        connectionId: "",
    };
    //Send the user information to server
    this.stompClient.send("/app/join/" + this.currentRoomName, {}, JSON.stringify(userInfo));
};
```

### Step 4: Broadcast current editing changes to remote users

Changes made on the client-side need to be sent to the server-side to broadcast them to other connected users. To send the changes made to the server, use the method shown below from the document editor using the `contentChange` event.

```typescript
this.container.contentChange = (args: ContainerContentChangeEventArgs) => {
    if (this.collaborativeEditingHandler) {
        //Send the editing action to server
        this.collaborativeEditingHandler.sendActionToServer(args.operations as Operation[])
    }
}
```

## How to enable collaborative editing in Java

### Step 1: Configure SocketJS hub to create room for collaborative editing session.

To manage groups for each document, create a folder named “Hub” and add a file named ``` DocumentEditorHub.java ``` inside it. Add the following code to the file to manage SocketJS groups using room names.

Join the group by using unique id of the document by using JoinGroup method.

```java
@MessageMapping("/join/{documentName}")
public void joinGroup(ActionInfo info, SimpMessageHeaderAccessor headerAccessor, @DestinationVariable String documentName) {
    .....
    .....
    broadcastToRoom(info.getRoomName();, info, headers);
    if (!actions.containsKey(connectionId)) {
        actions.put(connectionId, info);
    }
    ArrayList<ActionInfo> actionsList = roomList.computeIfAbsent(documentName, k -> new ArrayList<>());
    // Add the new user info to the list
    actionsList.add(info);
    .....
    .....
    broadcastToRoom(docName, actionsList, addUserheaders);
}

public static void broadcastToRoom(String roomName, Object payload, MessageHeaders headers) {
    if (payload instanceof HashMap) {
        HashMap<String, ActionInfo> actionsMap = (HashMap<String, ActionInfo>) payload;
        ArrayList<ActionInfo> actionsList = new ArrayList<>(actionsMap.values());
        messagingTemplate.convertAndSend("/topic/public/" + roomName,
                MessageBuilder.createMessage(actionsList, headers));
    } else {
        messagingTemplate.convertAndSend("/topic/public/" + roomName,
                MessageBuilder.createMessage(payload, headers));
    }
}
```
### Step 2: Handle user disconnection using SocketJS.

```java
@EventListener
public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
    String sessionId = event.getSessionId();
    HashMap<String, ActionInfo> userDetails = DocumentEditorHub.actions;
    if (userDetails.containsKey(sessionId)) {
        ActionInfo info = userDetails.get(sessionId);
        .....
        .....
        ArrayList<ActionInfo> actionsList = roomList.computeIfAbsent(info.getRoomName(), k -> new ArrayList<>());
        for (ActionInfo action : actionsList) {
            if (action.getConnectionId() == sessionId) {
                actionsList.remove(action);
                break;
            }
        }
        if (userDetails.isEmpty()) {
            Connection connection = DriverManager.getConnection(datasourceUrl, datasourceUsername, datasourcePassword);
            CollaborativeEditingController.updateOperationsToSourceDocument(docName, false, 0, connection, datasourceAccessKey, datasourceSecretKey, datasourceBucketName);
        }
    }
}
```

### Step 3: Configure PostgreSQL database connection string and Bucket s3 in application level.

Configure the PostgreSQL database that stores temporary data and Bucket S3 credential to get the document for the collaborative editing session. Provide the PostgreSQL database connection string and credential for bucket S3 in application.properties file.

```java
//PostgreSQL
spring.datasource.url="<PostgreSQL server connection string>"
spring.datasource.username="<PostgreSQL username>"
spring.datasource.password="<PostgreSQL password>"
```

### Step 4: Configure Web API actions for collaborative editing.

#### Import File
-	When opening a document, create a database table to store temporary data for the collaborative editing session.
-	If the table already exists, retrieve the records from the table and apply them to the WordDocument instance using the UpdateActions method before converting it to the SFDT format.

```java
public String ImportFile(@RequestBody FilesPathInfo file) {
	DocumentContent content = new DocumentContent();
	// Load the document from local.
	WordProcessorHelper document = WordProcessorHelper.load(classLoader.getResourceAsStream("static/files/" + file.getFileName()), false);
	// table in database to store temporary data in collaborative editing session.
	ArrayList<ActionInfo> actions = createRecordForCollaborativeEditing(file.getRoomName(), lastSyncedVersion_out);
	if (actions != null && actions.size() > 0) {
		document.updateActions(actions);
	}
	.....
	return data;
}
```

#### Update editing records to database
-	Each edit operation made by the user is sent to the server and is pushed to the database. Each operation receives a version number after being inserted into the database.
-	After inserting the records to the server, the position of the current editing operation must be transformed against any previous editing operations not yet synced with the client using the TransformOperation method.
-	After performing the transformation, the current operation is broadcast to all connected users within the group.

```java
public ActionInfo UpdateAction(@RequestBody ActionInfo param) {
	Actionnfo transformedAction = addOperationsToTable(param.getRoomName());
	HashMap<String, Object> action = new HashMap<>();
	action.put("action", "updateAction");
	DocumentEditorHub.broadcastToRoom(roomName, transformedAction, new MessageHeaders(action));
	return transformedAction;
}

private ActionInfo addOperationsToTable(ActionInfo action) {
    int clientVersion = action.getVersion();
	String tableName = action.getRoomName();
    .....
	.....
	ArrayList<ActionInfo> actions = getOperationsQueue(table);
	for (ActionInfo info : actions) {
        if (!info.isTransformed()) {	
            CollaborativeEditingHandler.transformOperation(info, actions);
		}
	}
	action = actions.get(actions.size() - 1);
	action.setVersion(updateVersion);
	return acion;
}
```

#### Add Web API to get previous operation as a backup to get lost operations
On the client side, messages send from server using SocketJS may be received in a different order, or some operations may be missed due to network issues. In these cases, we need a backup method to retrieve missing records from the database.
Using the following method, we can retrieve all operations after the last successful client-synced version and return all missing operations to the requesting client. 

```java
public ActionInfo UpdateAction(@RequestBody ActionInfo param) {
	Actionnfo transformedAction = addOperationsToTable(param.getRoomName());
	HashMap<String, Object> action = new HashMap<>();
	action.put("action", "updateAction");
	DocumentEditorHub.broadcastToRoom(roomName, transformedAction, new MessageHeaders(action));
	return transformedAction;
}

private ActionInfo addOperationsToTable(ActionInfo action)
			throws Exception {
int clientVersion = action.getVersion();
	String tableName = action.getRoomName();
    .....
    .....
	ArrayList<ActionInfo> actions = getOperationsQueue(table);

	for (ActionInfo info : actions) {
        if (!info.isTransformed()) {	
            CollaborativeEditingHandler.transformOperation(info, actions);
        }
	}
	action = actions.get(actions.size() - 1);
	action.setVersion(updateVersion);
	return acion;
}
```


Full version of the code discussed about can be found in below GitHub location.

GitHub Example: [`Collaborative editing examples`](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Collaborative-Editing/tree/master/Java)