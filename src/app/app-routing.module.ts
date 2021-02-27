import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridThumbnailComponent } from './components/grid-thumbnail/grid-thumbnail.component';
import { DiscoverMovieComponent } from './pages/discover-movie/discover-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'discovery', pathMatch: 'full' },
  { path: 'discovery', component: DiscoverMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
