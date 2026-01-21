import {fetchProjects} from  '../services/proctsServices.js';
import { store } from '../state/store.js';

export async function projects() {
    if (store.projects.length===0){
        store.loading=true;
    }

    try{
        store.projects = await fetchProjects();
        store.error =null;
    }
    catch(err){
        store.error = err.message;
    }
    finally{
        store.loading=false;
    }


if (store.loading) return `<p>Cargando proyectos ...</p>`;
if(store.error)return `<p>Error ${store.error}</p>`;

return `
<h2>Proyectos</h2>
<ul>
    ${store.projects.map(item => `<li>${item.title}</li>`).join('')}
</ul>
  <a href="#/dashboard">⬅ Volver</a>
`;
}