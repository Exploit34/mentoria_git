
//import form mongo
import { Document } from "mongoose";
import { Schema } from "mongoose";
import { model } from "mongoose";
import models from "../";

//interface creation

interface ITask  extends Document {
  title: String;
  description?: string;
  completed: boolean,
  createdAt: Date
}
//creation of task schema
const TaskSchema = new Schema<ITask>( {
title: String,   
description: String,
completed:false,
createdAt:Date.now,
})
//export model with schema

export default models.Task || model<ITask>("Task", TaskSchema);






