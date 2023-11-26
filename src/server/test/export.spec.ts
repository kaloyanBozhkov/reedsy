import request from 'supertest'

import app from '../index'

describe('Test /api/export', () => {
  let bookId = 'e90341e1-371a-4efb-b9a9-420cdac9e9d8'

  beforeAll(async () => {
    void (await request(app).get('/api/test/clear'))
  })

  test('It should list exports of 0', async () => {
    const resp = await request(app).get('/api/export/list')
    expect(resp.status).toBe(200)
    expect(resp.body).toEqual({ data: {} })
  })

  test('It should fail rquest if params not provided correctly', async () => {
    const resp = await request(app)
      .post('/api/export/request')
      .send({ bookId: 'not-uuid', type: 'epub' })
    expect(resp.status).toBe(400)

    const resp2 = await request(app).post('/api/export/request').send({ bookId, type: 'epub' })
    expect(resp2.status).toBe(200)
    expect(resp2.body).toEqual({
      status: 'started',
    })

    const resp3 = await request(app).post('/api/export/request').send({ bookId, type: 'epub' })
    expect(resp3.status).toBe(200)
    expect(resp3.body).toEqual({
      status: 'duplicate',
    })
  })

  test('It should list exports of 1 as pending', async () => {
    const resp = await request(app).get('/api/export/list')
    expect(resp.status).toBe(200)
    expect(resp.body).toMatchObject({
      data: {
        pending: [
          {
            bookId,
            operation: 'export',
            state: 'pending',
            type: 'epub',
          },
        ],
      },
    })
  })

  test(
    'It should list export of book as finished after 10s',
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 10 * 1000))
      const resp = await request(app).get('/api/export/list')
      expect(resp.status).toBe(200)
      expect(resp.body).toMatchObject({
        data: {
          finished: [
            {
              bookId,
              operation: 'export',
              state: 'finished',
              type: 'epub',
            },
          ],
        },
      })
    },
    11 * 1000
  )
})
