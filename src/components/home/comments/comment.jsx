





export function Comment() {
  return (
    <div className="block items-center justify-center lg:flex">
        <div className="m-9 flex items-start hover:scale-110 transition pb-2 w-90 rounded-2xl  bg-gradient-to-t from-yellow-100/60 to-purple-600/70 relative group overflow-hidden">
      {/* Heading: centered by default, moves to top on hover */}

      <div className="absolute whitespace-nowrap  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl transition-all duration-200 group-hover:top-4 group-hover:-translate-y-2 ">
        How to start learning?
      </div>

      {/* Steps: hidden by default, fade in on hover */}
      <ul className=" list-disc opacity-0 transition-opacity pl-8 duration-500 group-hover:opacity-100 pt-14 text-2xl">
        
        <li>Watch one anime episode.</li>
        <li>Take concise notes and key vocabulary.</li>
        <li>Write a short summary in your own words.</li>
        <li>Earn a mark for each summary and level up.</li>
      </ul>
    </div>
    <div className="m-9 hover:scale-105 transition pb-2 w-90 rounded-2xl  bg-gradient-to-b from-yellow-100/60 shadow-white  to-purple-600/70 relative group overflow-hidden">
      {/* Heading: centered by default, moves to top on hover */}

      <div className="absolute whitespace-nowrap  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl transition-all duration-200 group-hover:top-4 group-hover:-translate-y-2 ">
        How to start learning?
      </div>

      {/* Steps: hidden by default, fade in on hover */}
      <ul className=" list-disc opacity-0 transition-opacity pl-8 duration-500 group-hover:opacity-100 pt-14 text-2xl">
        
        <li>Watch one anime episode.</li>
        <li>Take concise notes and key vocabulary.</li>
        <li>Write a short summary in your own words.</li>
        <li>Earn a mark for each summary and level up.</li>
      </ul>
    </div>
    </div>
    
  );
}