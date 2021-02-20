import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {

  singleRecipeData:any;
  constructor(private recipes:RecipesService,private activatedRoute:ActivatedRoute) { }
  id:string=this.activatedRoute.snapshot.params.id;

  ngOnInit(): void {
    console.log("id=",this.id);
    this.recipes.findRecipeById(this.id).subscribe(data=>this.singleRecipeData=data);
    console.log(this.singleRecipeData);
  }

}
