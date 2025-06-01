import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const todoList = createSlice({
  name: "TodoList",
  initialState: {
    data: [
      {
        id: "1",
        name: "Parviz",
        age: "20",
        status: false,
      },
      {
        id: "2",
        name: "Max",
        age: "22",
        status: true,
      },
      {
        id: "3",
        name: "Messi",
        age: "10",
        status: false,
      },
      {
        id: "4",
        name: "Amin",
        age: "28",
        status: false,
      },
      {
        id: "5",
        name: "Soald",
        age: "60",
        status: true,
      },
    ],
    addName: "",
    addAge: "",
    addStatus: false,
    openAdd: false,
    editName: "",
    editAge: "",
    idx: null,
    editStatus: false,
    OpenEdit:false
    

  },
  reducers: {
    
    del: (state, action) => {
      state.data = state.data.filter((el) => el.id != action.payload);
    },
    add: (state) => {
      const newAddUser = {
        id: Date.now(),
        name: state.addName,
        age: state.addAge,
        status: state.addStatus == "true" ? true : false,
      };
      state.data = [...state.data, newAddUser];
      state.addName = "";
      state.addAge = "";
      state.addStatus = "";
    },
    setAddName: (state, action) => {
      state.addName = action.payload;
    },
    setAddAge: (state, action) => {
      state.addAge = action.payload;
    },
    setAddStatus: (state, action) => {
      state.addStatus = action.payload;
    },
    setOpenAdd: (state, action) => {
       state.openAdd =  action.payload
    },
    setEditName: (state, action) => {
      state.editName = action.payload;
    },
    setEditAge: (state, action) => {
      state.editAge = action.payload;
    },
    setEditStatus: (state, action) => {
      state.editStatus = action.payload;
    },
    setIdx: (state, action) => {
      state.idx = action.payload;
    },
      SetOpenEdit:(state,action)=>{
        state.OpenEdit=action.payload
      },
      edit:(state, action)=>{
        state.data = state.data.map(el => el.id == state.idx ? {...el, name: state.editName,
            age: state.editAge,
            status: state.editStatus
        } : el)
      },
      check:(state,action)=>{
        state.data=state.data.map((el)=>el.id==action.payload?{...el,status:!el.status}:el)
      }
  },

});
export default todoList.reducer;
export const { del, setAddAge, setAddName, setAddStatus, add, setOpenAdd,SetOpenEdit,setEditAge,setEditName,setEditStatus,setIdx,edit,check } =
  todoList.actions;
