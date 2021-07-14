import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//the job of the service is to handle the request/response
//and passing over the raw data.

//the job of the component is to take that data and get it into a
//format...
@Injectable()
export class ApiTestService{
    apiBaseUrl: string = "https://swapi.dev/api/people/";
    constructor(private http: HttpClient){}

    getPerson(id: number): any{
        let url = this.apiBaseUrl+ id;
        return this.http.get(url);
    }

    //getLuke(): any{
        //the get method returns an observable object
        //it is an async object that waits
        //for the http call to be done processing and spits out the response list
      //  return this.http.get(this.apiUrl);
    //}
}