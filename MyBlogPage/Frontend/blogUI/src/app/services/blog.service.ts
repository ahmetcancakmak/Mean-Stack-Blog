import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Article } from '../components/article/article';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../components/category/category';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  path = environment.path;


  getArticles(categoryId): Observable<Article[]> {
    var newPath = this.path + "/article/list/";
    if(categoryId){
      newPath += categoryId
    }
    return this.http.get<Article[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + "/category/list")
  }
}
