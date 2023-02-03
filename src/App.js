import React from 'react';
import './App.css';

import Content from './components/Content/Content.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Nav from './components/NavBar/Nav.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {


        return ( <
                BrowserRouter >
                <
                div className = "app-wrapper" >
                <
                Header / >
                <
                Nav / >
                <
                div className = 'app-wrapper-conten' >
                <
                Routes >

                <
                Route path = "/Content"
                element = { < Content posts = { props.state.contentPage.posts }
                    />}/ >
                    <
                    Route path = "/Dialogs"
                    element = { < Dialogs dialogsData = { props.state.messagesPage.dialogsData }
                        messageData = { props.state.messagesPage.messageData }
                        />}/ >
                        <
                        /Routes> <
                        /div> <
                        /div> <
                        /BrowserRouter>
                    );
                }

                export default App;