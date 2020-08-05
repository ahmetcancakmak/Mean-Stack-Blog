import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article';
import { BlogService } from 'src/app/services/blog.service';
import { Category } from '../category/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  articles: Article[];
  categories: Category[];
  filterText = ''

  ngOnInit() {
    this.getCategories()
    this.activatedRoute.params.subscribe(params=>{
      this.blogService.getArticles(params["categoryId"]).subscribe(data =>{
        this.articles = data
      })
    })
  }
  // getArticles(){
  //   this.blogService.getArticles().subscribe(data =>{
  //     this.articles = data
  //   })
  // }
  getCategories() {
    this.blogService.getCategories().subscribe(data => {
      this.categories = data
    })
  }
}
