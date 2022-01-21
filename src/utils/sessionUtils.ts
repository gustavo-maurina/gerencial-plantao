export function hasValidSession(): boolean {
  const sessionStatus: string | null = localStorage.getItem('session');
  return Boolean(parseInt(sessionStatus as string));
}

export function setNewSession(value: boolean): void {
  localStorage.setItem('session', value ? '1' : '0');
}
