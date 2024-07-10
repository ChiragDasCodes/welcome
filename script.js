document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-btn');

    // Simulate initial message from Presidency College
    simulateIncomingMessage('welcome to presidency college');

    // Simulate incoming message after delay
    function simulateIncomingMessage(message) {
        setTimeout(function() {
            receiveMessage(message);
        }, 1000);
    }

    // Function to send a message from user
    function sendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'outgoing');
        messageElement.innerHTML = `
            <div class="message-box">
                <p>${message}</p>
            </div>
        `;
        chatMessages.appendChild(messageElement);
        messageInput.value = ''; // Clear input field after sending message
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate incoming message after sending
        if (message.toLowerCase() !== 'welcome to presidency college') {
            simulateIncomingMessage(message);
        }
    }

    // Function to receive a message from Presidency College
    function receiveMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'incoming');

        // Create message box
        const messageBox = document.createElement('div');
        messageBox.classList.add('message-box');
        messageBox.innerHTML = `<p>${message}</p>`;
        messageElement.appendChild(messageBox);
        chatMessages.appendChild(messageElement);

        // Activate animations
        setTimeout(function() {
            messageBox.classList.add('active');
        }, 100);

        // Check for welcome message to show options
        if (message.toLowerCase() === 'welcome to presidency college') {
            setTimeout(function() {
                showOptions();
            }, 1000); // Wait a moment before showing options
        } else if (message.toLowerCase() === 'follow us on social media') {
            showSocialOptions();
        }

        // Scroll to bottom of messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to show options after welcome message
    function showOptions() {
        const optionsMessage = `
            <div class="message-box">
                <p>Choose an option:</p>
                <p class="reply-option" data-option="venue">Where is the venue?</p>
                <p class="reply-option" data-option="contact">Contact us</p>
                <p class="reply-option" data-option="social">Follow us on social media</p>
            </div>
        `;
        const optionsElement = document.createElement('div');
        optionsElement.innerHTML = optionsMessage;
        chatMessages.appendChild(optionsElement);

        // Activate animations
        setTimeout(function() {
            optionsElement.querySelector('.message-box').classList.add('active');
        }, 100);

        // Handle reply options
        const replyOptions = optionsElement.querySelectorAll('.reply-option');
        replyOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedOption = option.getAttribute('data-option');
                handleReply(selectedOption);
            });
        });

        // Scroll to bottom of messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle different reply options
    function handleReply(option) {
        let replyMessage = '';

        switch (option) {
            case 'venue':
                replyMessage = 'The venue is the auditorium';
                sendMessage(replyMessage);
                break;
            case 'contact':
                replyMessage = 'Call us on +91-9513962949';
                sendMessage(replyMessage);
                break;
            case 'social':
                showSocialOptions();
                break;
            case 'facebook':
                replyMessage = 'Redirecting to Facebook...';
                sendMessage(replyMessage);
                setTimeout(function() {
                    window.location.href = 'https://www.facebook.com/presidencycollege.ac.in/';
                }, 1000);
                break;
            case 'instagram':
                replyMessage = 'Redirecting to Instagram...';
                sendMessage(replyMessage);
                setTimeout(function() {
                    window.location.href = 'https://www.instagram.com/presidencycollege/';
                }, 1000);
                break;
            case 'website':
                replyMessage = 'Redirecting to our website...';
                sendMessage(replyMessage);
                setTimeout(function() {
                    window.location.href = 'https://presidencycollege.ac.in/';
                }, 1000);
                break;
            default:
                break;
        }
    }

    // Function to show social options
    function showSocialOptions() {
        const socialOptionsMessage = `
            <div class="message-box">
                <p>Choose a platform:</p>
                <p class="reply-option" data-option="facebook">Facebook</p>
                <p class="reply-option" data-option="instagram">Instagram</p>
                <p class="reply-option" data-option="website">Website</p>
            </div>
        `;
        const socialOptionsElement = document.createElement('div');
        socialOptionsElement.innerHTML = socialOptionsMessage;
        chatMessages.appendChild(socialOptionsElement);

        // Activate animations
        setTimeout(function() {
            socialOptionsElement.querySelector('.message-box').classList.add('active');
        }, 100);

        // Handle reply options
        const replyOptions = socialOptionsElement.querySelectorAll('.reply-option');
        replyOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedOption = option.getAttribute('data-option');
                handleReply(selectedOption);
            });
        });

        // Scroll to bottom of messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Event listener for sending a message when button is clicked
    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            sendMessage(message);
        }
    });

    // Event listener for sending a message when Enter key is pressed
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const message = messageInput.value.trim();
            if (message !== '') {
                sendMessage(message);
            }
        }
    });
});
