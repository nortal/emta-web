import { Component } from '@angular/core';
import { MessageCtxService } from "./message.ctx.service";

@Component({
  selector: 'message-ctx',
  templateUrl: './message-ctx.component.html'
})
export class MessageCtxComponent {

  constructor(public messageCtx: MessageCtxService) {
    //
  }

  public close() {

  }
}
