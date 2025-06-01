import { Request, Response } from 'express';
import { logger } from '../../utils/Logger';
import ApiResponse from '../../utils/Response';

class TestService {
    async test(req: Request, res: Response): Promise<Response> {
        const user = { id: 1, name: 'John Doe', email: 'john@yopmail.com' };
        return ApiResponse.success(res, user, 'Test successful');
    }
}

export default new TestService();
