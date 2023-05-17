import React from "react";
import SendIcon from '@mui/icons-material/Send';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="title">Newsletter</h1>

      <div className="description">Get timely updates from your favourite products</div>

      <div className="input-container">
        <input type="text" placeholder="Your email" />
        <button className="button">
            <SendIcon></SendIcon>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
