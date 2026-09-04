# Base de datos (Firebase) — guía de configuración

El sitio guarda automáticamente el resultado de cada persona que hace el test
(nombre, fecha, áreas afines y una copia del PDF) en Firebase, y `admin.html`
te deja verlos en una tabla con login protegido.

Ya hiciste los pasos 1 a 4 (tu proyecto se llama `tes-vocacional` y ya está
conectado). Esta guía queda completa por si alguna vez necesitás repetir el
proceso — por ejemplo en un proyecto nuevo. Lo único pendiente es el **paso 5
(Storage)**, para que los PDF también se guarden.

## 1. Crear el proyecto

1. Entrá a **https://console.firebase.google.com** con tu cuenta de Google.
2. **Agregar proyecto** → ponele un nombre → seguí los pasos (podés
   desactivar Google Analytics, no hace falta).

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

Esto deja que cualquiera que haga el test **guarde** su resultado y que el
propio sitio pueda **actualizar** ese resultado una sola vez (para agregar el
link del PDF una vez que termina de subirse). Solo alguien logueado (vos)
puede **leer/listar** los resultados. Click en **Publicar**.

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

## 5. Activar Storage (para guardar también los PDF) — pendiente

Cada vez que alguien termina el test, el sitio genera su PDF de resultado en
segundo plano y lo sube acá, guardando el link en Firestore para que te
aparezca el botón **"Ver PDF"** en el panel.

1. Menú izquierdo: **Compilación → Storage → Comenzar**.
2. Elegí modo **producción** → la misma ubicación que usaste en Firestore →
   **Listo**.
3. Andá a la pestaña **Rules** de Storage y reemplazá todo por esto:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resultados-pdf/{archivo} {
      allow write: if request.resource.size < 15 * 1024 * 1024
                   && request.resource.contentType == 'application/pdf';
      allow read: if request.auth != null;
    }
  }
}
```

Esto deja que el sitio suba el PDF de cualquiera que termine el test (con un
límite de 15 MB, de sobra para esto), y que solo alguien logueado pueda
listar o inspeccionar los archivos desde la consola de Firebase.

Un detalle a tener en cuenta: el link "Ver PDF" que ves en el panel es un
link con un código largo y único (así funciona Firebase) — cualquiera que
tenga ese link exacto puede abrir ese PDF puntual sin necesitar loguearse,
aunque nadie puede adivinarlo ni ver la lista completa sin tu usuario. Es el
mismo modelo que un link "para cualquiera que lo tenga" de Google Drive.

4. Click en **Publicar** y listo — no hace falta tocar nada más del código,
   ya está todo preparado para usarlo apenas actives esto.

## 6. Probar

1. Subí los cambios a GitHub (`git add . && git commit -m "..." && git push`).
2. Entrá a tu sitio y hacé el test completo.
3. Andá a `tusitio.github.io/.../admin.html`, iniciá sesión, y deberías ver
   esa respuesta en la tabla con un link **"Ver PDF"** (puede tardar unos
   segundos en aparecer mientras se termina de subir).

## Qué se guarda (y qué no)

- ✅ Nombre (si lo puso), fecha y hora, las 11 áreas con su % de afinidad, y
  una copia del PDF de resultado.
- ❌ No se guarda el detalle de qué opción marcó en cada una de las 50
  preguntas — solo el resultado final agregado.

## Límite importante

Esto funciona en tu sitio de **GitHub Pages**. El link del Artifact de Claude
(el que empieza con `claude.ai/code/artifact/...`) es un archivo aparte y
**no** va a guardar resultados en esta base de datos — Claude bloquea la
carga de scripts externos como el de Firebase en ese entorno. Si vas a usar
el test con estudiantes, compartí el link de GitHub Pages, no el de Claude.
