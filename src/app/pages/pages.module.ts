import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './components/header/header.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { IdeaComponent } from './idea/idea.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagesComponent,
    // Componentes
    HeaderComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    IdeaComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class PagesModule {}
