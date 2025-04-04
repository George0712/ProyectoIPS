# ProyectoIPS Sistema de Gestión de Citas Médicas

Este es un proyecto frontend desarrollado en React que permite a los pacientes autenticarse, visualizar citas médicas disponibles, reservarlas, cancelarlas y ver sus reservas.

---

## 🚀 Tecnologías Utilizadas

- React
- Bootstrap 5
- JSON Server (Mock API)
- React Router DOM

---

## 📁 Estructura del Proyecto

├── public/
├── src/
│   ├── Api/                  # Base de datos simulada
│   ├── Assets/               # Imágenes y logos
│   ├── Components/           # Componentes reutilizables
│   ├── Pages/                # Páginas principales (Login, Citas)
│   ├── Routes/               # Rutas y navegación
│   ├── Services/             # Lógica de conexión con la API (citas, pacientes, etc.)
│   ├── Utils/                # formateador de fecha
│   ├── App.jsx
│   ├── main.jsx             
├── README.md
├── package.json

---

## 🛠️ Instalación del Proyecto

1. **Clonar el repositorio:**

```bash
git clone https://github.com/george0712/frontendIPS.git
cd frontendIPS
```
2. **Instalar dependecias:**
```bash
npm install
```
3. **Iniciar el servidor de la API:**
```bash
npx json-server --watch src/Api/db.json --port 5000
```
4. **Iniciar el proyecto:**
```bash
npm run dev
```

---

## 🔐 Acceso
Para acceder a las citas, los usuarios deben autenticarse con su documento y fecha de nacimiento.

---

## 🧪 Funcionalidades
- Autenticación del paciente con su documento de identidad y su fecha de nacimiento. 
- Visualización de citas cercanas en la semana disponibles por especialidad.
- Confirmación y cancelación de citas.
- Visualización de citas reservadas por el paciente.