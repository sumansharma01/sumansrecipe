import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeData:any;
  constructor(private route:ActivatedRoute,private recipes:RecipesService,private router:Router) { }
  recipe=this.route.snapshot.params.id; 
  
  ngOnInit(): void {
    console.log("id="+this.recipe);
    this.recipes.getRecipesByName(this.recipe).subscribe(data=>this.recipeData=data);
    
  }
  findRecipeById(id:string){
    // this.recipes.findRecipeById(id.split("#")[1]);
    this.router.navigate(["/single-recipe",id.split("#")[1]]);
  }

}
