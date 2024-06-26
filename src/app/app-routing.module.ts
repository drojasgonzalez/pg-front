import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page1Component } from "./shared/pages/page-1/page-1.component";
import { Page2Component } from "./shared/pages/page-2/page-2.component";
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

const routes: Routes = [
    { path: "", component: Page1Component },
    { path: "sp", component: Page2Component },
    { path: "**", component: NotfoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
