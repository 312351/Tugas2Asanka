import Travel from "./Travel"

export default function Notice(){
    return(
        <div className="w-full flex bg-white p[1vh] gap-5 lg:justify-center">
            <Travel iconSrc="https://static.airasia.com/cosmos/images/carouselwidget/id/Widget_Fast-Pass-Adapt_ID.jpg" h1="Bawaan lebih banyak, tapi selalu lebih satseeeeetttt" p="Udah termasuk bagasi kabin hingga 14kg, Check in counter khusus, Imigrasi fast lane*, Priority boarding"/>
            <Travel iconSrc="https://static.airasia.com/cosmos/images/carouselwidget/Hot-Boarding-Pass_NewMobileID.webp" h1="Boarding Pass Banyak Untungnya" p="Tunjukan boarding pass dan dapatkan keuntungannya!"/>
            <Travel iconSrc="https://static.airasia.com/cosmos/images/carouselwidget/id/2025/Widget-Rescue-Fee-ID.jpg" h1="Ketinggalan pesawat?" p="Naik penerbangan berikutnya pakai Rescue Fee."/>                                                
            <Travel iconSrc="https://static.airasia.com/cosmos/images/carouselwidget/id/2025/Widget-Early-Flex-ID.jpg" h1="Kelamaan nunggu di bandara?" p="Gerbang duluan pakai EARLY FLEX"/>                                                
        </div>
    );
}