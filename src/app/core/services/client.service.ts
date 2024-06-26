import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Client } from "../models/client.model";
import { environment } from "../../shared/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ClienteService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    //? Servicio para api para peticiones linq entity framework
    getClients(pageNumber: number, pageSize: number): Observable<Client[]> {
        let params = new HttpParams()
            .set("pageNumber", pageNumber.toString())
            .set("pageSize", pageSize.toString());

        return this.http.get<Client[]>(`${this.apiUrl}Clients/clients`, {
            params,
        });
    }

    //? Servicio para api procedimiento almacenado
    getClientsSp(pageNumber: number, pageSize: number): Observable<Client[]> {
        let params = new HttpParams()
            .set("pageNumber", pageNumber.toString())
            .set("pageSize", pageSize.toString());

        return this.http.get<Client[]>(`${this.apiUrl}Clients/clientspaged`, {
            params,
        });
    }
}
