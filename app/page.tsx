import Image from "next/image";
import drawer from "../componen/drawer"
import Drawer from "../componen/drawer";
import NavBar from "../componen/NavBar";
import NavigationBar from "../componen/NavBar";
import Dropdown1 from "../componen/chevron";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import InputLocation from "@/componen/location";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import ImageCarousel from "@/componen/ImageCarousel";
import TravelBox from "@/componen/Travelbox";
import Notice from "@/componen/Notice";
import { FaHome, FaTicketAlt, FaPlaneDeparture, FaBed, FaComment } from "react-icons/fa";



export default function Home() {
  return (
   <div className=" min-m-[100vh] h-full flex-col ">
    <div className="flex items-center justify-between w-full h-[10vh] p-[3vh] bg-white shadow-lg backdrop-blur-md lg:shadow-none lg:p-[5vh]">
      <Bars3Icon className="w-6 h-6 text-gray-800  xl:hidden"  />
      
          <div className=" flex items-center w-[15vh] h-10vh xl:w-[25vh] xl:h-[10vh]"><img src="/airasia-move-light.svg" alt="Air-Asia-logo"/></div>

          <div className="min-w-[1] h-[5vh] bg-white flex gap-5">
              <ul className="min-w-[40vh] h-full text-[15px] text-black flex gap-[15px] items-center hidden xl:block xl:flex" >
                <li className="p-[5px] text-[15px] cursor-pointer">App</li>
                <li className="p-[5px] text-[15px] cursor-pointer">play</li>
                <li className="p-[5px] text-[15px] cursor-pointer">play</li>
                <li className="p-[5px] text-[15px] cursor-pointer">purchase</li>
                <li className="p-[5px] text-[15px] cursor-pointer">Check-in</li>
                <li className="p-[5px] text-[15px] cursor-pointer">Fligt Status</li>
                <li className="p-[5px] text-[15px] cursor-pointer">FAQ</li>
              </ul>
              <div className=" hidden xl:block xl:flex xl:justify-center xl:items-center border-l-1 border-r-1 h-full text-black">
               <Drawer />
               </div>
              <div className="min-w-[1vh] h-full items-center flex justify-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[3vh] w-[3vh] rounded-full border-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.244.717 5.879 1.929M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="hidden xl:block">Log in / Sign up</p>
              </div>
          </div>
           </div>
          <div className=" w-full min-h-[30vh] flex flex-col bg-white rounded-b-2xl xl:shadow-none max-w-[110rem] mx-auto p-2 flex gap-10 items-center">
            <NavigationBar  /> 
            <div className=" w-full min-h-[5vh] items-center flex flex-col justify-center hidden ">
               <div className="bg-white w-full min-h-[5vh]  mx-auto p-4 flex gap-10">
                <div className="flex items-center gap-2 w-fit py-2 bl-[4] cursor-pointer text-black">
                <h1 className="text-sm font-medium">Round-trip</h1>
                <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>

                <div className="w-[2px] h-[5vh] bg-black"></div>

                <div className="flex items-center gap-2 w-fit py-2 bl-[4] cursor-pointer text-black w-[15vh]">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-[3vh] w-[3vh] rounded-full border-1 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.244.717 5.879 1.929M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                <h1 className="text-sm font-medium">Round-trip</h1>
                <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </div>
                
                <div className="w-[2px] h-[5vh] bg-black opacity-50"></div>
                
                  <div className="relative w-64">
                      <input
                       type="text"
                        id="promo"
                        placeholder=" "
                        className="peer block w-full rounded-md border border-gray-300 px-3 pt-5 pb-1 text-sm placeholder-transparent focus:border-teal-700 focus:outline-none focus:ring-1 focus:ring-teal-700"
                      />
                    <label
                      htmlFor="promo"
                      className="absolute left-3 top-3 text-sm text-gray-400 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-teal-700"
                      >
                      Promo code
                  </label>
                  </div>
              </div>
              <div className=" w-full h-[5vh] flex bg-red-400 ">
              
              <InputLocation/>

                 
              </div>
            </div>
  
            <div className="w-[85%] min-h-[5vh] p-[3vh] bg-white shadow-md rounded-2xl items-center text-center flex flex-col gap-y-3 text-black lg:hidden ">
                  <h1 className="text-[13px] w-full md:text-xl">become an airAsia member Now!</h1>
                  <p className="text-[11px] w-full md:text-xl">log in sign to member-only offers and earn points.</p>
                  <button className="w-[75%] h-[5vh] rounded-full bg-green-300 border-2" >Log in/Sing up</button>
            </div>
             <ImageCarousel/>
              <div className="w-[80%] min-h-[50vh] flex flex-col justify-center">
              <h3 className="text-lg text-black font-fa ml-5">Pengumuman Penting</h3>
              <div className="overflow-x-auto  scrollbar-hidden-x">
                <div className="flex flex-row gap-4 min-w-max px-4 py-3 lg:w-full">
                  <TravelBox/>
                </div>
               </div>
              </div>

              
              <div className="w-[80%] min-h-[50vh] flex flex-col justify-center">
              <h3 className="text-lg text-black font-fa ml-5">Pengumuman Penting</h3>
              <div className="overflow-x-auto lg:overflow-x-hidden scrollbar-hidden">
                <div className="flex flex-row gap-4 min-w-max px-4 py-3 lg:min-w-full">
                  <Notice/>
                </div>
               </div>
              </div>
          </div>
            <div className="hidden lg:block lg:w-full min-h-[80vh] bg-gray-100 text-gray-400 pt-5 border-t-1 border-gray-600">
            <div className="w-full h-[80vh] pl-[5vh] pr-[5vh] mb-5: 5px; text-gray-400 pb-5">
              <h1 className="text-[50px] text-gray-800" >Pesan Tiket Pesawat, Hotel & SNAP Anda</h1>
              <hr className="w-full border-1  border-gray-600 opacity-75" />
              <div className=" flex flex-col">
              <div className="w-full flex justify-between p-10">
                <div className=" flex flex-col gap-y-3">
                  <h1 className="text-[15px] font-semibold uppercase text-gray-700 w-[80%]">Informasi Perjalanan</h1>
                  <p className="text-[10] ">Bandara dan terminal</p>
                  <p className="text-[10] ">Bagasi</p>
                  <p className="text-[10] ">Informasi Check-in</p>
                  <p className="text-[10] ">Check-in dengan Aplikasi Seluler AirAsia</p>
                  <p className="text-[10] ">Layanan Pelanggan dan Rencana Darurat</p>
                  <p className="text-[10] ">Tarif Kami</p>
                  <p className="text-[10] ">Status Penerbangan</p>
                  <p className="text-[10] ">Hot meals</p>
                  <p className="text-[10] ">Saluran pembayaran</p>
                  <p className="text-[10] ">Pilihan tempat duduk</p>
                  <p className="text-[10] ">Faktur pajak</p>
                  <p className="text-[10] "></p>

                </div>

                 <div className=" flex flex-col gap-y-3">
                  <h1 className="text-[15px] font-semibold uppercase text-gray-700">Produk dan Layanan Kami</h1>
                  <p className="text-[10] ">ZoneUp (New!)</p>
                  <p className="text-[10] ">Teleport Logistik</p>
                  <p className="text-[10] ">Penerbangan hemat</p>
                  <p className="text-[10] ">Red Carpet</p>
                  <p className="text-[10] ">airasia ride</p>
                  <p className="text-[10] ">Freedom Flyer Programme</p>
                  <p className="text-[10] ">airasia rewards</p>
                  <p className="text-[10] ">Daftar sebagai agen</p>
                  <p className="text-[10] ">Login agen</p>
                  <p className="text-[10] ">Group Booking</p>
                  <p className="text-[10] ">Hotel</p>
                  <p className="text-[10] ">SNAP</p>
                </div>

             
                <div className=" flex flex-col gap-y-3">
                  <h1 className="text-[15px] font-semibold uppercase text-gray-700">Produk Mitra Bisnis</h1>
                  <p className="text-[10] ">Daftar Sebagai Mitra Pengiriman Teleport</p>
                  <p className="text-[10] ">BigPay</p>
                  <p className="text-[10] ">Kartu AirAsia</p>
                  <p className="text-[10] ">AirAsia Travel Protection</p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                  <p className="text-[10] "></p>
                </div>
              
                <div className=" flex flex-col gap-y-3">
                  <h1 className="text-[15px] font-semibold uppercase text-gray-700">Tentang kami</h1>
                  <p className="text-[10] ">Ruang iklan</p>
                  <p className="text-[10] ">AirAsia Foundation</p>
                  <p className="text-[10] ">Peluang berkarir</p>
                  <p className="text-[10] ">Bagian relasi investor</p>
                  <p className="text-[10] ">Berita pers</p>
                  <p className="text-[10] ">Kantor penjualan</p>
                  <p className="text-[10] ">Promosi</p>
                </div>
              </div>
              <hr className="w-full border-1 h-"/>
              <div className="w-full min-h-[15vh] pt-5 pb-5 flex justify-between marg">
               <div className="w-[50vh] flex-col ju">
               <h1 className="text-gray-700">AirAsia Move</h1>
               <div className="flex">
               <img src="https://static.airasia.com/design/logos/app-store-badge.png" alt="" />
               <img src="https://static.airasia.com/design/logos/google-play-badge.png" alt="" />
               <img src="https://static.airasia.com/design/logos/huawei-app-gallery-badge.png" alt="" />
               </div>
               </div>


               <div className="w-full flex-col">
               <h1 className="text-right justify-end text-gray-700">Berhubunglah Dengan Kami</h1>
               <div className="flex items-end justify-end">
               <img src="https://static.airasia.com/design/images/email/facebook-MOVE.png" alt="" />
               <img src="https://static.airasia.com/design/images/email/tiktok-MOVE.png" alt="" />
               <img src="https://static.airasia.com/design/images/email/x-MOVE.png" alt="" />
               <img src="https://static.airasia.com/design/images/email/instagram-MOVE.png" alt="" />
               <img src="https://static.airasia.com/design/images/email/youtube-MOVE.png" alt="" />
               <img src="https://static.airasia.com/design/images/email/linkedin-MOVE.png" alt="" />
               </div>
               </div>
              </div>

              </div>
              </div >
                <hr className="w-full border-1 mt-5"/>
                <p className="p-[5vh] w-full text-sm text-black">© 2024 AirAsia Berhad (Malaysia). Situs web ini dimiliki dan dioperasikan oleh Move Travel Sdn Bhd (sebelumnya bernama AirAsia Com Travel Sdn Bhd)(201301020508), agen perjalanan terdaftar (No. Izin KPK/LN: 8287). Penggunaan Anda atas situs web ini menunjukkan bahwa Anda setuju untuk terikat oleh 
                <span className="text-red-400"> Syarat dan Ketentuan</span>, 
                <span className="text-red-400"> Ketentuan Penggunaan</span>, dan 
                <span className="text-red-400"> Kebijakan Privasi</span> kami.
                </p>

              </div>
               <div className="fixed bottom-0 w-full bg-white flex justify-around py-2 border-t lg:hidden">
                <div className="flex flex-col items-center text-teal-700 text-xs">
                <FaHome className="text-lg" />
                <span>Beranda</span>
                </div>

                <div className="flex flex-col items-center text-gray-500 text-xs">
                  <FaTicketAlt className="text-lg" />
                <span>Pembelian</span>
                 </div>

                <div className="flex flex-col items-center text-gray-500 text-xs">
                <FaPlaneDeparture className="text-lg" />
                <span>Check-in</span>
                </div>
          <div className="flex flex-col items-center text-gray-500 text-xs">
        <FaComment className="text-lg" />
        <span>Bantuan</span>
      </div>
    </div>
</div>
          
        
      
  );
}
