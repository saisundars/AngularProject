import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'child',
    template:`<div>
        <h2> this is child component</h2>
        {{uname}}
        <button (click)="passdata()">send message</button>
    </div>`,
    styles:[`
    div{
        background:lightgreen;padding:20px
    }`]    
})
export class child {
    
    @Input() uname:string;//parent to child

    //child to parent

    @Output() notify:EventEmitter<string>=new EventEmitter<string>();
    
    passdata(){
        this.notify.emit("message from child component")
    }
}