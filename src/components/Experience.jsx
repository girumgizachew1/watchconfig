import { MeshReflectorMaterial, PresentationControls, Stage  } from '@react-three/drei'
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import  Scene from './Scene'
function Experience() {
  return (
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI/16]}>
            <Stage environment={"city"} intensity={0.1} contactShadow={false} shadows={false}>        
                <Suspense fallback={null}>
                    <Scene/>
                </Suspense>
            </Stage>
        <mesh rotation={[-Math.PI / 2, 0 ,0]}>
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.5}
            />
        </mesh>
        </PresentationControls>

    )
}

export default Experience