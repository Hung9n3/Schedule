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
export class SortedEvent{
    allDay: boolean;
    endDate: Date;
    endTime: string;
    startTime:string;
    startDate:Date;
    title: string;
    id:number;
    isEndDate:boolean;
    isStartDate:boolean;
    /**
     *
     */
    constructor(  
     allDay: boolean,
     isEndDate:boolean,
     isStartDate:boolean,
     endTime: string,
     startTime:string,
     endDate: Date,
     startDate: Date,
     title: string,
     id:number) {
         this.allDay=allDay;
         this.endDate = endDate;
         this.startDate = startDate;
         this.endTime = endTime;
         this.startTime = startTime;
         this.title = title;
         this.id=id;
         this.isStartDate =isStartDate;
         this.isEndDate = isEndDate;
    }
    
 }export interface IRange {
    startTime : Date;
    endTime: Date;
}