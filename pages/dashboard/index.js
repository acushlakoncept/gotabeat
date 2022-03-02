/* eslint-disable @next/next/no-img-element */
import { useUser } from '@auth0/nextjs-auth0';
import { BaseLayout } from '@components/ui/layout';
import { BsPlayCircle } from "react-icons/bs";
import {GiDrum} from "react-icons/gi";
import {ImUpload} from "react-icons/im";
import {CgProfile} from "react-icons/cg";
import { useState } from 'react';
import { BEATS } from '@content/beats';
import { ActiveLink, Button } from '@components/ui';
import {MdOutlineDeleteForever} from "react-icons/md";
import {BiEdit} from "react-icons/bi";
import MyUploader from '@components/uploader';
import { toast } from 'react-toastify';


export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const [openTab, setOpenTab] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <div className='bg-gray-900 opacity-80 bg-blend-overlay flex justify-between py-2 px-4 items-center text-white rounded -mt-2'>
          Welcome {user.name}! 
          <ActiveLink href='/api/auth/logout'>
            <a 
            onClick={() => toast('Logged out successfully')}
            className='text-gray-700 font-bold hover:shadow-lg hover:bg-blue-200 bg-blue-100 px-2 py-1 mt-1 rounded-full'>Logout</a>
          </ActiveLink>
        </div>

        <div className="flex flex-wrap mt-10">
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
                   <span className="text-4xl mr-2"><GiDrum /></span>
                   <span className="text-lg">Manage Your Beats</span>            
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
                   <span className="text-4xl mr-2"><ImUpload /></span>
                   <span className="text-lg">Upload Beats</span>            
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
                   <span className="text-4xl mr-2"><CgProfile /></span>
                   <span className="text-lg">Profile</span>            
                </div>
              </a>
            </li>
            
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="-mx-3 my-6 p-10 flex flex-wrap">
                     { BEATS.map((beat, index) => (
                       <div key={index} className="w-1/2 sm:w-1/3 my-3 px-3 flex items-center border-r-2">
                         <span className='text-xl pb-3 cursor-pointer'><BsPlayCircle /> </span>
                        <ActiveLink href="/#">
                          <a  className="block w-full mx-3 pb-3 text-gray-700 hover:text-orange-600 border-b-2">{beat.name}</a>
                        </ActiveLink>
                        <span className='text-xl text-green-700 pb-3 cursor-pointer'><BiEdit /></span>
                        <span className='text-xl text-red-700 pb-3 cursor-pointer'><MdOutlineDeleteForever /></span>
                      </div>
                     ))

                     }
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex flex-col items-center justify-center -mx-3 mb-6">
                     <h2 className='text-2xl mb-3'>Upload your beats here</h2>
                    <div className="w-full sm:w-1/2 px-3">
                      <MyUploader />
                    </div>

                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex flex-wrap p-10">
                      <div className="flex flex-col items-center">
                        <img className='rounded-full' src={user?.picture ?? '/profile.png'} alt={user.nickname} />
                        <h4 className='font-bold text-xl'>{user.name}</h4>
                      </div>

                        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ActiveLink href="/api/auth/login">
        <Button>Login</Button>
      </ActiveLink>
    </div>
  );
}

Dashboard.Layout = BaseLayout;