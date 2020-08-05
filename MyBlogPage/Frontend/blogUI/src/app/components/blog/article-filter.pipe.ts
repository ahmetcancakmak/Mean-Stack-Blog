import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../article/article';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(value: Article[], filterText?: string): Article[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((a:Article)=>a.title.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
