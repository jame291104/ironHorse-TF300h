import { Component } from '@angular/core';
import { TiptapComponent } from '../../../componentes/tiptap/tiptap.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [TiptapComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

}
