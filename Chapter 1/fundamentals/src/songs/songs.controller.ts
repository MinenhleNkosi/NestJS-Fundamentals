import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'Find All Songs!!';
  }

  @Get(':id')
  findASong() {
    return 'Song Received!!';
  }

  @Post()
  addASong() {
    return 'Song added succesfully!!';
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
