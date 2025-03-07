# 📦 custom-hooks-react

🚀 Colección de hooks personalizados para React, diseñados para ser reutilizables en múltiples proyectos.

---

## 📁 Estructura del Repositorio

```
custom-hooks-react/
│── src/
│   ├── hooks/
│   │   ├── useSpeechStop.ts  # Hook personalizado
│   ├── index.ts  # Exportaciones de hooks
│── dist/  # Código compilado (no modificar manualmente)
│── package.json
│── tsconfig.json
│── vite.config.ts
│── README.md  # Documentación del repositorio
```

---

## 🛠 Desarrollo y Compilación

1️⃣ Clonar el repositorio

```sh
git clone https://github.com/Telefonica/custom-hooks-react.git
cd custom-hooks-react
```

2️⃣ Instalar dependencias

```sh
npm install
```

3️⃣ Compilar el código

```sh
npm run build
```

Este comando generará la carpeta dist/, que contiene el código compilado listo para ser usado en otros proyectos.

Si dist/ no aparece en GitHub, agrégala manualmente:

```sh
git add dist -f
git commit -m "Añadir carpeta dist con código compilado"
git push origin main
```

---

## 📌 Instalación

### **Opción 1: Instalar desde GitHub**
Si deseas instalar este paquete directamente desde GitHub, ejecuta:

```sh
npm install git+https://github.com/Telefonica/custom-hooks-react.git
```

Esto agregará la dependencia en package.json:

```json
"dependencies": {
  "custom-hooks-react": "github:Telefonica/custom-hooks-react"
}
```

### **Opción 2: Usarlo Localmente con `npm link`**
Si estás desarrollando y quieres probar cambios sin hacer commits en GitHub:

1. En la carpeta del repositorio de hooks, ejecuta:
   ```sh
   npm link
   ```
2. En el otro proyecto donde lo usarás:
   ```sh
   npm link custom-hooks-react
   ```

Esto enlazará tu paquete y permitirá que lo uses localmente sin necesidad de instalarlo desde GitHub.

---

## 🔄 Actualización del Repositorio y Control de Versiones

### **📌 Actualizar el Repositorio en Otros Proyectos**
Si ya tienes `custom-hooks-react` instalado y quieres actualizarlo:

```sh
npm update custom-hooks-react
```

O bien, puedes forzar la reinstalación con:

```sh
npm uninstall custom-hooks-react
npm install git+https://github.com/Telefonica/custom-hooks-react.git
```

Si el paquete está publicado en **npm**, actualízalo con:

```sh
npm install custom-hooks-react@latest
```

### **📌 Subir una Nueva Versión del Repositorio**

#### **1️⃣ Incrementar la Versión en `package.json`**
Usa el siguiente comando para seguir la convención **SemVer** (`MAJOR.MINOR.PATCH`):

```sh
# Para una actualización menor (MINOR)
npm version minor

# Para una corrección de errores (PATCH)
npm version patch

# Para una versión mayor (BREAKING CHANGES)
npm version major
```

Esto actualizará la versión en `package.json` y generará un commit con el cambio.

#### **2️⃣ Compilar el Código y Subirlo**
```sh
npm run build
git add .
git commit -m "🔄 Nueva versión X.X.X: descripción del cambio"
git push origin main  # O la rama que uses
```

Si lo has publicado en **npm**, sube la nueva versión con:

```sh
npm publish --access public
```

#### **3️⃣ Crear un Tag en GitHub (Opcional)**
```sh
git tag vX.X.X
git push origin vX.X.X
```

---

## 🚀 Uso en Otros Repositorios

Una vez instalado, puedes importar y usar los hooks de la siguiente manera:

### **Ejemplo en `App.tsx` de otro proyecto**
```tsx
import { useSpeechStop } from "custom-hooks-react";

const App = () => {
    const stopSpeech = () => console.log("Locución detenida");

    useSpeechStop(stopSpeech);

    return (
        <div>
            <h1>Ejemplo de Hook Personalizado</h1>
            <p>Prueba cambiando de pestaña.</p>
        </div>
    );
};

export default App;
```

---

## ✅ Buenas Prácticas para Mantener el Repositorio
✔ **Siempre compila (`npm run build`) antes de subir cambios.**<br>
✔ **No olvides subir la carpeta `dist/` al repositorio.**<br>
✔ **Sigue SemVer para mantener control de versiones.**<br>
✔ **Usa `CHANGELOG.md` para documentar cambios importantes.**<br>
✔ **Crea ramas para nuevas funcionalidades antes de fusionarlas a `main`.**

---

### 🎯 ¡Listo para usar! 🚀
Con estos pasos, puedes mantener `custom-hooks-react` actualizado y bien estructurado para cualquier proyecto.
