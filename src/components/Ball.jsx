import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import CanvasLoader from "./CanvasLoader.jsx";

const Ball = (props) => {
    const [decal] = useTexture([props.imageUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffestFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[ 2 * Math.PI, 0, 6.25 ]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    );
}

const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={-Math.PI / 2}
                />
                <Ball imageUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default BallCanvas;