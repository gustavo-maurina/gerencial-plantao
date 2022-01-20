import { isDevMode } from '@angular/core';

export default function isOnProduction() {
  return !isDevMode();
}
