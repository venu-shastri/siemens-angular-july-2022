import { Logger } from "./baseLogger.service";

export class ConsoleLoggerService extends Logger{
    write(message:string){
        console.log(message);
    }
}