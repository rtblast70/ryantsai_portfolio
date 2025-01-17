import React, { useState } from "react";
import "./GalleryWindow.css";
import { IconContext } from "react-icons";
import { AiFillCloseCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosConstruct } from "react-icons/io";

function GalleryWindow(props) {
  const [hover, setHover] = useState(false);
  const [dX, moveX] = useState(0);
  const [dY, moveY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [styles, setStyles] = useState({});

  const _dragStart = (e) => {
    moveX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    moveY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };

  const _dragEnd = () => {
    setDragging(false);
  };

  const _dragging = (e) => {
    if (dragging) {
      var left = e.screenX - dX;
      var top = e.screenY - dY;

      setStyles({ left: left, top: top });
    }
  };

  return (
    <>
      <div className="modal-background">
        <div
          className="gallery-modal"
          style={styles}
          onMouseDown={_dragStart}
          onMouseMove={_dragging}
          onMouseUp={_dragEnd}
        >
          <div className="gallery-handlebar">
            <div
              className="gallery-close"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={props.clickEvent}
            >
              <IconContext.Provider value={{ size: "1.3em" }}>
                {hover ? <AiFillCloseCircle /> : <AiOutlineCloseCircle />}
              </IconContext.Provider>
            </div>
          </div>
          <div className="gallery-content">
            <IoIosConstruct />
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryWindow;
