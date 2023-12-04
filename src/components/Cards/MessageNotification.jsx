import React from 'react';

const MessageNotification = ({ sender, message, timestamp }) => {
  return (
    <div className="message-card">
      <div className="message-sender"><b>{sender}</b></div>
      <div className="message-content">{message}</div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
};

export default MessageNotification;
