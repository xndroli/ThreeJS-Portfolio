import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Ring from '../components/Ring.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

// make 3D models responsive on all screen sizes
const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Alexander<span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Innovative Problem-Solver</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* 3D scene space */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    {/* Position camera */}
                    <PerspectiveCamera makeDefault position ={[0, 0, 20]}/>
                        <HeroCamera isMobile={isMobile}>
                            {/* Render 3D model */}
                            <HackerRoom 
                                position={sizes.deskPosition}
                                rotation={[0.1, -1.5, -0.2]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        {/* Render group of floating 3D model elements */}
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Ring position={sizes.ringPosition}/>
                        </group>
                        {/* Add lighting */}
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's Work Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero