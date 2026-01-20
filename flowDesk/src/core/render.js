const app=document.querySelector('.app');

export function render(view){
    app.innerHTML = `
    <main>
        ${view}
    </main>`;
}