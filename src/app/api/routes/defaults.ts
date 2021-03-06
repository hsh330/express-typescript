import * as express from 'express';
import controller from '../controllers/defaults';

export default express
    .Router()
    .post('/', controller.create)
    .get('/', controller.all)
    .get('/:id', controller.one);
