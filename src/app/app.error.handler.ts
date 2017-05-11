import { ErrorHandler, Injectable } from '@angular/core'
import { MessageCtxService, Message } from "./common/ui/messages/message.ctx.service";

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(public messageCtx: MessageCtxService) {
    //
  }

  handleError(error) {
    this.messageCtx.add(this.getMessage(error));
  }

  private getMessage(error: any): Message {
    let result = new Message();
    result.message = error.message;
    if (error.rejection) {
      result.ok = error.rejection.ok;
      result.url = error.rejection.url;
      result.status = error.rejection.status;
      result.statusText = error.rejection.statusText;
    }

    if (error.rejection && error.rejection._body) {
      let body = JSON.parse(error.rejection._body);
      result.errors = body.errors;
    }
    return result;
  }
}
