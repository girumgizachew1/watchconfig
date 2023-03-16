import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as Three from 'three'
import { useCustomization } from '../context/custumization'
import { Color } from 'three'
const Scene = (props) => {


  const {material, bandcolor, roundcolor, roundmaterial} = useCustomization()
  const { nodes, materials } = useGLTF('./applewatch/scene.gltf')


//texture 1 corcodile leather
  const leatherTextureprops = useTexture({
   // map: './texture/HardLeather/Leather_011_basecolor.jpg',
    normalMap: './texture/HardLeather/Leather_011_normal.jpg',
    roughnessMap: './texture/HardLeather/Leather_011_roughness.jpg',
    aoMap: './texture/HardLeather/Leather_011_ambientOcclusion.jpg',
  })
   // leatherTextureprops.map.repeat.set(6,6);
    leatherTextureprops.normalMap.repeat.set(5,5);
    leatherTextureprops.roughnessMap.repeat.set(5,5);
    leatherTextureprops.aoMap.repeat.set(5,5);
   
  //  leatherTextureprops.map.wrapS = leatherTextureprops.map.wrapT= Three.RepeatWrapping;
    leatherTextureprops.normalMap.wrapS = leatherTextureprops.normalMap.wrapT= Three.RepeatWrapping;
       leatherTextureprops.roughnessMap.wrapS = leatherTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
       leatherTextureprops.aoMap.wrapS = leatherTextureprops.aoMap.wrapT= Three.RepeatWrapping;
    

  //texture 2 normal leather
  const normalleatherTextureprops = useTexture({
    // map: './texture/leather2/Leather_08_basecolor.jpg',
     normalMap: './texture/leather2/Leather_008_Normal.jpg',
     roughnessMap: './texture/leather2/Leather_008_Roughness.jpg',
     aoMap: './texture/leather2/Leather_008_Ao.jpg',
   })
    // normalleatherTextureprops.map.repeat.set(6,6);
     normalleatherTextureprops.normalMap.repeat.set(4,4);
     normalleatherTextureprops.roughnessMap.repeat.set(4,4);
     normalleatherTextureprops.aoMap.repeat.set(4,4);
    
   //  normalleatherTextureprops.map.wrapS = leatherTextureprops.map.wrapT= Three.RepeatWrapping;
   normalleatherTextureprops.normalMap.wrapS = normalleatherTextureprops.normalMap.wrapT= Three.RepeatWrapping;
   normalleatherTextureprops.roughnessMap.wrapS = normalleatherTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
   normalleatherTextureprops.aoMap.wrapS = normalleatherTextureprops.aoMap.wrapT= Three.RepeatWrapping;
     

     //texture 2 normal leather
  const wiredleatherTextureprops = useTexture({
    // map: './texture/leather2/Leather_Weave_005_basecolor.jpg',
     normalMap: './texture/leather3/Leather_Weave_005_normal.jpg',
     roughnessMap: './texture/leather3/Leather_Weave_005_roughness.jpg',
     aoMap: './texture/leather3/Leather_Weave_005_ambientOcclusion.jpg',
   })
    // wiredleatherTextureprops.map.repeat.set(6,6);
    wiredleatherTextureprops.normalMap.repeat.set(3,3);
    wiredleatherTextureprops.roughnessMap.repeat.set(3,3);
    wiredleatherTextureprops.aoMap.repeat.set(3,3);
    
   //  wiredleatherTextureprops.map.wrapS = wiredleatherTextureprops.map.wrapT= Three.RepeatWrapping;
   wiredleatherTextureprops.normalMap.wrapS = wiredleatherTextureprops.normalMap.wrapT= Three.RepeatWrapping;
   wiredleatherTextureprops.roughnessMap.wrapS = wiredleatherTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
   wiredleatherTextureprops.aoMap.wrapS = wiredleatherTextureprops.aoMap.wrapT= Three.RepeatWrapping;


   const weavemetalTextureprops = useTexture({
    // map: './texture/weavemetal/Metal_Weave_010_basecolor.jpg',
     normalMap: './texture/weavemetal/Metal_Weave_010_normal.jpg',
     roughnessMap: './texture/weavemetal/Metal_Weave_010_roughness.jpg',
     aoMap: './texture/weavemetal/Metal_Weave_010_ambientOcclusion.jpg',
   })
    // weavemetalTextureprops.map.repeat.set(6,6);
    weavemetalTextureprops.normalMap.repeat.set(5,5);
    weavemetalTextureprops.roughnessMap.repeat.set(5,5);
    weavemetalTextureprops.aoMap.repeat.set(5,5);
    
   //  weavemetalTextureprops.map.wrapS = weavemetalTextureprops.map.wrapT= Three.RepeatWrapping;
   weavemetalTextureprops.normalMap.wrapS = weavemetalTextureprops.normalMap.wrapT= Three.RepeatWrapping;
   weavemetalTextureprops.roughnessMap.wrapS = weavemetalTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
   weavemetalTextureprops.aoMap.wrapS = weavemetalTextureprops.aoMap.wrapT= Three.RepeatWrapping;




   const metalTextureprops = useTexture({
    // map: './texture/weavemetal/Metal_Weave_010_basecolor.jpg',
     normalMap: './texture/metal/Sci-fi_Wall_008_normal.jpg',
     roughnessMap: './texture/metal/Sci-fi_Wall_008_roughness.jpg',
     aoMap: './texture/metal/Sci-fi_Wall_008_ambientOcclusion.jpg',
   })
    //metalTextureprops.map.repeat.set(6,6);
  metalTextureprops.normalMap.repeat.set(6,6);
  metalTextureprops.roughnessMap.repeat.set(6,6);
  metalTextureprops.aoMap.repeat.set(6,6);
    
   //  metalTextureprops.map.wrapS = metalTextureprops.map.wrapT= Three.RepeatWrapping;
  metalTextureprops.normalMap.wrapS = metalTextureprops.normalMap.wrapT= Three.RepeatWrapping;
  metalTextureprops.roughnessMap.wrapS = metalTextureprops.roughnessMap.wrapT= Three.RepeatWrapping;
  metalTextureprops.aoMap.wrapS = metalTextureprops.aoMap.wrapT= Three.RepeatWrapping;


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
          <meshStandardMaterial {...(
                    material === 'stripeleather'
                      ? leatherTextureprops
                      : material === 'normalleather'
                        ? normalleatherTextureprops
                        : material === 'weaveleather'
                          ? wiredleatherTextureprops
                          : material === 'weavemetal'
                            ? weavemetalTextureprops
                            : material === 'metal'
                            ? metalTextureprops
                            : materials.KwQHVIjAaOBvYOl
                            )} color={bandcolor.color }/>
           </mesh>
          <mesh geometry={nodes.tqQTKXmBvXiXuUi.geometry} material={materials.iDKPrezlRKAMsXJ} />
          <mesh geometry={nodes.yTjoxDvwbAPZygY.geometry} >
               <meshStandardMaterial
                  {...(
                    material === 'stripeleather'
                      ? leatherTextureprops
                      : material === 'normalleather'
                        ? normalleatherTextureprops
                        : material === 'weaveleather'
                          ? wiredleatherTextureprops
                          : material === 'weavemetal'
                            ? weavemetalTextureprops
                            : material === 'metal'
                            ? metalTextureprops
                            : materials.QGhrBgCXrJDNcrC
                  )}
                  color={bandcolor.color}
                />          
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

          <mesh className='watchround' geometry={nodes.QpBpNnkHikCzRXn.geometry}>
            <meshStandardMaterial {...(
              roundmaterial === 'weavemetal'? weavemetalTextureprops
              :roundmaterial === 'metal' ? metalTextureprops
              : materials.JUrNntQLbxHnFtO)} color={roundcolor.color}/>
            
          </mesh>
        
          <mesh geometry={nodes.JcqbcJEVwcScYbo.geometry} material={materials.JUrNntQLbxHnFtO} />
          </group>
      </group>
    </group>
  )
}

useGLTF.preload('./applewatch/scene.gltf')
export default Scene