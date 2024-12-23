import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
// Use GSAP animation library to animate objects
const Target = (props) => {
    const targetRef = useRef();
    // Use online hosted path to load 3D model
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        });
    });

    return (
        <mesh { ...props} ref={targetRef} rotation={[0, Math.PI /5, 0]} scale={1.5}>
            <primitive object={scene} />
        </mesh>
    )
};

export default Target