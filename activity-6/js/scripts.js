//Array to hold messages
var messages = [];

//Message constructor
function Message(type, user, message){

    this.type = type;
    this.user = user;
    this.message = message;
}

//Message types
var messageType = {

    out: 'out-message',
    in: 'in-message',
    default: 'unknown-message'
};

//Data array of seed messages
var data = [
    {
        type: messageType.out,
        user: "SENDER",
        message: "How about this weather recently?"
    },
    {
        type: messageType.in,
        user: "RECEIVER",
        message: "I know, right? If it's not raining, it's an ice storm!"
    },
    {
        type: messageType.out,
        user: "SENDER",
        message: "Or it's just snowing! I thought it was supposed to be spring already!"
    }
]


//Creates and returns element for the given message
function createMessageElement(message){

    //Message text to be displayed
    var messageElm = document.createElement('div');
    var messageText = document.createTextNode(message.user + ' says: ' + message.message);

    //Creates element to display message
    messageElm.appendChild(messageText);
    document.getElementById('message-container').appendChild(messageElm);

    //Class added to the element using the message type
    messageElm.className = message.type;
}

//Adds new message when user clicks send/reply button
function addMessageHandler(event){

    //Declarations
    var user, type;
    var messageInput = document.getElementById('message-input');
    
    //Determine message type and users based on button pressed
    switch(event.target.id){

        case 'send-button':
            user = "SENDER";
            type = messageType.out;
            break;
        case 'reply-button':
            user = "RECEIVER";
            type = messageType.in;
            break;
        default:
            user = "UNKNOWN";
            type = messageType.default;
            break;
    }

    //Create new message
    if (messageInput.value != ''){ //if message not empty

        //add new message to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //Create message element to be displayed & add it to the webpage
        var elm = createMessageElement(message);
        

        //Reset value
        messageInput.value = '';
    }
}

//Load seed data
function loadSeedData(){

    //Declarations
    var messageContainerElm = document.getElementById('message-container');
    
    for(var i = 0; i < data.length; i++){

        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message); //load message array with seed data
    }

    for (var i = 0; i < messages.length; i++){

        var message = messages[i];

        //Create message element to be displayed & add it to the webpage
        var elm = createMessageElement(message);
       
    }
}

//Initialization of button handlers and loading of seed data
var init = function(){

    //button handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
}

init();
