export const store = {
  currentUser: null, // Estado inicial: nadie logueado
  // Simulamos una base de datos de usuarios permitidos
  users: [
    { email: "admin@govtech.com", password: "123", name: "Admin" },
    { email: "user@govtech.com", password: "abc", name: "Usuario" }
  ],
  projects: []
};