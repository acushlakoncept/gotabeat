import Head from 'next/head'
import { BaseLayout } from '@components/ui/layout'
import Hero from '@components/Hero';
import TabsRender from '@components/tabs';
import { useEffect, useRef, useState } from 'react';
import {AiOutlinePauseCircle } from 'react-icons/ai';
import {BsPlayCircle} from 'react-icons/bs';
import { Button } from '@components/ui';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#555",
  progressColor: "orange",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 50,
  normalize: true,
  partialRender: true
});
export default function Home() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showLicense, setShowLicense] = useState(false);
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

  const handleShowLicense = () => {
    setShowLicense(!showLicense);
    notify();
  }

  const notify = () => toast("License added to cart");


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

      <div className="waveform-container flex flex-col items-center justify-center py-4">
        <div id="waveform" ref={waveformRef} className="container" />
        <div className="controls flex items-center justify-center relative w-full">
          <div className='my-4 mr-4 text-5xl' onClick={handlePlayPause}>{!playing ? <AiOutlinePauseCircle /> : <BsPlayCircle />}</div>
          <div>
            <Button onClick={()=> setShowLicense(!showLicense)} className="rounded-full flex justify-between items-center">
              Buy licensed 
              <span className='text-3xl ml-2'><RiArrowDownSLine /></span>
            </Button>
          </div>
          <div className={`${showLicense ? '' : 'hidden'} absolute -top-[27.8rem] sm:-top-[10.5rem] left-50 z-10 bg-black text-white flex flex-col sm:flex-row p-3 rounded-md justify-between`}>
                <div className='flex flex-col w-full sm:w-1/3 mt-2 items-center text-center'>
                  <h4 className='text-xl mb-2 px-4 border-b-2'>Single Use License</h4>
                  <p>Web | Personal &amp; Corporate</p>
                  <Button onClick={handleShowLicense} size='sm' variant='white' className="my-2 rounded-full flex justify-between items-center">Add to Cart</Button>
                </div>
                <div className='flex flex-col w-full sm:w-1/3 mt-2 items-center text-center'>
                  <h4 className='text-xl mb-2 px-4 border-b-2'>Non-Exclusive License</h4>
                  <p>Web | Personal &amp; Corporate | Trade Shows &amp; In-store</p>
                  <Button onClick={handleShowLicense} size='sm' variant='white' className="my-2 rounded-full flex justify-between items-center">Add to Cart</Button>
                </div>

                <div className='flex flex-col w-full sm:w-1/3 mt-2 items-center text-center'>
                  <h4 className='text-xl mb-2 px-4 border-b-2'>Exclusive License</h4>
                  <p>Web | Personal &amp; Corporate | Trade Shows &amp; In-store</p>
                  <Button onClick={handleShowLicense} size='sm' variant='white' className="my-2 rounded-full flex justify-between items-center">Add to Cart</Button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

Home.Layout = BaseLayout;