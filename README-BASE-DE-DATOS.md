# Base de datos (Firebase) — guía de configuración

El sitio ahora guarda automáticamente el resultado de cada persona que hace el
test (nombre, fecha y áreas afines) en una base de datos en la nube gratuita
(Firebase Firestore), y `admin.html` te deja verlos en una tabla con login
protegido.

Nada de esto anda todavía porque falta crear el proyecto de Firebase — eso
requiere tu cuenta de Google, así que lo tenés que hacer vos. Son ~10 minutos,
paso a paso:

## 1. Crear el proyecto

1. Entrá a **https://console.firebase.google.com** con tu cuenta de Google.
2. **Agregar proyecto** → ponele un nombre (ej. `bitacora-vocacional`) → seguí
   los pasos (podés desactivar Google Analytics, no hace falta).

## 2. Crear la base de datos (Firestore)

1. En el menú izquierdo: **Compilación → Firestore Database**.
2. **Crear base de datos** → elegí una ubicación cercana (ej. `southamerica-east1`)
   → modo **producción**.
3. Andá a la pestaña **Reglas** y reemplazá todo el contenido por esto:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /resultados/{doc} {
      allow create: if request.resource.data.keys().hasAll(['fecha', 'top'])
                    && request.resource.data.top is list;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

Esto deja que cualquiera que haga el test **guarde** su resultado, pero solo
alguien logueado (vos) puede **leer/listar** los resultados. Click en
**Publicar**.

## 3. Activar el login del panel (Authentication)

1. Menú izquierdo: **Compilación → Authentication → Comenzar**.
2. En **Proveedores de acceso**, activá **Correo electrónico/contraseña**.
3. Pestaña **Users** → **Agregar usuario** → poné tu email y una contraseña.
   Ese va a ser tu usuario para entrar a `admin.html`.

## 4. Conectar tu sitio con Firebase

1. En **Configuración del proyecto** (ícono de engranaje, arriba a la izquierda)
   → pestaña **General** → bajá hasta "Tus apps" → click en **`</>`** (Web).
2. Ponele un apodo (ej. `sitio`) → **Registrar app**. NO hace falta Firebase
   Hosting, solo el registro.
3. Te va a mostrar un bloque `firebaseConfig = { apiKey: "...", ... }`.
   Copiá esos valores y pegalos en **`js/firebase-config.js`**, reemplazando
   cada `"TU_..."`.

Estos valores **no son secretos** — Firebase los protege con las Reglas del
paso 2, no ocultándolos. Está bien que queden en el código público del repo.

## 5. Probar

1. Subí los cambios a GitHub (`git add . && git commit -m "Agregar base de datos" && git push`).
2. Entrá a tu sitio y hacé el test completo.
3. Andá a `tusitio.github.io/.../admin.html`, iniciá sesión con el usuario
   que creaste en el paso 3, y deberías ver esa respuesta en la tabla.

## Qué se guarda (y qué no)

- ✅ Nombre (si lo puso), fecha y hora, y las 11 áreas con su % de afinidad.
- ❌ No se guarda el detalle de qué opción marcó en cada una de las 22
  preguntas — solo el resultado final agregado.

## Límite importante

Esto funciona en tu sitio de **GitHub Pages**. El link del Artifact de Claude
(el que empieza con `claude.ai/code/artifact/...`) es un archivo aparte y
**no** va a guardar resultados en esta base de datos — Claude bloquea la
carga de scripts externos como el de Firebase en ese entorno. Si vas a usar
el test con estudiantes, compartí el link de GitHub Pages, no el de Claude.
