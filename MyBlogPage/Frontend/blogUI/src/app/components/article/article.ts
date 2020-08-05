import { Author } from '../author/author';
import { Category } from '../category/category';

export class Article {
    _id:string;
    title:string;
    content:string;
    author:Author;
    category:Category;
}