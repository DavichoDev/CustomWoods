import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './components/header/header.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PagesComponent,
    // Componentes
    HeaderComponent,
    PortafolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class PagesModule {}
