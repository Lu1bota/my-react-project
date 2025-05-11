interface MailBoxProps {
  username: string;
  messages: string[];
}

export default function MailBox({ username, messages }: MailBoxProps) {
  return (
    <>
      <p>Hello, {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
}
