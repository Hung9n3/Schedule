export class Event{
   allDay: boolean;
   endTime: Date;
   startTime:Date;
   title: string;
   id:number;

   /**
    *
    */
   constructor(  allDay: boolean,
    endTime: Date,
    startTime:Date,
    title: string,
    id:number) {
        this.allDay=allDay;
        this.endTime = endTime;
        this.startTime = startTime;
        this.title = title;
        this.id=id
   }
   
}

export interface IRange {
    startTime : Date;
    endTime: Date;
}