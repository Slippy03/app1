import React, { Component } from "react";

export default class Calendar extends Component{
    getDate(){
        const dayName =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthName=['January','February','March,April','May,June','July','August','September','October','November','December']
        const date = new Date()
        const weekDay = dayName[date.getDate()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear()
        return `Day : ${weekDay} ${day} ${month} ${year}`
    }
    render(){
        return <div>{this.getDate()}</div>
    }
}