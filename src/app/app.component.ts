import { Component } from "@angular/core";
import { ClienteService } from "./core/services/client.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "app";

    constructor(private clienteService: ClienteService) {
        this.getClients();
        this.getClientsSp();
    }

    getClients(): void {
        this.clienteService.getClients(1, 10).subscribe(
            (clients) => {
                console.log("clients no sp ", clients);
            },
            (error) => {
                console.error("Error al obtener clientes:", error);
            }
        );
    }

    getClientsSp(): void {
        this.clienteService.getClientsSp(1, 10).subscribe(
            (clients) => {
                console.log("clientes sp ", clients);
            },
            (error) => {
                console.error(
                    "Error al obtener clientes usando procedimiento almacenado:",
                    error
                );
            }
        );
    }
}
