import NavItem from "./NavItem";

export default function NavigationBar() {
  return (
    
   <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 w-full bg-white p-2">
      <NavItem iconSrc="/flights.png" label="Flights" />
      <NavItem iconSrc="/snap.png" label="Flights + Hotel" active />
      <NavItem iconSrc="/hotels.png" label="Hotels" />
      <NavItem iconSrc="https://static.airasia.com/design/icons/product-tile/app/v6/ride.png" label="Airport Transfer" />
      <NavItem iconSrc="/asean_pass.png" label="Asean Pass" />
      <NavItem iconSrc="/shop.png" label="Duty-Free" />
      <NavItem iconSrc="/movetix.png" label="Movetix" />
      <NavItem iconSrc="https://static.airasia.com/design/icons/product-tile/web/show-all.svg" label="Food" />
    </div>
  );
}