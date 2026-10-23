// Service worker antiguo de Libreta: la app vive ahora en /app/.
// Este se borra a sí mismo y borra su copia vieja para no estorbar.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('libreta-v')).map(k => caches.delete(k)));
    await self.registration.unregister();
    const list = await self.clients.matchAll({ type: 'window' });
    list.forEach(c => c.navigate(c.url));
  })());
});
