import express from 'express';
import { UserController } from './user.controller';
import { Container } from 'typedi';
const userRoute = express.Router()

const userController = Container.get(UserController);
userRoute.get('/', userController.getUser);
export { userRoute }