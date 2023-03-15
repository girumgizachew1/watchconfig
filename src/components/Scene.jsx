import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as Three from 'three'
import { useCustomization } from '../context/custumization'
const Scene = (props) => {


  const {material} = useCustomization()
  const { nodes, materials } = useGLTF('./applewatch/scene.gltf')
//material={materials.KwQHVIjAaOBvYOl}
  const leatherTextureprops = useTexture({
    map: './texture/HardLeather/Leather_011_basecolor.jpg',
    normalMap: './texture/HardLeather/Leather_011_normal.jpg',
    roughnessMap: './texture/HardLeather/Leather_011_roughness.jpg',
    aoMap: './texture/HardLeather/Leather_011_ambientOcclusion.jpg',
  })
    leatherTextureprops.map.repeat.set(6,6);
    leatherTextureprops.normalMap.repeat.set(6,6);
    leatherTextureprops.roughnessMap.repeat.set(6,6);
    leatherTextureprops.aoMap.repeat.set(6,6);
   
    leatherTextureprops.map.wrapS = leatherTextureprops.map.wrapT= Three.RepeatWrapping;
    leatherTextureprops.normalMap.wrapS = leatherTextureprops.normalMap.wrapT= Three.RepeatWrapping;
       leatherTextureprops.roughnessMap.wrapS = leatherTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
       leatherTextureprops.aoMap.wrapS = leatherTextureprops.aoMap.wrapT= Three.RepeatWrapping;
    

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.7}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.ToJTXgljlhhqitR.geometry} material={materials.LiBdTcnHkZvFfBu} />
          <mesh geometry={nodes.MKkqtRcjcYdQNza.geometry} material={materials.LiBdTcnHkZvFfBu} />
          <mesh geometry={nodes.fWLGcfnLpXnhehz.geometry} material={materials.GdUNwQJEkZeKMrn} />
          <mesh geometry={nodes.aEQvkfzeWvwzYAe.geometry} material={materials.JbkKnNDeFOFjmsi} />
          <mesh geometry={nodes.dwwWsLxRsdeWNuY.geometry} material={materials.JbkKnNDeFOFjmsi} />
          <mesh geometry={nodes.uzbwArIObdMRDiX.geometry} material={materials.JbkKnNDeFOFjmsi} />
          <mesh geometry={nodes.IKFNZjXnJPkRlsj.geometry} material={materials.JbkKnNDeFOFjmsi} />
          <mesh geometry={nodes.sEZkXDXAzFzaCpi.geometry} material={materials.JAXIvIljFWpqimH} />

          <mesh geometry={nodes.NIYNwKgmPYCkzpx.geometry} material={materials.RfziScXwNjFOjTf} />         
          <mesh geometry={nodes.BrmhLaxyDmhbhXA.geometry} >
          <meshStandardMaterial {...material === 'leather' ? leatherTextureprops : materials.KwQHVIjAaOBvYOl }/>
           </mesh>
          <mesh geometry={nodes.tqQTKXmBvXiXuUi.geometry} material={materials.iDKPrezlRKAMsXJ} />
          <mesh geometry={nodes.yTjoxDvwbAPZygY.geometry} >
            <meshStandardMaterial {...material === 'leather' ? leatherTextureprops : materials.QGhrBgCXrJDNcrC}/>
           </mesh>
         
         
          <mesh geometry={nodes.yHafeexXAiPytbW.geometry} material={materials.FqtwwTANGDActcI} />
          <mesh geometry={nodes.KeqqEyvZchDDdlP.geometry} material={materials.AjFlTFrWzhywymA} />
          <mesh geometry={nodes.skbFGMQxPawHdOT.geometry} material={materials.xYqzIToOcTBbEzp} />
          <mesh geometry={nodes.ErOVeLWOcyHrdoT.geometry} material={materials.xYqzIToOcTBbEzp} />
          <mesh geometry={nodes.ajDgJcjsZTQAtOL.geometry} material={materials.rcZoXGfqfnZjYLv} />
          <mesh geometry={nodes.wflxnmxxYXvnLxp.geometry} material={materials.YRNmAgRITIuwDMU} />
          <mesh geometry={nodes.ePnvfhsUgYTHLdP.geometry} material={materials.iVwMRUBqdpoOFmg} />
          <mesh geometry={nodes.aynleugQGbyNYsa.geometry} material={materials.kFNgmsjtRAxVPtH} />
          <mesh geometry={nodes.HyRzdvVQMwELnwT.geometry} material={materials.upTfEpgNFxflqtf} />
          <mesh geometry={nodes.bvsBShDTmaTjbXM.geometry} material={materials.YpOtGMmrQbktABJ} />
          <mesh geometry={nodes.lnDzpNAJfMDjFms.geometry} material={materials.qxhxiJVpuwSrYLW} />
          <mesh geometry={nodes.lrTNGAQkeHccJph.geometry} material={materials.ycVxkCIsnetKUsw} />
          <mesh geometry={nodes.jChLaKiiqDISJhc.geometry} material={materials.sSZvqgMuWCuMkAr} />
          <mesh geometry={nodes.DzgfJtxUfpgExsF.geometry} material={materials.mUXcyUQCxEEJdiO} />
          <mesh geometry={nodes.MBrZKZXWsvHIcZQ.geometry} material={materials.JBuGosClPcYrSry} />
          <mesh geometry={nodes.acJwQeGdNxQWEyd.geometry} material={materials.OEDmdMOTgdNMXOP} />
          <mesh geometry={nodes.mcMtSAOyQxOEEfl.geometry} material={materials.sJrbBWzziZrNyXB} />
          <mesh geometry={nodes.qbgXzfcPGFYiUnN.geometry} material={materials.FBAtOQrXrgOoPNd} />
          <mesh geometry={nodes.dXSXlyOaLTQHAnn.geometry} material={materials.gMZhwegVXLXWOLd} />
          <mesh geometry={nodes.QpBpNnkHikCzRXn.geometry} material={materials.JUrNntQLbxHnFtO} />
          <mesh geometry={nodes.JcqbcJEVwcScYbo.geometry} material={materials.JUrNntQLbxHnFtO} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./applewatch/scene.gltf')
export default Scene