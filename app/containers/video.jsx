import React from 'react'

export const Video = () => {
  return (
    <video
      width="320"
      height="840"
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      className="w-full lg:min-h-full aspect-video max-h-[300px] lg:max-h-[900px] rounded-2xl bg-gray-500 object-cover"
    >
      <source src={"/videos/Mk-EACoaching.mp4"} type="video/mp4" />
      <track
        src={"/videos/Mk-EACoaching.mp4"}
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Seu browser não suporta reprodução de vídeo.
    </video>
  )
}
