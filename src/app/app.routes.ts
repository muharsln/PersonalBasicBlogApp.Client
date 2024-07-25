import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BlogComponent } from './shared/components/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', component: PageNotFoundComponent }
];
