import { Injectable } from "@angular/core";
import { Logger } from "./baseLogger.service";

@Injectable({
    providedIn:'root'
}
    
)
export class ConsoleLoggerService extends Logger{
    write(message:string){
        console.log(message);
    }
}