import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Student, Teacher} from './Student';

ReactDOM.render(<Student name = "Happy"/>, document.getElementById("root"));   // render(elment, donMode)
ReactDOM.render(<Teacher name = "Youtube launda"/>, document.getElementById("root"));