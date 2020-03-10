const assert = require('assert')
const request = require('../request')

describe('request', () => {
    it('send get request', async () => {
        var res = await request.getContent('https://google.com')
        assert.notEqual(res.data, undefined, "data is undefined")
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 200)
    })

    it('send get request to fantasy addres', async () => {
        var res = await request.getContent('https://www.google.com/prova2542245442255225')
        assert.notEqual(res.data, undefined)
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 404)
    })

    it('get json', async () => {
        var res = await request.getContent('https://jsonplaceholder.typicode.com/posts/1')
        assert.notEqual(res.data, undefined)
        assert.notEqual(res.data.body, undefined)
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 200)
    })

    it('post json', async () => {
        var res = await request.getContent('http://dummy.restapiexample.com/api/v1/create', 'POST', {
            "Content-type": "application/json; charset=UTF-8"
        }, {
            name: "foo",
            salary: "bar",
            age: 12
        })
        assert.notEqual(res.data, undefined)
        assert.notEqual(res.data.data.name, undefined)
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 200)
    })

    it('put json', async () => {
        var res = await request.getContent('http://dummy.restapiexample.com/api/v1/update/21', 'PUT', {
            "Content-type": "application/json; charset=UTF-8"
        }, {
            name: "foo",
            salary: "bar",
            age: 15
        })
        assert.notEqual(res.data, undefined)
        assert.equal(res.data.data, null)
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 200)
    })

    it('delete json', async () => {
        var res = await request.getContent('http://dummy.restapiexample.com/api/v1/delete/2', 'DELETE')
        assert.notEqual(res.data, undefined)
        assert.equal(res.data.data, null)
        assert.notEqual(res.headers, undefined)
        assert.equal(res.code, 200)
    })

    it('getSize', async () => {
        var res = await request.getSize('https://jsonplaceholder.typicode.com/posts/1')
        assert.equal(res, "292")
    })
})
