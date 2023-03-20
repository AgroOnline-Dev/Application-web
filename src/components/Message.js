import React from "react";

function Message({ user, content }) {
  return (
    <div>
      <p className="content" id={user === "Diancel" ? "you" : "other"}>
        {content}
      </p>
    </div>
  );
}

export default Message;
