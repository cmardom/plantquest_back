# Proyecto PlantQuest

Este proyecto es una aplicación web que utiliza **Angular** para el frontend y **Spring Boot** para el backend. Esta aplicación permite a los usuarios gestionar colecciones de plantas de forma sencilla y eficiente.

## Requisitos previos

Para ejecutar esta aplicación en tu máquina local, asegúrate de tener instalados los siguientes programas:

- **JDK 11 o superior** (para Spring Boot)
- **Node.js y npm** (para Angular)
- **Maven** (para compilar el backend de Spring Boot)

## Pasos para ejecutar el proyecto

### 1. Configuración del Backend (Spring Boot)

1. **Clona el repositorio** desde GitHub:

   ```bash
   git clone https://github.com/cmardom/plantquest_back
2. **Accede al directorio del backend**:
    ```bash
   cd ./src/main/java


3. **Configura las dependencias** si no las tuvieras:
    ```bash
    mvn clean install


4. **Configura la base de datos** en src/main/resources/application.properties:
    ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/plantquest_back?createDatabaseIfNotExist=true
    spring.datasource.username=tu usuario
    spring.datasource.password=tu contraseña

5. **Lanza el backend** desde src/main/java/PlantquestApplication o desde el botón de incio de tu IDE.
6. **Carga los datos** ejecutando el archivo *inserts* en src/main/resources/inserts en una consola de base de datos.



### 2. Configuración del Frontend (Angular)

1. **Accede al directorio** del proyecto del frontend:

   ```bash
   cd ./src/main/angular/app-front

2. **Instala las depedencias:** 

   ```bash
   npm install

3. **Inicia la aplicación:**

   ```bash
   ng serve -o

4. **Accede al frontend** ahora alimentado con los datos del back:
    ```bash
    http://localhost:4200
