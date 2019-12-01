/**
 * IIFE -> Immediately invoked function expression
 * Serve para fugir do escopo global. 
 */

 (function (){
     console.log('Será executado na hora!');
     console.log('Foge do escopo mais abrangente (Window/Global)');
     
     
 })()