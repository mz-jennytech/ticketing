import request from 'supertest';
import { app } from '../../app';

// Create a helper function to create a ticket and return the response
// from the API.
const createTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'concert',
      price: 20
    });
};
it('can fetch a list of tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200);
  
  expect(response.body.length).toEqual(3);
});
