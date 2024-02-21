import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Email, EmailService } from '../email/email.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  constructor(private emailService: EmailService) {}

  statusText = "";

  name = new FormControl();
  email = new FormControl();
  message = new FormControl();

  async mockSend(event: Event) {
    event.preventDefault();

    const senderName = this.name.value;
    const senderAddress = this.email.value;
    const messageText = this.message.value;

    console.info(senderName, senderAddress, messageText);

    try {
      this.emailService.sendEmail({
        senderName, senderAddress, message: messageText
      }).subscribe(email => {
        console.log("Sent", email);
        this.notifyResult("Your email has been sent");
      });
    } catch (err: any) {
      this.notifyResult("Unable to send email. Please check all fields and try again");
    }
    
  }


  private notifyResult(result: string) {
    this.statusText = result;
    setTimeout(() => {
      this.statusText = "";
    }, 3000);
  }
}
