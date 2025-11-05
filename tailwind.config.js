
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./*.html",       // HTML in root
    "./**/*.html",    // HTML in subfolders
    "./src/**/*.js",  // JS in your source folder
    "./js/**/*.js"    // or JS in a 'js' folder if you don't have src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


