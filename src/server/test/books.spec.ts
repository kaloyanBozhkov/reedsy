import request from 'supertest'

import app from '../index'

describe('Test /api/books', () => {
  let bookId = ''

  test('It should get 5 books', async () => {
    const resp = await request(app).get('/api/books/get-all?skip=0&take=5')
    expect(resp.status).toBe(200)
    expect(resp.body.json.data.length).toBe(5)
    expect(resp.body.json.total).toBe(575)
    bookId = resp.body.json.data[0].id
  })

  test('It should get 2 books', async () => {
    const resp = await request(app).get('/api/books/get-all?skip=0&take=2')
    expect(resp.status).toBe(200)
    expect(resp.body.json.data.length).toBe(2)
  })

  test('It should get 2 books, having skipped 1', async () => {
    const resp = await request(app).get('/api/books/get-all?skip=1&take=2')
    expect(resp.status).toBe(200)
    expect(resp.body.json.data.length).toBe(2)
    const thirdBookId = resp.body.json.data[1].id
    const resp2 = await request(app).get('/api/books/get-all?skip=0&take=3')
    expect(resp2.status).toBe(200)
    expect(resp2.body.json.data.length).toBe(3)
    expect(thirdBookId).toEqual(resp2.body.json.data[2].id)
  })

  test('It should get book details', async () => {
    const resp = await request(app).get(`/api/books/info?id=${bookId}`)
    expect(resp.status).toBe(200)
    expect(resp.body.json).toHaveProperty('summary')
    expect(resp.body.json).toHaveProperty('author')
    expect(resp.body.json).toHaveProperty('title')
  })
})
