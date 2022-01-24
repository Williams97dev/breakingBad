import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      //params.idcharacter es el dato que recibo de la ruta.
      const result = await this.charactersService.getById(
        Number(params.idcharacter)
      );
      this.character = result[0];
    });
  }
}
