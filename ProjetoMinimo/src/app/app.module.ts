import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UmcomponenteComponent } from './umcomponente/umcomponente.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { TesteComponent } from './navegacao/teste/teste.component';
import { rootRouterConfig } from './app.routes';
import { ProdutosComponent } from './institucional/produtos/produtos.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [
    AppComponent,
    UmcomponenteComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    TesteComponent,
    ProdutosComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  exports: [
    TesteComponent
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
