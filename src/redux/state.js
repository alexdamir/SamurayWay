import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

export function RenderAllTree()  {
  ReactDOM.render(

    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
};

export let state = {
    profileData: {
        postsData: [
            {id: 1, message: "Hi! How are you? Yes?" , likescount: 11},
            {id: 2, message: "I study React"    , likescount: 12}
        ],
        addPost: () => {
            let newPost = {
                id: state.profileData.postsData.length,
                message: state.profileData.newPostTextValue,
                likescount:0
            };
            state.profileData.postsData.push(newPost);
            state.profileData.newPostTextValue = '';
            RenderAllTree();
        },
        newPostTextValue: '',
        changeNewPostText: (text) => {
            state.profileData.newPostTextValue = text;
            RenderAllTree();
        }
          
    },
    dialogsData: {
         dialogsData: [
            {id: 1, name:"Dimych"},
            {id: 2, name:"Andrey"},
            {id: 3, name:"Sveta" },
            {id: 4, name:"Sasha" },
            {id: 5, name:"Viktor"},
            {id: 6, name:"Valera"}
        ],        
        messagesData: [
            {id: 1, message: "Hi!" },
            {id: 2, message: "How is your it-kamasutra?" },
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ]
    }
}
