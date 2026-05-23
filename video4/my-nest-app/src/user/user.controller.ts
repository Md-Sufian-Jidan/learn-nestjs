import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator to define the route prefix for this controller
export class UserController {
    @Get()
    getUser(){
        return "Fetched all users data successfully! ";
    }
}
