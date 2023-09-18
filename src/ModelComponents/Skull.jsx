/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --transform --shadows 
Files: scene.gltf [7.59KB] > scene-transformed.glb [904.89KB] (-11822%)
Author: jvitorsouzadesign (https://sketchfab.com/jvitorsouzadesign)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/skull-salazar-downloadable-eeed09437afb4e1ea8a6ff3b0e9964ad
Title: Skull Salazar (Downloadable)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Skull(props) {
  const { nodes, materials } = useGLTF("./skull/scene-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Rosa_material}
        rotation={[35 * (Math.PI / 180), 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.defaultMat_material}
        rotation={[35 * (Math.PI / 180), 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./skull/scene-transformed.glb");