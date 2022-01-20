export default function hasValidSession() {
  const session = localStorage.getItem('session');
  return Boolean(session);
}
