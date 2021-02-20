import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  recipe:string="";
  constructor(private recipes:RecipesService,private router:Router) { }

  ngOnInit(): void {
  }
  recipeSearch(){
    console.log(this.recipe);    
    this.router.navigate(['/recipe/',this.recipe]);
    this.recipe="";
  }

}
