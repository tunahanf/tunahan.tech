'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden rounded-none border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-0"
        fill="#1a1a1a"
        size={150}
      />
      
      <div className="flex h-full">
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
            <a href="https://linkedin.com/in/tunahanfirat" target="_blank" className="hover:underline">
            TUNAHAN FIRAT</a>
          </h1>
          <p className="text-neutral-300 text-lg text-center">
            Computer Vision Developer
          </p>
        </div>

        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 
