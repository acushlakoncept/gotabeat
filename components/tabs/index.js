import { useState } from "react";
import { FiMusic } from "react-icons/fi";
import { BsCollection, BsUiRadiosGrid, BsPlayCircle } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { AiOutlineStar, AiOutlineCalendar } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi"
import {BEATS, GENRES, MOODS} from "@content/beats";
import { ActiveLink } from "@components/ui";
import Image from "next/image";


export default function TabsRender ({handlePlay}) {
  const [openTab, setOpenTab] = useState(1);

  const collections = BEATS.reduce((acc, beat) => {
    acc[beat.collection] ? acc[beat.collection]++ : (acc[beat.collection] = 1);
    return acc;
  }, {});

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none bg-gray-100 flex-wrap pt-3 pb-4 flex-row border-b-2"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-orange-600"
                    : "text-dark-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <div className="flex justify-center items-center">
                   <span className="text-4xl mr-2"><FiMusic /></span>
                   <span className="text-lg">Browse</span>            
                </div>
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-orange-600"
                    : "text-dark-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 <div className="flex justify-center items-center">
                   <span className="text-4xl mr-2"><BsCollection /></span>
                   <span className="text-lg">Collections</span>            
                </div>
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-orange-600"
                    : "text-dark-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 <div className="flex justify-center items-center">
                   <span className="text-4xl mr-2"><BsUiRadiosGrid /></span>
                   <span className="text-lg">Genres</span>            
                </div>
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                  (openTab === 4
                    ? "text-orange-600"
                    : "text-dark-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 <div className="flex justify-center items-center">
                   <span className="text-4xl mr-2"><RiEmotionHappyLine /></span>
                   <span className="text-lg">Mode</span>            
                </div>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-col sm:flex-row justify-between -mx-3 my-6">
                      <div className="w-full px-3 bg-white shadow-md hover:shadow-lg mx-2">
                        <div className="flex justify-center items-center">
                          <span className="text-4xl mr-2"><AiOutlineStar /></span>
                          <span className="text-lg font-bold">Curated by Experts</span>            
                        </div>
                        <div className="flex flex-col p-3">
                          { BEATS.slice(0,4).map((beat, index) => (
                            <div key={index} className="flex items-center my-2 border-b-2 pb-2">
                              <span className="mr-3 cursor-pointer hover:text-orange-800 text-4xl"><BsPlayCircle 
                              onClick={handlePlay} /></span>
                              <div>
                                <h4 className="font-bold">{beat.name}</h4>
                                <p>
                                { beat.genre.map((genre, indx) => (
                                  `${genre} ${indx === beat.genre.length - 1 ? '' : ' / '}`
                                ))}
                                </p>
                              </div>
                            </div>
                          ))

                          }
                        </div>
                      </div>
                      <div className="w-full px-3 bg-white shadow-md hover:shadow-lg mr-2">
                        <div className="flex justify-center items-center">
                            <span className="text-4xl mr-2"><BiBarChart /></span>
                            <span className="text-lg font-bold">Trending Tracks</span>            
                        </div>
                        <div className="flex flex-col p-3">
                          { BEATS.map((beat, index) => ( beat.trending &&
                            <div key={index} className="flex items-center my-2 border-b-2 pb-2">
                              <span className="mr-3 cursor-pointer hover:text-orange-800 text-4xl"><BsPlayCircle /></span>
                              <div>
                                <h4 className="font-bold">{beat.name}</h4>
                                <p>
                                { beat.genre.map((genre, indx) => (
                                  `${genre} ${indx === beat.genre.length - 1 ? '' : ' / '}`
                                ))}
                                </p>
                              </div>
                            </div>
                          ))

                          }
                        </div>
                      </div>
                      <div className="w-full px-3 bg-white shadow-md hover:shadow-lg">
                        <div className="flex justify-center items-center">
                            <span className="text-4xl mr-2"><AiOutlineCalendar /></span>
                            <span className="text-lg font-bold">New Releases</span>            
                        </div>

                        <div className="flex flex-col p-3">
                          { BEATS.map((beat, index) => ( !beat.trending &&
                            <div key={index} className="flex items-center my-2 border-b-2 pb-2">
                              <span className="mr-3 cursor-pointer hover:text-orange-800 text-4xl"><BsPlayCircle /></span>
                              <div>
                                <h4 className="font-bold">{beat.name}</h4>
                                <p>
                                { beat.genre.map((genre, indx) => (
                                  `${genre} ${indx === beat.genre.length - 1 ? '' : ' / '}`
                                ))}
                                </p>
                              </div>
                            </div>
                          ))

                          }
                        </div>
                        
                      </div>
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-wrap justify-center -mx-3 mb-6">

                    { Object.keys(collections).map((collection, index) => (

                    <div key={index} className="max-w-lg rounded overflow-hidden shadow-lg mx-4">
                      <Image
                        width="300px"
                        height="300px"
                        layout="fixed"
                        src="https://source.unsplash.com/random/?music" 
                        alt="Sunset in the mountains" />

                      <div className="px-6 py-4 flex items-center">
                        <div className="font-bold text-xl mb-2 mr-2">{collection}</div>
                        <span className="bg-orange-600 px-3 text-white text-sm rounded-full">{collections[collection]}</span>
                      </div>
                    </div>
                    ))
                    }
                          
                   
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex flex-wrap">
                      { GENRES.map((genre, index) => (
                        <div key={index} className="w-1/2 sm:w-1/4 my-3 px-3">
                          <ActiveLink href="/#">
                            <a  className="block w-full mx-3 pb-3 text-gray-700 hover:text-orange-600 border-b-2">{genre}</a>
                          </ActiveLink>
                        </div>
                      ))
                      }
                  </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <div className="flex flex-wrap">
                      { MOODS.map((genre, index) => (
                        <div key={index} className="w-1/2 sm:w-1/4 my-3 px-3">
                          <ActiveLink href="/#">
                            <a  className="block w-full mx-3 pb-3 text-gray-700 hover:text-orange-600 border-b-2">{genre}</a>
                          </ActiveLink>
                        </div>
                      ))
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
