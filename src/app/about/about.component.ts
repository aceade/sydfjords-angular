import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmailService } from '../email/email.service';


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

    console.info(this.name.value, this.email.value, this.message.value);

    this.emailService.sendEmail({
      senderName, senderAddress, message: messageText
    }).subscribe({
      next(x) {
        console.info("Sent email", x);
        super.notifyResult("Your email has been 'sent'");
      },
      error() {
        super.notifyResult("Could not send your email. Please try again later")
      }
    });
    
  }


  private notifyResult(result: string) {
    this.statusText = result;
    setTimeout(() => {
      this.statusText = "";
    }, 3000);
  }
}
