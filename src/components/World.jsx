import Globe from "react-globe.gl";
import {useEffect, useRef} from "react";
import {Mesh, MeshPhongMaterial, SphereGeometry, TextureLoader} from "three";

const World = () => {

    const globeRef = useRef();

    const cloudsImageUrl = "/assets/clouds.png";
    const cloudsAlt = 0.004;
    const cloudsRotationSpeed = -0.006;

    useEffect(() => {
        const world = globeRef.current;

        world.controls().autoRotate = true;
        world.controls().autoRotateSpeed = 0.35;

        new TextureLoader().load(cloudsImageUrl, cloudsTexture => {
            const clouds = new Mesh(
                new SphereGeometry(world.getGlobeRadius() * (1 + cloudsAlt), 75, 75),
                new MeshPhongMaterial({map: cloudsTexture, transparent: true})
            );

            world.scene().add(clouds);

            (function rotateClouds() {
                clouds.rotation.y += cloudsRotationSpeed * Math.PI / 180;
                requestAnimationFrame(rotateClouds);
            })();
        });

    }, []);

    return (
        <div>
            <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
        </div>
    );
}

export default World;