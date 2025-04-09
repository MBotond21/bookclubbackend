import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MembersService {

  db: PrismaService;

  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createMemberDto: CreateMemberDto) {
    return this.db.members.create({
      data: {
        ...createMemberDto,
        birth_date: new Date(createMemberDto.birth_date)
      }
    });
  }

  findAll() {
    return this.db.members.findMany({
      select: {
        id: true,
        name: true,
        gender: true,
        birth_date: true,
        created_at: true
      }
    });
  }

  async pay(id: number) {

    const m = await this.db.members.findUnique({
      where: {id}
    });

    if(!m) throw new NotFoundException(`No member with #${id} found`)

    return await this.db.payments.create({
      data: {
        member_id: id,
        amount: 5000,
        paid_at: new Date()
      }
    })
  }
}
