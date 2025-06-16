import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const TechIconCard = ({model}) => {
    const scene = useGLTF(import.meta.env.BASE_URL + model.modelPath);

    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight
                position={[10, 15, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
            />
            <Environment preset={"city"} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>

            <OrbitControls enableZoom={false}/>
        </Canvas>
    )
}
export default TechIconCard
