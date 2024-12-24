
import { createEffect, createMemo, createSignal } from "solid-js";
import Modal from "./Modal";
import Toast from "./Toast";


export const createSolidToast = (position = "top-left") => {
    const [notification, setNotification] = createSignal()

    createEffect(() => {
        if (notification()) {
          const timeoutId = setTimeout(() => {
            setNotification(null);
          }, notification()?.duration);
    
          return () => clearTimeout(timeoutId);
        }
    });
    
    const triggerToast = (notificationProps) => {
        setNotification(notificationProps);
    };

    const ToastComponent = createMemo(() => {
        if (notification()) {
          return (
            <div class={`${position}`} 
              style={{
                "top":"10px",
                "left":"10px",
                "position":"fixed"
              }}
            >
                a
              {/* <Toast {...notification()} /> */}
            </div>
          );
        }
        return null;
    });
    
    return { ToastComponent, triggerToast };
}


// modal
// export const createSolidModal = () => {
//     const [modal, setModal] = createSignal()

//     const triggerModal = () => {
//         setModal(modalProps)
//     }

//     const ModalComponent = createMemo(() => {
//         if (modal()) {
//             return (
//                 <Modal {...modal()} />
//             )
//         }
//     })

//     return { ModalComponent, triggerModal }
// }