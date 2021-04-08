// Liste 5 objetos nativos
Object
Array
String
Number
Boolean

// Liste 5 objetos do browser
HTMLCollection
NodeList
Element
Document
Window

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}

if (typeof document.webkitVisibilityState !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}