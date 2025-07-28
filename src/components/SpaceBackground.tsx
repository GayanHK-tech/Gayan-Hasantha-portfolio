import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Sphere } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function FlashingStars(props: any) {
  const ref = useRef<any>();
  const [positions, colors] = useMemo(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position stars in sphere
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      
      // Cinematic blue colors with some white stars
      const isBlue = Math.random() > 0.3;
      if (isBlue) {
        const hue = 0.6 + Math.random() * 0.1; // Blue range
        const color = new THREE.Color().setHSL(hue, 0.8, 0.7 + Math.random() * 0.3);
        cols[i * 3] = color.r;
        cols[i * 3 + 1] = color.g;
        cols[i * 3 + 2] = color.b;
      } else {
        // White/blue-white stars
        const intensity = 0.8 + Math.random() * 0.2;
        cols[i * 3] = intensity;
        cols[i * 3 + 1] = intensity * 0.95;
        cols[i * 3 + 2] = intensity;
      }
    }
    
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      
      // Create twinkling effect
      const material = ref.current.material;
      if (material) {
        material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
      }
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <pointsMaterial
        size={0.003}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FallingMeteors() {
  const groupRef = useRef<any>();
  const meteors = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 20
      ] as [number, number, number],
      speed: Math.random() * 0.05 + 0.02,
      delay: Math.random() * 5000,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((meteor: any, index: number) => {
        const meteorData = meteors[index];
        const time = (state.clock.elapsedTime * 1000 + meteorData.delay) % 5000;
        
        if (time < 3000) {
          const progress = time / 3000;
          meteor.position.x = meteorData.position[0] - progress * 15;
          meteor.position.y = meteorData.position[1] - progress * 10;
          meteor.position.z = meteorData.position[2] - progress * 5;
          meteor.material.opacity = Math.sin(progress * Math.PI) * 0.8;
        } else {
          meteor.material.opacity = 0;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {meteors.map((meteor) => (
        <mesh key={meteor.id} position={meteor.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial
            color="#ff6b35"
            transparent
            opacity={0}
          />
        </mesh>
      ))}
    </group>
  );
}

function ThunderCracks() {
  const ref = useRef<any>();
  
  useFrame((state) => {
    if (ref.current) {
      // Random lightning flashes
      const flash = Math.sin(state.clock.elapsedTime * 2) > 0.95;
      ref.current.intensity = flash ? 0.3 : 0.05;
      
      if (flash) {
        ref.current.color.setHSL(0.55, 0.3, 0.9);
      } else {
        ref.current.color.setHSL(0.6, 0.8, 0.1);
      }
    }
  });

  return <ambientLight ref={ref} intensity={0.05} color="#4a90e2" />;
}

function CinematicNebula() {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      meshRef.current.material.opacity = 0.05 + Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
    }
  });

  return (
    <Sphere ref={meshRef} args={[8, 32, 32]} position={[0, 0, -5]}>
      <meshBasicMaterial 
        color="#1e40af" 
        transparent 
        opacity={0.08}
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* CSS-based lightning effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-thunder-white opacity-0 animate-lightning-flash" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 right-1/3 w-px h-24 bg-electric-blue opacity-0 animate-lightning-flash" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/2 left-2/3 w-px h-40 bg-thunder-white opacity-0 animate-lightning-flash" style={{ animationDelay: '8s' }} />
      </div>
      
      {/* CSS-based meteors */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-meteor-orange rounded-full meteor-glow animate-meteor-fall"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* CSS-based flashing stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cinematic-blue rounded-full animate-star-flash"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
        <ThunderCracks />
        <CinematicNebula />
        <FlashingStars />
        <FallingMeteors />
      </Canvas>
    </div>
  );
};

export default SpaceBackground;