class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessage(text) {
    const message = this.createChatBotMessage(text);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleMessage(message) {
    const msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      this.addMessage("Hello 👋 How can I assist you with the CRM?");
      return;
    }

    if (msg.includes("lead")) {
      this.addMessage(
        "📌 Leads are potential customers. You can add, edit, and track leads from the Leads module."
      );
      return;
    }

    if (msg.includes("customer")) {
      this.addMessage(
        "👥 Customers are converted leads. View customer history and details in the Customers section."
      );
      return;
    }

    if (msg.includes("ticket")) {
      this.addMessage(
        "🎫 Tickets help manage support requests. Create and track tickets in the Support module."
      );
      return;
    }

    if (msg.includes("report")) {
      this.addMessage(
        "📊 Reports provide insights into sales, leads, and performance."
      );
      return;
    }

    this.addMessage(
      "❓ Sorry, I didn’t understand that. Try asking about leads, customers, tickets, or reports."
    );
  }
}

export default ActionProvider;
