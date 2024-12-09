import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ProfileModule } from './profile/profile.module';
import { BlogsModule } from './blogs/blogs.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tatvamasi',
    database: 'intern7',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), ProfileModule,BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
