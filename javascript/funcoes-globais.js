const welcome = () => {
  console.log(`seja bem vindo`);
};

setTimeout(welcome, 1000);

let contador = 0
const id = setInterval(() => {
    console.log(contador)
    if(contador >= 10) {
        clearInterval(id)
    }
    contador++
}, 1500)