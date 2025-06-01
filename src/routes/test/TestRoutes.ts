import { RequestHandler, Router } from 'express';
import TestService from './TestService';

const router = Router();

router.get('/', TestService.test as unknown as RequestHandler);

export { router };
