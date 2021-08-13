import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { ProdutosComponent } from "./institucional/produtos/produtos.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRouterConfig: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'feature-data-binding', component: DataBindingComponent},

]