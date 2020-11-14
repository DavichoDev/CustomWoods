import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { IdeaComponent } from './idea/idea.component';

const routes: Routes = [
    { path: 'inicio', component: PagesComponent, data: { titulo: 'Inicio'} },
    { path: 'idea', component: IdeaComponent, data: { titulo: 'Idea'} },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}