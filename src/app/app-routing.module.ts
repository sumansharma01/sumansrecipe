import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';

const routes: Routes = [
  {
    path:'',
    component:CarouselComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'recipe',
    component:RecipeComponent
  },
  {
    path:'recipe/:id',
    component:RecipeComponent
  },
  {
    path:'single-recipe/:id',
    component:SingleRecipeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
