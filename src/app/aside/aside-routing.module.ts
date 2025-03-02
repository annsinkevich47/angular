import { RouterModule, Routes } from "@angular/router";
import { AsideComponent } from "./aside.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  { path: 'anotherComponent', component: AsideComponent, outlet: 'asideComp' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AsideRoutingModule { }
