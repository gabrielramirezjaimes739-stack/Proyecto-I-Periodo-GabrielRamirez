============================================================
  HelloContact - Gestor de Contactos (Etapa 3)
  Estudiante: Gabriel Ramirez
  Profesora: Sofía Rodríguez Vargas
============================================================

1. Descripción del Proyecto
---------------------------
HelloContact es una aplicación web hecha con Flask para administrar una lista de contactos. Toda la información se guarda de manera persistente en un archivo de Excel (contactos.xlsx), por lo que el sistema no necesita una base de datos externa. 

El proyecto incluye el inicio de sesión protegido, la lista de contactos, buscador, formularios para agregar/editar, eliminación con ventanas de confirmación, reportes con gráficos y la opción de descargar el Excel real.

2. Tecnologías Utilizadas
-------------------------
- Python 3
- Flask (Servidor y rutas)
- openpyxl (Para leer, escribir y dar formato al archivo Excel)
- HTML5, CSS3 y JavaScript nativo (Para la interfaz y validaciones)
- Chart.js (Para los gráficos del reporte)

3. Instalación de Dependencias
------------------------------
Before running the project, install Flask and openpyxl by running:

    pip install flask openpyxl

4. Cómo Ejecutar la Aplicación
------------------------------
1. Abra la terminal en la carpeta del proyecto (donde está app.py).
2. Ejecute el comando:
   
    python app.py

3. Ingrese en el navegador a la dirección: 
   
    http://127.0.0.1:5000

5. Credenciales de Acceso
-------------------------
Para ingresar al sistema, use los siguientes datos de prueba:
- Usuario: admin
- Contraseña: 1234

6. Estructura del proyecto
--------------------------
nombre_apellido/
├── app.py                  Aplicación principal Flask (Lógica de negocio y backend)
├── contactos.xlsx          Archivo Excel que actúa como base de datos persistente
├── README.txt              Documentación técnica del proyecto (Este archivo)
├── static/
│   ├── css/
│   │   └── styles.css      Estilos visuales unificados e interfaz adaptativa
│   └── js/
│       └── app.js          Validaciones de cliente, control de modales y filtros en vivo
└── templates/
    ├── base.html           Plantilla maestra estructural (Navbar unificada y alertas flash)
    ├── login.html          Pantalla de acceso controlado
    ├── registro.html       Pantalla visual de registro (Simulación interactiva para la demo)
    ├── contactos.html      Panel principal con la tabla y contador de contactos
    ├── agregar.html        Formulario de creación con preservación de estado de campos
    ├── buscar.html         Filtro explícito por GET con persistencia de texto buscado
    ├── detalle.html        Ficha técnica individual del contacto con iniciales automáticas
    ├── editar.html         Formulario de actualización acoplado a modales de confirmación
    └── reporte.html        Módulo analítico interactivo potenciado con Chart.js

7. Detalles Técnicos Clave y Documentación
------------------------------------------
- Documentación del Código: Siguiendo los indicadores de la rúbrica, todo el archivo "app.py" se encuentra debidamente estructurado y comentado línea por línea, explicando las funciones de openpyxl, los decoradores de sesión y los bloques de validación.
- Validaciones: El campo de teléfono solo acepta números y se limita estrictamente a 8 dígitos en la web y en el servidor. El correo se valida con formato estándar.
- Recuperación de campos: Si se comete un error al agregar un contacto, el formulario no se borra; mantiene lo que el usuario ya había escrito.
- Seguridad de Rutas: No se puede entrar a los contactos ni a los reportes escribiendo la URL a la fuerza si no se ha iniciado sesión.
- Control del Menú: La barra de navegación superior solo aparece si el usuario está logueado. En el Login y Registro se mantiene oculta.
- Formato del Excel: Al crearse el archivo, la primera fila se pinta automáticamente de color azul oscuro con texto en blanco y negrita. Además, las columnas se autoajustan solas según el texto más largo para que no se vean apretadas.

============================================================
