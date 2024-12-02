import { Body, Controller, Post } from '@nestjs/common';
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

}
