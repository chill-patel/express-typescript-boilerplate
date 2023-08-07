import { Service } from 'typedi';

@Service()
class UserService {
    getUser() {
        return 'Sunil Patel';
    }
}

export { UserService };