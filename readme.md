# App del Festival Cultural de Zacatecas 2019

Aplicación oficial del Festival Cultural de Zacatecas.

## Instrucciones de instalación

```bash
# Clonar proyecto
git clone https://gitlab.com/porfirioads/fcz_2019

# Instalar dependencias
cd fcz_2019
npm install
```

## Comandos de Ionic

```bash
# Correr proyecto
ionic serve
ionic cordova run android -l

# Correr proyecto usando el environment.prod.ts
ionic serve --prod
ionic cordova run android --prod

# Generar recursos de splash e ícono
ionic cordova resources

# Generar servicio
ionic generate service services/eventos
```