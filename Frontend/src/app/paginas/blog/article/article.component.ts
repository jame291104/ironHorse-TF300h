import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../../componentes/nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../interfaces/publicacion';
import { PublicacionService } from '../../../services/publicacion.service';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  
  constructor(private route: ActivatedRoute) {}

  _publicacionService = inject(PublicacionService);


  route_param: string | null = "";
  id: string = "";

  publicacion : Post = {
    _id: '',
    title: '',
    content: '',
    author: '',
    category: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  getPostById(){

    this._publicacionService.getPublicacionById(this.id).subscribe({
      next: (res: any) => {
        // Si funciona
        this.publicacion = res
        console.log("RES", res);
        
      },
      error: (error: any) => {
        //Si no funciona
        console.log(error);
        
      }
    })

  }
  
  getIdFromUrl() {
     this.route.paramMap.subscribe(params => {

      this.route_param = params.get('id')
      this.id =  this.route_param ? this.route_param : "";

      console.log("ID", this.id);
      
      if (this.id) {
        this.getPostById()
      } else {
        return alert("No se proporcionó un id")
      }
      
    });
  }

  ngOnInit() {
    this.getIdFromUrl()
  }
}
