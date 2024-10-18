import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  messages : Message[] = [{name: 'mdasad',text: 'hello world'}];
  clientTOUser ={}

  identify(name: string ,clientId: string){
    this.clientTOUser[clientId] = name;
    return Object.values(this.clientTOUser)
  }

  getClientName(clientId: string){
    return this.clientTOUser[clientId];
  }

  create(createMessageDto: CreateMessageDto, clientId: string) {
    const name = this.clientTOUser[clientId] || 'Unknown';
    const message = {
      name: name,
      text: createMessageDto.text
    };
    this.messages.push(message);
    return message;
  }
  findAll() {
    return this.messages;
  }

  
}
