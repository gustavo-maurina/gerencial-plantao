import { isDevMode } from '@angular/core';

export default function isOnProduction(): boolean {
  return !isDevMode();
}
