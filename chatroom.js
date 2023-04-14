document.getElementById("sendButton").addEventListener("click", function() {
    const inputMessage = document.getElementById("inputMessage");
    const chatContainer = document.querySelector(".chat-container");

    if (inputMessage.value.trim() !== "") {
        const newMessage = document.createElement("div");
        newMessage.className = "chat-message sender";
        
        const newMessageText = document.createElement("p");
        newMessageText.textContent = inputMessage.value.trim();
        
        newMessage.appendChild(newMessageText);
        chatContainer.appendChild(newMessage);

        // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;

        inputMessage.value = "";
    }
});

// Send message when pressing Enter key
document.getElementById("inputMessage").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("sendButton").click();
    }
});