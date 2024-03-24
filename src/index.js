import { createRoot } from 'react-dom/client'
import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import './index.css'


const Scene = () => {
  const cameraRef = useRef()

  return (
      <Canvas>
          <color attach="background" args={['#123']} />
          <PerspectiveCamera makeDefault position={[3, 3, 3]}
                             near={0.1} far={100} fov={75}
                             aspect={window.innerWidth / window.innerHeight}/>

          <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              camera={cameraRef.current}
          />

          <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1, 1, 1]}/>
          </mesh>
      </Canvas>
  )
}

createRoot(document.getElementById('root')).render(<Scene/>);