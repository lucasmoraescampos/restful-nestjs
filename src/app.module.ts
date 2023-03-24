import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lucas:vkARz2J9yBj4mUfN@cluster0.codj9da.mongodb.net/?retryWrites=true&w=majority'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
