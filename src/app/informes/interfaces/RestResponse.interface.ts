export class RestResponse {
  responseCode: number;
  message: string;
  body: string;
  constructor(responseCode:number,message:string,body:string){
    this.responseCode = responseCode;
    this.message = message;
    this.body = body;

  }
}
