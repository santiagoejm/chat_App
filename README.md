# chat_App

Hello world!! This project, is a _chat_app_,it is powered by **React.js, Express and Socket io**. This last one is in charged to emit and listen events, that allows to elaborate the exchange of messages, like any chat would do.

It's use is very simple, we are all familiarized with any other chat, the user must write a message and `click` on the arrow or `press` Enter to send it. But before that, the user must put their user name and select a room where they want to share their messages; all of the participants that are in the same room, will receive and will able to read the messages shared in it.

## Current Functionality

- The user must open locally, at least 2 browsers Tabs while the program is running, and select an _user name and room_ (same in all Tabs) to initialized the **Chat**.
- Once in the room, the exchange of messages can take place. What is writen and send in one Tab, will be displayed in the body of the own chat, aswell in the other one(s).
- The format of the displayed messages, will depend on the case in which the user is in (sender or receiver), if the user is the sender, the message will appear at the left side of the body-chat with a green `background`. if the user is the receiver, the message will be displayed on the rigth side of the body-chat with a blue `background`.

## Future Functionality to Implement

- Implement an authentication and authorization panel to access the app.
- Create a bigger interface, where the user can switch and navigate between rooms, without losing the messages that already exists in them, creating a notification effect, that is triggered once a new message is received.
- Go Live once the auth proccess is finish.

## Usage

- clone` the repository.
- install the dependencies: `npm install`
- run the app: `npm start`
- you are good to go.

## Live Demo
