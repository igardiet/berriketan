import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

export const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '386de764-cd6d-4ef0-ac87-d1c21c1dbc3a',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};
