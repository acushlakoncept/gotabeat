import Head from 'next/head'
import { BaseLayout } from '@components/ui/layout'
import Hero from '@components/Hero';
import TabsRender from '@components/tabs';
import { useEffect, useRef, useState } from 'react';
import {AiOutlinePauseCircle} from 'react-icons/ai';
import {BsPlayCircle} from 'react-icons/bs';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#555",
  progressColor: "orange",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 70,
  normalize: true,
  partialRender: true
});
export default function Home() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [beatsUrl, setBeatsUrl] = useState('https://res.cloudinary.com/acushlakoncepts/video/upload/v1646054640/beats/The_Evolution_Of_Gayness_Instr_Master_vobplk.wav');


  const handlePlayBtnClick = (url) => {
    setBeatsUrl(url);
    setPlaying(!playing);
  }

  useEffect( () => {
    const WaveSurfer = async () => {
      const data = (await import('wavesurfer.js')).default;

      const options = formWaveSurferOptions(waveformRef.current);
      wavesurfer.current = data.create(options);
      console.log(wavesurfer.current)
      wavesurfer.current.load(beatsUrl);
    }

    WaveSurfer();
    
    

    return () => {
      if(wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [beatsUrl]);


  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };


  return (
    <>
      <Head>
        <title>Got A Beat</title>
        <meta name="description" content="Listen to licensed beats from music producers with a single click" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <TabsRender btnUrl={beatsUrl} playPause={playing} handlePlay={(url) => {
        handlePlayBtnClick(url)
        handlePlayPause()
        }}/>


      <div id="waveform" ref={waveformRef} className="container" />
      <div className="controls">
        <div onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</div>
      </div>
    </>
  )
}

Home.Layout = BaseLayout;