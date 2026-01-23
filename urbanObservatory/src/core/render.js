const app =document.querySelector(".app");
export function render(view){


app.innerHTML =  `${view}
`;

}