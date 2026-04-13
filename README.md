# ITSA Segurity Portfolio

SPA estática en Blazor WebAssembly con diseño oscuro, componentes Razor reutilizables, validación con DataAnnotations y despliegue preparado para GitHub Pages.

## Crear y ejecutar

```bash
dotnet restore
dotnet run
```

## Publicar

```bash
dotnet publish -c Release
```

La salida queda en:

```text
bin/Release/net8.0/publish/wwwroot
```

## GitHub Pages

Antes de desplegar en un repositorio de proyecto, cambia en `wwwroot/index.html`:

```html
<base href="/" />
```

por algo como:

```html
<base href="/NOMBRE-REPOSITORIO/" />
```

Ejemplo:

```html
<base href="/ITSA-Segurity/" />
```

## Personalización

Edita `Models/PortfolioData.cs` para cambiar textos, proyectos, enlaces e imágenes sin tocar los componentes.
