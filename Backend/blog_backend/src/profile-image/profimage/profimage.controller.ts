import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/profImage.entity';

@Controller('profimage')
export class ProfimageController {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
      ) {}
    
      @Post()
      @UseInterceptors(
        FileInterceptor('file', {
          storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
              const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
              cb(null, `${randomName}${extname(file.originalname)}`);
            },
          }),
        }),
      )
      async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('regNo') regNo: string, // Accept registration number
      ) {
        const baseUrl = `http://localhost:3000`; // Adjust base URL for production
        const filePath = `${baseUrl}/uploads/${file.filename}`;
    
        // Save image metadata along with regNo
        const image = this.imageRepository.create({
          regNo,
          filename: file.filename,
          filepath: filePath,
        });
        await this.imageRepository.save(image);
    
        return { regNo, filename: image.filename, path: filePath };
      }
}
