# Libreta

App de notas por días, pendientes, ideas y recordatorios. Es una web que se instala en el móvil como una app.

## Archivos (todos sueltos en la raíz del repo)

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera (diseño y código) |
| `manifest.json` | Nombre, colores e iconos para poder instalarla |
| `sw.js` | Hace que se pueda instalar y abrir sin conexión |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | El icono de la app |
| `README.md` | Estas instrucciones |

## Publicarla (desde el ordenador)

1. GitHub → **New repository** → nombre `libreta` → **Public** → **Create repository**.
2. **uploading an existing file** (o *Add file → Upload files*) → arrastra los 8 archivos, **no la carpeta** → **Commit changes**.
3. **Settings → Pages** → *Source: Deploy from a branch* → *Branch:* `main` y `/ (root)` → **Save**.
4. Espera 1-2 minutos. La app estará en **https://vcerdan21.github.io/libreta/**

## Instalarla en el móvil (Android)

1. Abre **https://vcerdan21.github.io/libreta/** en **Chrome** del móvil (no abras el archivo descargado: tiene que ser la dirección web).
2. Toca **Instalar** en la barra gris que sale arriba, o menú **⋮ → Instalar aplicación** (en algunos móviles pone *Añadir a pantalla de inicio*).
3. Aparecerá el icono rojo de Libreta en tu pantalla de inicio.

## Sincronizar móvil y ordenador (opcional)

Sin esto, las notas se guardan solo en el móvil donde la uses.

1. Crea otro repo: nombre `libreta-datos` → **Private** → marca **Add a README file** → Create.
2. GitHub → foto de perfil → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
   - *Repository access:* **Only select repositories** → `libreta-datos`
   - *Permissions → Repository permissions → Contents:* **Read and write**
   - Genera y **copia el token** (solo se ve una vez).
3. En la app: botón de ajustes (al lado de la lupa) → *Sincronizar con GitHub* → usuario `vcerdan21`, repo `libreta-datos`, pega el token → **Conectar y sincronizar**.
4. Repite el paso 3 en cada dispositivo. Nunca pongas el token en el repo `libreta`.

## Cómo se usa

- Toca una tarjeta del inicio para ampliarla.
- **Mantén pulsada** una nota para arrastrarla: a otro día, a Pendientes, a Ideas o para reordenarla.
- **Mantén pulsada** una tarjeta del inicio y suéltala sobre otra para cambiarlas de sitio.
- Recordatorios: en una nota de día pon una hora y activa *Avisarme a esa hora*. El aviso salta si la app está abierta o en segundo plano reciente; si el móvil la ha cerrado del todo, te llega al volver a abrirla.

## Actualizar la app más adelante

Sube el `index.html` nuevo y cambia en `sw.js` la línea `libreta-v1` por `libreta-v2` (y así cada vez). Tus notas no se borran.
