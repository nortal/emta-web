import { Injectable } from '@angular/core';

@Injectable()
export class MessageCtxService {
  public static readonly TYPE__ERROR:String = 'error';
  public static readonly TYPE__WARNING:String = 'warning';
  public static readonly TYPE__SUCCESS:String = 'success';

  public messages: Array<Message> = [];

  public addError(messageText:string):void {
    this.addMessage(messageText, MessageCtxService.TYPE__ERROR);
  }

  public addWarning(messageText:string):void {
    this.addMessage(messageText, MessageCtxService.TYPE__WARNING);
  }

  public addSuccess(messageText:string):void {
    this.addMessage(messageText, MessageCtxService.TYPE__SUCCESS);
  }

  public addMessage(messageText:String, type:String):void {
    let msg = new Message();
    msg.type = type;
    msg.message = messageText;
    this.add(msg);
  }

  public add(message: Message): void {
    this.messages.push(message);
  }

  public removeByIndex(index: number): void {
    this.messages.splice(index, 1);
  }

  public removeByMessage(message: Message): void {
    this.removeByIndex(this.messages.indexOf(message));
  }

  public clear(): void {
    this.messages = [];
  }
}

export class Message {
  public type:String; // error, warning, success
  public message:String;
  public status:number;
  public statusText:String;
  public url:String;
  public ok:boolean;
  public errors:Array<JsonApiError>;

  public getTexts():Array<String> {
    if (!this.errors || this.errors.length === 0) {
      return [this.message];
    }
    let result = [];
    this.errors.forEach((error:JsonApiError) => {
      result.push(error.code + ': ' + error.detail);
    });
    return result;
  }

  public getType():String {
    if (this.type) {
      return this.type;
    }
    if (this.status >= 400) {
      return MessageCtxService.TYPE__ERROR;
    }
    if (this.status < 400) {
      return MessageCtxService.TYPE__SUCCESS;
    }
    return MessageCtxService.TYPE__WARNING;
  }

  public isError():boolean {
    return this.getType() === MessageCtxService.TYPE__ERROR;
  }

  public isWarning():boolean {
    return this.getType() === MessageCtxService.TYPE__WARNING;
  }

  public isSuccess():boolean {
    return this.getType() === MessageCtxService.TYPE__SUCCESS;
  }
}

export class JsonApiError {
  public id:String;
  public status:String;
  public code:String;
  public title:String;
  public detail:String;
  public meta:any;
}
