const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');


jest.mock('../src/models/User.js', () => ({ create: jest.fn() }))
describe("User routes", () => {
    // it('should retrieve all users', async () => {
    //     const response = await request(app).get('/users');
    //     expect(response.statusCode).toBe(200);
    //     const parsedResponse = JSON.parse(response.text);
    //     // console.log(response)
    //     expect(parsedResponse[0].username).toBe('NayA');
    // })

    // extra (mock)
    it('should create a user', async () => {
        User.create.mockResolvedValue({
            'username': 'testNay',
            'email': 'nay@test.com',
            'password': '093g34n!G'
        });
        const response = await request(app).post('/users').send({
            'username': 'testNay',
            'email': 'nay@test.com',
            'password': '093g34n!G'
        });
        expect(response.statusCode).toBe(200);
        // console.log(response.text);
       
        expect(response.text).toBe('testNay');
        expect(User.create).toHaveBeenCalledWith({
            'username': 'testNay',
            'email': 'nay@test.com',
            'password': '093g34n!G'
        });
    })

    it("should return an error message if password isn't strong", async () => {
        const response = await request(app)
        .post('/users')
        .send({"username": "Oogabooga", "email": "oogabooga@email.com", "password": "testpwd"});
        
        expect(response.status).toBe(500);
        expect(response.text).toContain(
            "Password must contain at least one uppercase character and one special character."
        );
    })


})
