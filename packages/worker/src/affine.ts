import { linkPreview, linkPreviewOption } from '@affine/link-preview';
import { respNotFound } from '@affine/utils';
import { Router } from 'itty-router';

import type { Env, RouterHandler } from './types';

export function AFFiNEWorker(): RouterHandler {
	const router = Router();

	router.options('/api/linkPreview', linkPreviewOption);
	router.post('/api/linkPreview', linkPreview);

	router.get('/api/*', () => respNotFound());
	router.all('*', () => new Response('404, not found!', { status: 404 }));

	return (request: Request, env: Env, ctx: ExecutionContext) => {
		return router.handle(request, env, ctx);
	};
}