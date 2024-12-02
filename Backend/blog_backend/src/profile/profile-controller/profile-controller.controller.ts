import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProfileDTO } from '../dto/createprofile.dto';
import { ProfileServiceService } from '../profile-service/profile-service.service';

@Controller('profile-controller')
export class ProfileControllerController {
   constructor(private profileservice:ProfileServiceService){}
    @Post('register')
    async createProfile(@Body() dto:CreateProfileDTO){
        const data= await this.profileservice.createProfile({...dto})
        return data
    }
  
    @Get()
    async getMany(){
        return this.profileservice.getMany()
    }

    @Get(':id')
    async GetOne(@Param('id') id:number){
      const data=await this.profileservice.getOne(id)
      return {data}
    }
}
