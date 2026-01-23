export function headerComponent() {
return `
    <header class="header">
        <div class="header-content">
            <div class="header-brand">
                <h1 class="header-title">Observatorio Urbano y Ambiental</h1>
                <p class="header-subtitle">Gestión de proyectos climáticos</p>
            </div>
            <nav class="header-nav">
                <a href="#/dashboard">Dashboard</a>
                <a href="#/new-project">Nuevo Proyecto</a>
                <a href="#/login">Salir</a>
            </nav>
        </div>
    </header>
    `;
}
