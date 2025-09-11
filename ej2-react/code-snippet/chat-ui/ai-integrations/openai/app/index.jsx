import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { marked } from 'marked';

function App() {
  const chatRef = React.useRef(null);
  const openaiApiKey = '';

  const currentUser = {
    id: 'user1',
    user: 'You',
  };

  const aiModel = {
    id: 'ai',
    user: 'Open AI',
  };

  const handleMessageSend = (args) => {
    setTimeout(async () => {
      if (chatRef.current) {
        chatRef.current.typingUsers = [aiModel];
      }

      try {
        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'user', content: args.message.text }],
              max_tokens: 150,
            }),
          }
        );
        const data = await response.json();
        const responseText = data.choices[0].message.content.trim() || 'No response received.';

        if (chatRef.current) {
          chatRef.current.addMessage({
            text: marked.parse(responseText),
            author: aiModel,
          });
        }
      } catch (error) {
        console.error('Error fetching OpenAI response:', error);
        if (chatRef.current) {
          chatRef.current.addMessage({
            text: 'Error generating response. Please check your API key and try again.',
            author: aiModel,
          });
        }
      } finally {
        if (chatRef.current) {
          chatRef.current.typingUsers = [];
        }
      }
    }, 500);
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
      headerText="Chat with OpenAI"
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