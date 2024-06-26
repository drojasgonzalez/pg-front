import { Component, OnInit } from "@angular/core";
import { ClienteService } from "./../../../core/services/client.service";

@Component({
    selector: "app-page-1",
    templateUrl: "./page-1.component.html",
    styleUrls: ["./page-1.component.scss"],
})
export class Page1Component implements OnInit {
    title = "app";
    clients: any[] = [];
    currentPage = 1; // Página inicial
    pages = Array.from({ length: 10 }, (_, i) => i + 1);

    constructor(private clienteService: ClienteService) {}
    ngOnInit(): void {
        this.getClients();
    }
    getClients(): void {
        this.clienteService.getClients(this.currentPage, 10).subscribe(
            (clients) => {
                this.clients = clients;
            },
            (error) => {
                console.error("Error al obtener clientes:", error);
            }
        );
    }

    prevPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.getClients();
        }
    }

    nextPage(): void {
        if (this.currentPage < this.pages.length) {
            this.currentPage++;
            this.getClients();
        }
    }

    changePage(page: number): void {
        this.currentPage = page;
        this.getClients();
    }
}
