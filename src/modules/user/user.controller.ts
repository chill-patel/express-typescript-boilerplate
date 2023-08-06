import { Request, Response } from "express";
import { Service } from 'typedi';
import { UserService } from "./user.service";

@Service()
class UserController {
    constructor(
        private userService: UserService
    ) { }
    getUser = (req: Request, res: Response) => {
        res.json({ user: this.userService.getUser() });
    }
}

export { UserController };