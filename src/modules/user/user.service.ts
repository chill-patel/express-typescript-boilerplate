import { Service } from 'typedi';

@Service()
class UserService {
    getUser() {
        console.log('Get user called')
        return '123456';
    }
}

export { UserService };