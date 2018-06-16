import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  displayedColumns = ['id', 'title', 'description', 'available', 'action'];
  articles:Article[];
  article = new Article();

  constructor(private http: Http) {
    this.articles = ELEMENT_DATA;
    this.list();
  }

  list() {
    return this.articles;
  }

  add() {
    let newArticle = new Article();
    newArticle.id = Math.floor(Math.random() * 10001);
    newArticle.description = this.article.description;
    newArticle.title = this.article.title;
    newArticle.available = this.article.available;
    this.articles.push( newArticle );
  }

  delete(articleId) {
    this.articles = this.articles.filter(e => e.id != articleId);
  }

}

export class Article {
  constructor() { 
    this.available = false
  }
  id: number;
  title: string;
  description: string;
  available: boolean;
}

let ELEMENT_DATA: Article[] = [
  { id: 1, title: 'Table de séjour', description: 'Table à manger de 8 places 180x90', available: true},
  { id: 2, title: 'Chaise', description: 'Chaise avec dossier blanc en velour', available: true},
  { id: 3, title: 'Canapé', description: 'Canapé en cuir 3 places', available: true},
  { id: 4, title: 'Coffret de couverts', description: 'Lot de couverts pour 10 personnes', available: true}
];