import request from 'supertest'

import app from '../index'

describe('Test /api/export', () => {
  let bookId = 'e90341e1-371a-4efb-b9a9-420cdac9e9d8'

  test('It should list exports of 0', async () => {
    const resp = await request(app).get('/api/export/list')
    expect(resp.status).toBe(200)
    expect(resp.body).toEqual({ data: {} })
  })

  test('It should fail rquest if params not provided correctly', async () => {
    const resp = await request(app)
      .post('/api/export/request')
      .send({ bookId: 'not-uuid', type: 'pdf' })
    expect(resp.status).toBe(400)

    const resp2 = await request(app).post('/api/export/request').send({ bookId, type: 'pdf' })
    expect(resp2.status).toBe(200)
    expect(resp2.body).toEqual({
      status: 'started',
    })

    const resp3 = await request(app).post('/api/export/request').send({ bookId, type: 'pdf' })
    expect(resp3.status).toBe(200)
    expect(resp3.body).toEqual({
      status: 'duplicate',
    })
  })

  test('It should list exports of 1 as pending then as finished', async () => {
    const resp = await request(app).get('/api/export/list')
    expect(resp.status).toBe(200)
    expect(resp.body).toMatchObject({
      data: {
        pending: [
          {
            bookId: 'e90341e1-371a-4efb-b9a9-420cdac9e9d8',
            operation: 'export',
            state: 'pending',
            type: 'pdf',
          },
        ],
      },
    })

    await new Promise((resolve) => setTimeout(resolve, 11000))

    const resp2 = await request(app).get('/api/export/list')
    expect(resp2.status).toBe(200)
    expect(resp2.body).toMatchObject({
      data: {
        pending: [
          {
            bookId: 'e90341e1-371a-4efb-b9a9-420cdac9e9d8',
            operation: 'export',
            state: 'pending',
            type: 'pdf',
          },
        ],
      },
    })
  })
})
