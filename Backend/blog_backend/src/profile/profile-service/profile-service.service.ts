import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createProfile } from 'src/utils/types';
import { Profile } from '../entites/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDTO } from '../dto/createprofile.dto';

@Injectable()
export class ProfileServiceService {
    constructor(@InjectRepository(Profile) private profileRepo:Repository<Profile>){}

    async createProfile(dto:CreateProfileDTO){
      const ProfileExist= await this.profileRepo.findOne({ where: { regno: dto.regno } });
      if (ProfileExist)
        throw new BadRequestException('User already registered with email');
   
      const newProfile = this.profileRepo.create(dto)
      const Profile = this.profileRepo.save(newProfile)
      delete (await Profile).password
      return {message:"Profile created succsessfully", Profile}
    }
}
