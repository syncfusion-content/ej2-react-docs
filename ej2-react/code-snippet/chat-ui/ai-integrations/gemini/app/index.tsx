import { ChatUIComponent, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import { marked } from 'marked';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

function App() {
  const chatRef = React.useRef<ChatUIComponent>(null);
  const geminiApiKey: string = '';
  const genAI = React.useMemo(() => new GoogleGenerativeAI(geminiApiKey), []);

  const currentUser: UserModel = {
      id: 'user1',
      user: 'You',
  };

  const aiModel: UserModel = {
      id: 'ai',
      user: 'Gemini',
  };

  const handleMessageSend = async (args: { message: { text: string } }) => {
          if (chatRef.current) {
              chatRef.current.typingUsers = [aiModel];
          }

          try {
              const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Replace Your Model Name Here
              const result = await model.generateContent(args.message.text);
              const response = await result.response.text();

              if (chatRef.current) {
                  chatRef.current.addMessage({
                      text: marked.parse(response),
                      author: aiModel,
                  });
              }
          } catch (error) {
              if (chatRef.current) {
                  chatRef.current.addMessage({
                      text: 'Error generating response. Please try again.',
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
          headerText="Chat UI"
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