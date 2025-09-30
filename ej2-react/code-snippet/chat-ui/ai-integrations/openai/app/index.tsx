import { ChatUIComponent, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { marked } from 'marked';

const azureOpenAIApiKey = 'YOUR_AZURE_OPENAI_API_KEY'; // Replace with your Azure OpenAI API key
const azureOpenAIEndpoint = 'YOUR_AZURE_OPENAI_ENDPOINT'; // Replace with your Azure OpenAI endpoint (e.g., https://your-resource-name.openai.azure.com)
const azureOpenAIApiVersion = '2024-02-01'; // Replace with the API version for your resource
const azureDeploymentName = 'YOUR_DEPLOYMENT_NAME'; // Replace with your Azure OpenAI deployment name

function App() {
  const chatRef = React.useRef<ChatUIComponent>(null);

  const currentUser: UserModel = {
    id: 'user1',
    user: 'You',
  };

  const aiModel: UserModel = {
    id: 'ai',
    user: 'Azure OpenAI',
  };

  const handleMessageSend = async (args: { message: { text: string } }) => {
    if (chatRef.current) {
      chatRef.current.typingUsers = [aiModel];
    }
    try {
      const url =
        azureOpenAIEndpoint.replace(/\/$/, '') +
        `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
        `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': azureOpenAIApiKey,
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: args.message.text }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const responseText: string = data.choices[0].message.content.trim() || 'No response received.';
      
      if (chatRef.current) {
        chatRef.current.addMessage({
          text: marked.parse(responseText),
          author: aiModel,
        });
      }
    } catch (error) {
      if (chatRef.current) {
        chatRef.current.addMessage({
          text: 'Error generating response. Please check your Azure OpenAI configuration (API Key, Endpoint, Deployment Name, and API Version) and try again.',
          author: aiModel,
        });
      }
    } finally {
      if (chatRef.current) {
        chatRef.current.typingUsers = [];
      }
    }
  };

  const handleToolbarItemClicked = () => {
    if (chatRef.current) {
      chatRef.current.messages = [];
    }
  };

  return (
    <ChatUIComponent
      ref={chatRef}
      id="chat-ui"
      user={currentUser}
      headerText="Chat with Azure OpenAI"
      headerIconCss="e-icons e-ai-chat"
      headerToolbar={{
        items: [
          { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
        ],
        itemClicked: handleToolbarItemClicked,
      }}
      emptyChatTemplate="#emptyChatTemplate"
      messageSend={handleMessageSend}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('container'));