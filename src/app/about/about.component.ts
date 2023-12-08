import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  statusText = "";

  name = new FormControl();
  email = new FormControl();
  message = new FormControl();

  async mockSend(event: Event) {
    event.preventDefault();

    console.info(this.name.value, this.email.value, this.message.value);
    let validation = this.validateDetails(this.name.value, this.email.value, this.message.value);

    if (validation.nameValid && validation.emailValid && validation.messageValid) {
      let body = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
      }
      console.info(body);
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
    this.statusText = result;
    setTimeout(() => {
      this.statusText = "";
    }, 3000);
  }
}
