import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from '@prisma/client';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() event: Event) {
    return this.eventsService.createEvent(event);
  }

  @Get()
  findAll() {
    return this.eventsService.events({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.event({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update: UpdateEventDto) {
    return this.eventsService.updateEvent({ where: { id: +id }, data: update });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.deleteEvent({ id: +id });
  }
}
