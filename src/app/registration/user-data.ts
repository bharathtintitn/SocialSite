import { InMemoryDbService }  from 'angular-in-memory-web-api';

import { Client } from './client';

export class UserData implements InMemoryDbService {
    createDb() {
        const users : Client[] = [
            {
                firstName: 'Bharath',
                lastName: 'Mylarappa',
                gender: 'Male',
                phoneNumber: '619-607-5327',
                email: 'herculesbharath@gmail.com',
                city: 'Bangalore',
                state: 'Karnataka',
                country: 'India'
            }
        ]
        return {users};
    }
}