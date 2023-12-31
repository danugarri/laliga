# Prueba técnica React de LaLiga

- Versión de Node >= 14.18.0
- Versión de Yarn >= 1.22.18
- Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones

- [Instrucciones](client/src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### Estructura del proyecto

```text
|--carpeta-raiz
    |
    |--client
    |
    |--server
```

- En **client** es donde realizarás la prueba técnica solicitada.
- En **server** está incluida la API que debes consumir para tu desarrollo.
- <u>En server **no debes hacer ninguna modificación**</u>.
- <u>**Debes enviar la prueba respetando esta estructura. Has de incluir tanto `client` como `server`**</u>.
- <u>**No respetar esta estructura es motivo de DESCALIFICACIÓN AUTOMÁTICA**</u>.
  <br />
  <br />

## Instalación y ejecución de `server`

```bash
cd server
yarn && yarn start

```

> Por defecto el servidor local de back se despliega en http://localhost:4000

> Puedes consultar la API en http://localhost:4000/api-docs/

<br />
<br />

## Instalación y ejecución de `client`

```bash
cd client
yarn && yarn start
```

> Por defecto el servidor local de front se despliega en http://localhost:3000

  <br />
  <br />

## Memoria

**_ Puedes documentar aquí la memoria de tu prueba _**

**- Added the following dependencies:**

- react-router-dom
- redux react-redux redux @reduxjs/toolkit
- redux-saga @types/redux-saga
- @chakra-ui/icons

**- The Scaffolding for the client folder is as follows:**

```text
|--client
    |
    |--coverage ( exluded on .gitignore)
    |
    |--public
    |
    |--src
        |
        |--api
        |
        |--components
        |
        |--docs
        |
        |--hooks
        |
        |--sagas
        |
        |--store
```
