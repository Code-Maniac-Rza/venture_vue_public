import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatAgent = () => {
  const [businessInsights, setBusinessInsights] = useState(null);

  function GoToStates() {
    window.open("/state-lead", "_self");
  }
  function GoToSectors() {
    window.open("/", "_self");
  }

  const steps = [
    {
      id: "1",
      message: "Hey there! I'm Aria, your assistant. How can I help you today?",
      trigger: "2",
    },
    {
      id: "2",
      message: "Do you want to get some business insights?",
      trigger: "3",
    },
    {
      id: "3",
      options: [
        { value: "yes", label: "Yes", trigger: "4" },
        { value: "no", label: "No", trigger: "5" },
      ],
    },
    {
      id: "4",
      message: "Great! Please select the type of insights you need:",
      trigger: "9",
    },
    {
      id: "9",
      options: [
        {
          value: "sector-wise",
          label: "Sector-wise Insights",
          trigger: () => GoToSectors(),
        },
        {
          value: "state-wise",
          label: "State-wise Insights",
          trigger: () => GoToStates(),
        },
      ],
    },
    {
      id: "5",
      message: "Alright! Let me know if you change your mind.",
      trigger: "12",
    },
    {
      id: "6",
      message: "We are redirecting you to sector wise insights....",

      trigger: "end",
    },
    {
      id: "7",
      message: "We are redirecting you to state wise insights....",

      trigger: "end",
    },
    {
      id: "end",
      message: "Is there anything else I can assist you with?",
      trigger: "10",
    },
    {
      id: "10",
      options: [
        { value: "yes", label: "Yes", trigger: "1" },
        { value: "no", label: "No", trigger: "11" },
      ],
    },
    {
      id: "11",
      message: "Thank you for chatting with me. Have a great day!",
      trigger: "12",
    },
    {
      id: "12",
      options: [{ value: "restart", label: "Restart Chat", trigger: "1" }],
    },
  ];

  // Creating our own theme
  const theme = {
    background: "#a855f7",
    headerBgColor: "#1e40af",
    headerFontSize: "20px",
    botBubbleColor: "#1e40af",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    botAvatar: "https://cdn-icons-png.flaticon.com/512/4399/4399985.png",
    floating: true,
  };

  return (
    <div className=" ">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Aria" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default ChatAgent;
