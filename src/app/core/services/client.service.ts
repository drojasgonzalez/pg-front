import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../models/client.model";
import { environment } from "../../shared/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ClienteService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getClientes(): Observable<Client[]> {
        return this.http.get<Client[]>(this.apiUrl + "/clients");
    }
}
