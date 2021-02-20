import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) { }

  getRecipesByName(recipe:string){
    return this.http.get(`https://api.edamam.com/search?app_id=d69aef17&app_key=a9b2d97740de580e4d4ebbd12929874b&q=${recipe}`);
  }

  findRecipeById(id:string){
    return this.http.get(`https://api.edamam.com/search?app_id=d69aef17&app_key=a9b2d97740de580e4d4ebbd12929874b&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${id}`);
  }
}
