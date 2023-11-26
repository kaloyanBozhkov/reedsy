import request from 'supertest'

import app from '../index'

describe('Test /api/import', () => {
  let bookId = 'e90341e1-371a-4efb-b9a9-420cdac9e9d8'

  beforeAll(async () => {
    void (await request(app).get('/api/test/clear'))
  })

  test('It should list imports of 0', async () => {
    const resp = await request(app).get('/api/import/list')
    expect(resp.status).toBe(200)
    expect(resp.body).toEqual({ data: {} })
  })

  test('It should fail rquest if params not provided correctly', async () => {
    const resp = await request(app)
      .post('/api/import/request')
      .send({ bookId: 'not-uuid', type: 'pdf', url: 'some-url' })
    expect(resp.status).toBe(400)
    expect(resp.body.message).toContain('invalid_string')

    const resp2 = await request(app)
      .post('/api/import/request')
      .send({ bookId, type: 'pdf', url: 'some-url' })
    expect(resp2.status).toBe(200)
    expect(resp2.body).toEqual({
      status: 'started',
    })
  })
})
