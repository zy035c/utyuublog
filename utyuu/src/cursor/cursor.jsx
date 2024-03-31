import { useRef, useEffect } from "react";
import "./cursor.css";

const Cursor = () => {

    const cursorObj = useRef(null);

    const endX = useRef(0);
    const endY = useRef(0);

    const mouseMoveEvent = (e) => {

        endX.current = e.clientX;
        endY.current = e.clientY;

        cursorObj.current.style.top = endY.current + `px`;
        cursorObj.current.style.left = endX.current + `px`;

    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent);

        return () => {
            document.removeEventListener('mousemove', mouseMoveEvent);
        }
    });
    
    return (
        <div ref={cursorObj} className='fixed cursor-outline z-50'>
            <img className="cursor-img" src="/cursor/ia_cursor-removebg.png" alt='cursor' />
        </div>
    );
};

export default Cursor;