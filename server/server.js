const fastify = require('fastify')({
    logger: true
});
import fastifyStatic from 'fastify-static';
import path from 'path';

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'dist')
})

fastify.get('/api', (req, res) => {
    res.send({ api: 'test'});
})

fastify.get('*', function( req, res) {
    res.sendFile(path.join('./', 'dist', 'index.html'))
})

fastify.listen(3000, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`Server Running at ${address}`);
})