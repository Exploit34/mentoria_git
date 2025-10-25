This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 🧑‍💻 Flujo de trabajo con Git

Objetivo
Practicar un flujo completo de colaboración en GitHub utilizando ramas, commits descriptivos y la herramienta **GitHub CLI (`gh`)**.

Ten en cuenta los siguientes pasos:

- Crear una nueva rama con el número de issue o nombre de tarea
  ```bash
    git checkout -b issue-3-endpoint-dinamico
  ```
- Resolver la tarea asignada
- Hacer commits descriptivos
- Subir la rama y abrir un Pull Request hacia main
- Hacer commits descriptivos (usa prefijos como feat:, fix:, style:, docs: o refactor:)
- actualizar las ramas de trabajo con main antes de hacer el PR

Criterios:
- El PR está bien descrito
- Deben de utilizar gh para crear el PR
- Los commits están limpios
- La rama contiene solo los cambios relacionados con su issue
- No hay archivos innecesarios modificados
- El PR fue revisado y aprobado por el mentor antes del merge.

## ⚙️ Configuración del entorno MongoDB

El proyecto usa **MongoDB** como base de datos.

Puedes levantarlo fácilmente con Docker:

```bash
    docker run -d \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=<user_root> \
    -e MONGO_INITDB_ROOT_PASSWORD=<your_password> \
    mongo:6.0
```

```bash
    use my_database;

    db.createUser({
    user: "mi_usuario",
    pwd: "mi_contraseña_segura",
    roles: [
        { role: "readWrite", db: "my_database" }
    ]
    });
```

`URL=mongodb://<user_root>:<your_password>@localhost:27017/my_database?authSource=<user_root>` Ingreso local
`URL=mongodb://<user>:<user_password>@localhost:27017/<database>` para aplicacion