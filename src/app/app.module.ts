import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { Page1Component } from "./shared/pages/page-1/page-1.component";
import { Page2Component } from "./shared/pages/page-2/page-2.component";
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

import { PhonePipe } from "./shared/pipes/client.pipe";

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        NotfoundComponent,
        PhonePipe,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
