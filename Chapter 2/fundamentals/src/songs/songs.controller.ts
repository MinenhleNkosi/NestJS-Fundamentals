import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService, Song } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findASong() {
    return 'Song Received!!';
  }

  @Post()
  addASong(): Song[] {
    return this.songsService.create({
      title: 'Ulazi ',
      artist: 'Amaroto ',
    });
  }

  @Put(':id')
  changeASong() {
    return 'Song updated succesfully!!';
  }

  @Delete(':id')
  removeASong() {
    return 'Song removed succesfully!!';
  }
}
