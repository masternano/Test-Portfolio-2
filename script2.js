const messages = [
    "Hi, my name is Samuel Nnabude. I design digital products, design systems, develop web interfaces, and visualize data.",
    "In the last 10 years, I've worked on a variety of projects in governance, security, agriculture, finance, e-commerce, transport, and health.",
    "My process is one of curiosity, positive impact, and vision approach. I have a simple mantra: '...willing is able.' My skill and experience as a designer/developer give me a unique perspective on human-centered designs and experience."
];

const chatContainer = document.getElementById("chatContainer");
const typingBubble = document.createElement("div");
typingBubble.classList.add("chat-bubble","typing-bubble");
chatContainer.appendChild(typingBubble);
let messageIndex = 0;

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getLocation() {
    return "Abuja, NG";
}

function highlightName(text) {
    return text.replace(/Samuel Nnabude/g, '<strong class="gradient-text">Samuel Nnabude</strong>');
}

function createTypingIndicator() {
    typingBubble.innerHTML = `
        <img src="img/Avatar.png" alt="Avatar" class="avatar">
        <div class="message-container">
            <div class="typing-indicator">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="message-content">
                <div class="message-header">
                    <strong>Samuel</strong>
                    <span class="message-meta">${getCurrentTime()} • ${getLocation()}</span>
                </div>
                <p>${highlightName(messages[messageIndex])}</p>
            </div>
        </div>
    `;
}

function transitionTypingBubbleToMessage() {
    const messageContainer = typingBubble.querySelector('.message-container');
    const typingIndicator = typingBubble.querySelector('.typing-indicator');
    
    // Start expansion after 2 seconds
    setTimeout(() => {
        messageContainer.classList.add('expanding');
        typingIndicator.classList.add('fade-out');
        
        // Final cleanup
        setTimeout(() => {
            typingBubble.classList.remove("typing-bubble");
            messageIndex++;
            addMessage();
        }, 1500);
    }, 3000);
}

function addMessage() {
    if (messageIndex < messages.length) {
        if (messageIndex === 0) {
            createTypingIndicator();
            setTimeout(() => {
                transitionTypingBubbleToMessage();
            }, 2000); // Show typing indicator for 2 seconds
        } else {
            setTimeout(() => createMessageBubble(false), 1500); // Shorter delay between messages
        }
    }
}

// Start the sequence after a brief delay
setTimeout(addMessage, 2000);

// Navigation Logic remains the same
document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        let page = nav.getAttribute('data-page');
        document.querySelectorAll('.content-area').forEach(content => content.classList.remove('active'));
        document.getElementById(page).classList.add('active');
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        nav.classList.add('active');
    });
});

// You'll need to add this function if it's not already in your code
function createMessageBubble(withAvatar) {
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("chat-bubble");
    if (!withAvatar) messageBubble.classList.add("no-avatar");
    
    messageBubble.innerHTML = `
        ${withAvatar ? '<img src="img/Avatar.png" alt="Avatar" class="avatar">' : ''}
        <div class="message">
            <div>
                <strong>Samuel</strong>
                <span style="font-size: 12px; color: gray;">${getCurrentTime()} • ${getLocation()}</span>
                <br>
            </div>
            <p>${highlightName(messages[messageIndex])}</p>
        </div>
    `;
    
    chatContainer.appendChild(messageBubble);
    // Only apply slide-up effect to subsequent messages
    if (messageIndex > 0) {
        messageBubble.classList.add("slide-up-effect");
    }
    messageIndex++;
    
    if (messageIndex < messages.length) {
        setTimeout(() => createMessageBubble(false), 1500);
    }
}



// Navigation Logic
document.querySelectorAll('.nav-item').forEach(nav => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        let page = nav.getAttribute('data-page');
        document.querySelectorAll('.content-area').forEach(content => content.classList.remove('active'));
        document.getElementById(page).classList.add('active');
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        nav.classList.add('active');
    });
});




