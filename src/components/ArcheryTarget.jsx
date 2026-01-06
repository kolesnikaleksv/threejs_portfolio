import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function ArcheryTarget(props) {
  const targetRef = useRef();
  const { nodes, materials } = useGLTF('/models/archery_target.glb');

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 80,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <group {...props} dispose={null}>
      <group scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.temp_Material001_0.geometry}
          material={materials['Material.001']}
          scale={60}
          ref={targetRef}
          rotation={[0, Math.PI / -5, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/archerytarget.glb');

export default ArcheryTarget;
