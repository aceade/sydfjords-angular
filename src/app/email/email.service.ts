import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";

export interface Email {
    senderName: string;
    senderAddress: string;
    message: string;
}

export class ValidationError extends Error {
    isNameValid: boolean = false;
    isEmailValid: boolean = false;
    isMessageValid: boolean = false;
}

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(private http: HttpClient) { }

    private url: string = "https://aceade-express-echo.azurewebsites.net/api/email";

    sendEmail(body: Email): Observable<Email> {
        const validation = this.validateDetails(body);
        console.log(validation);
        if (validation.nameValid && validation.emailValid && validation.messageValid) {
            return this.http.post<Email>(this.url, body).pipe(retry(3), catchError(this.handleError));
        }
        else {
            let err = new ValidationError("Please fill out the fields");
            err.isEmailValid = validation.emailValid;
            err.isMessageValid = validation.messageValid;
            err.isNameValid = validation.nameValid;
            return throwError(() => err);
        }
    }

    private handleError(error: HttpErrorResponse) {
        console.error(`Unable to send. Status: ${error.status}/${error.message}`);
        return throwError(() => new Error("Unable to send email, please try letter"));
    }

    private validateDetails(body: Email) {
        return {
          nameValid: body.senderName.length > 1,
          emailValid: body.senderAddress.length > 1,
          messageValid: body.message.length > 1
        }
      }
}