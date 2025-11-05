import svgPaths from "../../utils/svg-fc6x0lpad3";

function Component1() {
  return (
    <div className="h-[40.283px] relative shrink-0 w-[67.675px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 41">
        <g id="Component 1">
          <g id="Fact">
            <path d={svgPaths.p2d453400} fill="var(--fill-0, white)" fillOpacity="0.91" />
            <path d={svgPaths.p2a733f70} fill="var(--fill-0, white)" fillOpacity="0.91" />
            <path d={svgPaths.p1f11bd80} fill="var(--fill-0, white)" fillOpacity="0.91" />
            <path d={svgPaths.p32551400} fill="var(--fill-0, white)" fillOpacity="0.91" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function LogotypeShort() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Logotype Short">
      <Component1 />
    </div>
  );
}

function Link() {
  const handleClick = () => {
    document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[74px] cursor-pointer" data-name="Link" onClick={handleClick}>
      <div className="flex flex-col font-['ABC_Monument_Grotesk',_sans-serif] justify-center not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] w-full">
        Platform
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[18.2px] items-center max-h-[18.2px] max-w-[73.8px] min-h-[18.2px] min-w-[73.8px] relative shrink-0" data-name="Container">
      <Link />
    </div>
  );
}

function Link1() {
  const handleClick = () => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[95.2px] cursor-pointer" data-name="Link" onClick={handleClick}>
      <div className="flex flex-col font-['ABC_Monument_Grotesk',_sans-serif] justify-center not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] w-full">
        FAQ
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[18.2px] items-center max-h-[18.2px] min-h-[18.2px] relative shrink-0 w-[51px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Link2() {
  const handleClick = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer" data-name="Link" onClick={handleClick}>
      <div className="flex flex-col font-['ABC_Monument_Grotesk',_sans-serif] justify-center not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] w-[72px]">
        Contact
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[18.2px] items-start max-h-[18.2px] max-w-[60.9px] min-h-[18.2px] min-w-[60.9px] relative shrink-0 w-[60.9px]" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[16.36px] items-start relative shrink-0 w-[8.22px]" data-name="Container">
      <div className="flex flex-col font-['ABC Monument Grotesk',_sans-serif] justify-center leading-[0] max-h-[16.38px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12.6px] text-nowrap text-white tracking-[0.14px]">    
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[80px]" data-name="Link">
      <div className="flex flex-col font-['ABC_Monument_Grotesk',_sans-serif] h-[19px] justify-center not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] w-[67px]">
        Try Demo
      </div>
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[18.2px] items-start max-h-[18.2px] max-w-[70.9px] min-h-[18.2px] min-w-[70.9px] relative shrink-0 w-[70.9px]" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[0.59px] pt-0 px-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['ABC_Monument_Grotesk_Mono_Unlicensed_Trial',_sans-serif] justify-center not-italic relative shrink-0 text-[#0f0e12] text-[11.6px] text-center text-nowrap tracking-[0.12px] uppercase">
        SCAN NOW
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center min-w-[72px] pb-[4px] pt-[4px] px-[16px] relative rounded-[14px] shrink-0 h-full" data-name="Component 12">
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[39.6px] items-start max-h-[39.6px] min-h-[39.6px] relative shrink-0" data-name="Container">
      <Component12 />
    </div>
  );
}

export function HeaderMenu() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(23,23,23,0.5)] box-border content-stretch flex gap-[48px] items-center pl-[22px] pr-[4px] py-[4px] relative rounded-[16px] shrink-0" data-name="Header">
      <Container />
      <Container1 />
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <LogotypeShort />
      <Header />
    </div>
  );
}

export default function Header1() {
  return (
    <div className="relative size-full" data-name="Header">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[36px] px-[16px] sm:px-[20px] md:px-[28px] lg:px-[36px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}