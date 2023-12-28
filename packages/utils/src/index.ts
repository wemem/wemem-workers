export { respOk, respNoContent, respBadRequest, respNotFound, respMethodNotAllowed } from './response';
export { DomainRouterBuilder, domainRoutersHandler } from './router';
export type { RouterHandler } from './types';

export function log(message: string | object, level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', data: object) {
	console.log(JSON.stringify({ timestamp: new Date().toISOString(), level, message, ...data }));
}
