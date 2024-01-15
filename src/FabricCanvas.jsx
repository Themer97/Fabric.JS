import React from 'react';
import { canvas } from './fabricFunctions';

const FabricCanvas = () => {
  return (
    <>
      <button id='draw'>Free Drawing</button>
      <button id='rectangle'>Add Rectangle</button>
      <button id='circle'>Add Circle</button>
      <button id='text'>Add Text</button>
      <button id='remove' disabled>
        Remove
      </button>
      <button id='tosvg'>Generate SVG</button>
      <br />
      <br />
      <div>
        <canvas id='canvas' width={750} height={333}></canvas>
      </div>
      <br />
      <div id='svg'></div>
    </>
  );
};

export default FabricCanvas;
