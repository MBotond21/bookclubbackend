import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Post(':id/pay')
  pay(@Param('id') id: string) {
    return this.membersService.pay(+id);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

}
