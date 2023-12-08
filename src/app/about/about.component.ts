import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  async mockSend(event: Event) {
    event.preventDefault();

    const name = "";
    const email = "";
    const message = "";

    let validation = this.validateDetails(name, email, message);

    if (validation.nameValid && validation.emailValid && validation.messageValid) {
      let body = {
        name,
        email,
        message,
      }
      let response = await window.fetch("https://aceade-express-echo.azurewebsites.net/", {
        method: "POST",
        body: JSON.stringify(body)
      });
      if (response.status === 200) {
        this.notifyResult("Your email has been 'sent'")
      } else {
        this.notifyResult("Could not send your email. Please try again later")
      }
    } else {
      console.log("Invalid!!");
      this.notifyResult("Please fill out all fields");
    }
  }


  validateDetails(name: string, email: string, message: string) {
    return {
      nameValid: name?.length > 1,
      emailValid: email?.length > 1,
      messageValid: message?.length > 1
    }
  }

  notifyResult(result: string) {

  }
}
