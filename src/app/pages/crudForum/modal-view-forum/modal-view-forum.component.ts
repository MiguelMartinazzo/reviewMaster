import { Component } from '@angular/core';
import { CrudForumComponent } from '../crudForum.component';

@Component({
  selector: 'app-modal-view-forum',
  templateUrl: './modal-view-forum.component.html',
  styleUrl: './modal-view-forum.component.scss'
})
export class ModalViewForumComponent  {
  
  user = `Sidnei Goes`;
  jogo = 'God of War Ragnarok'
  conteudo = 'Acredito que depois de anos jogando o Game pode ser dito que este sem duvidas foi um dos jogos mais marcantes na minha vida. Uma grande gameplay com muita ação e mitologia, o que vocês acham?'
}
