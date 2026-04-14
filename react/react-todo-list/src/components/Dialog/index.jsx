import "./dialog.style.css";

import { useEffect, useRef } from "react";
import { IconTrash } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // não devemos fazer buscas no DOM desse jeito no REACT
  //   const dialog = document.querySelector("dialog");

  // useRef é usado para guardar informações de forma persistente sem re-render (re-renderizar igual o useState)

  // posso usar useRef para guardar valores antigos entre renders.

  const dialogRef = useRef(null);

  // todas vez que o valor mudar vai ser gerado um efeito colateral.
  // o useState guarda e atualiza o estado, enquanto o useEffect executa um efeito quando algo muda
  // useEffect é o efeito colateral da mudança de estado
  useEffect(() => {
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.addEventListener("close", onClose)

    // essa função vai ser executada quando o componente for desmontado
    return () => {
      
      dialog?.removeEventListener("close", onClose)
    }
  }, [onClose])

  // jeito react de disparar um evento
  const openDialog = () => {
    // dialogRef.currente = <dialog></dialog>
    // usando sinal de interrogação depois do current para evitar erro caso o elemento não exista
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        {/* autoFocus um atributo que faz o botão ser selecionado por padrão */}
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconTrash></IconTrash>
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
      {/* <button onClick={openDialog}>Show the dialog</button> */}
    </>
  );
}
