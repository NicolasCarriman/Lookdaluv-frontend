import { useState } from 'react';



export default function hideShow() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(false)}>---</button>
            {mostrar ? <MenuBar/> : null}
        </div>
    );
}