import isOnProduction from './isOnProduction';

export let apiUrl: string = '';

export function setApiUrl() {
  apiUrl = !isOnProduction() ? 'http://localhost:8080' : 'http://localhost:0';
}
